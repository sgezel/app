var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var orders = this.orders.filter(function(element) {            
            return element.customer.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, orders);
    }

    this.findById = function(id, callback) {
        var orders = this.orders;
        var order = null;
        var l = orders.length;
        for (var i=0; i < l; i++) {
            if (orders[i].order_id == id) {
                order = orders[i];
                break;
            }
        }
        callLater(callback, order);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }
	
	var orderlist = []; 
	this.test = $.ajax({
			  async: false,
			  type: "POST",
			  url: "http://localhost/admin/webservice.php?json&IDENT=1D788B191DEF49D4AD720136FD52E42A",
			  data: "function=getOpenOrdersFull",
			  success: function(jsondata){
						orderlist = eval("(" + jsondata + ")");
					   }
			});
	
	this.orders = orderlist;    

    callLater(successCallback);

}