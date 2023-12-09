const orderModel = require('./orders.model');

module.exports = {
    Query: {
        Orders: async (parent, args, context, info) => {
            return orderModel.getAllOrders();
        },
    }
   
}