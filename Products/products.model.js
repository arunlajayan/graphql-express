const product = [
    {
        id: "red shoe",
        description: " shoe",
        price: 12.2,
        reviews:[]
      },
      {
        id: "red shirt",
        description: " dress",
          price: 10.2,
          reviews:[]
      },
]

function getAllProduct() {
    return product
};

function getProductByPrice(min,max) {
    return product.filter((pro) => {
         return pro.price >= min && pro.price <= max;
    })
}
async function getProductById(ides) {
    
    return product.filter((pro) => {
       return pro.id == ides
    })
}
function AddNewProduct(id, description, price) {
   // console.log(id,description,price)
    const newProduct = {
        id,
        description,
        price,
        reviews:[]
    }
    product.push(newProduct);
    return newProduct;
}

async function addNewProductReview(id, rating, comment) {
   const findProduct = await getProductById(id);
   
    if (findProduct) {
        await  console.log(findProduct[0].id)
        const newReview = {
            rating,
            comment
        }
        findProduct[0].reviews.push(newReview);
        return findProduct;
    }
}

module.exports = {
    getAllProduct,
    getProductByPrice,
    getProductById,
    AddNewProduct,
    addNewProductReview
}