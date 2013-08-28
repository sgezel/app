var OrderView = function(order) {
	this.initialize = function() {
        this.el = $('<div/>');
    };
	
	this.render = function() {
		this.el.html(OrderView.template(order));
		return this;
	};
 
    this.initialize();
}

OrderView.template = Handlebars.compile($("#order-tpl").html());