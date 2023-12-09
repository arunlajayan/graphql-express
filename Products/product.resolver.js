const productModel = require('./products.model');

module.exports = {
    Query: {
        Products: async (parent, args, context, info) => {
            return productModel.getAllProduct();
        },
        productByPrice: (_, args) => {
            return productModel.getProductByPrice(args.min,args.max)
        },
        productById: async (_, args) => {
            const data = await Promise.resolve(productModel.getProductById(args.ides));
            // console.log(data)
            return data;
        }
    },
    Mutation: {
        AddNewProduct: (_, args) =>{
            return productModel.AddNewProduct(args.id, args.description, args.price);
        }
    }
   
}
