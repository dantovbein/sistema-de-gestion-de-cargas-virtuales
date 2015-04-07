function MobileCompaniesFilters(config){
	TrxsFilters.call(this,config);
}

inheritPrototype(MobileCompaniesFilters,TrxsFilters);

MobileCompaniesFilters.prototype.constructor = MobileCompaniesFilters;

MobileCompaniesFilters.prototype.initializeParameters = function(){
	TrxsFilters.prototype.initializeParameters.call(this);
	this.path = "snippets/mobileCompaniesFilters.html";
	this.urlService = "service/manager/getMobileTrxs.php";
}

MobileCompaniesFilters.prototype.initialize = function(){
	TrxsFilters.prototype.initialize.call(this);
}

MobileCompaniesFilters.prototype.getProducts = function() {
	$.ajax({
		context : this,
		type : "POST",
		async : false,
		url : "service/manager/getProducts.php",
		success : function(r){
			$(this.node).find("#products-list").append("<option data-id='0'>Todos</option>");
			JSON.parse(r).forEach(function(d){
				if(d.idProducto != 24){
					var opt = "<option data-id='" + d.idProducto + "'>" + d.producto + "</option>";
					$(this.node).find("#products-list").append(opt);
				}
			},this);
		},
		error : function(error){
			debugger;
		}
	})
}