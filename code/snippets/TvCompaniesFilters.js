function TvCompaniesFilters(config){
	TrxsFilters.call(this,config);
}

inheritPrototype(TvCompaniesFilters,TrxsFilters);

TvCompaniesFilters.prototype.constructor = TvCompaniesFilters;

TvCompaniesFilters.prototype.initializeParameters = function(){
	TrxsFilters.prototype.initializeParameters.call(this);
	this.path = "snippets/tvCompaniesFilters.html";
	this.urlService = "service/manager/getTvTrxs.php";
	this.filterType = Globals.TRXS_TV_COMPANIES;
}

TvCompaniesFilters.prototype.initialize = function(){
	TrxsFilters.prototype.initialize.call(this);
}

TvCompaniesFilters.prototype.getProducts = function() {
	$.ajax({
		context : this,
		type : "POST",
		async : false,
		url : "service/manager/getProducts.php",
		success : function(r){
			if(JSON.parse(r).length > 0){
				JSON.parse(r).forEach(function(d){
					if(d.idProducto == 24){	
						var opt = "<option data-id='" + d.idProducto + "'>" + d.producto + "</option>";
						$(this.node).find("#products-list").append(opt);
					}
				},this);
			}
		},
		error : function(error){
			debugger;
		}
	})
}

TvCompaniesFilters.prototype.getData = function() {
	return { 	
		desde:this.getDateFrom(),
		hasta:this.getDateTo(),
		idUsuario:this.getUserId(),
		idCliente:this.getClientId(),
		idProducto:this.getProductId(),
		modeloDeTerminal:this.getTerminalModel(),
		estado:this.getStatus(),
		clienteZona:this.getClientZone()
	}
}