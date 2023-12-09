const productModel = require('./products.model');

module.exports = {
    Query: {
        Products: async (parent, args, context, info) => {
            return productModel.getAllProduct();
        },
    }
   
}
