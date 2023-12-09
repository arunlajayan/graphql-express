orders = [
    {
        date: "2001-02-20",
        subtotal: 40.2,
        items: [
          {
            product: {
              id: "red shirt",
              description: " dress",
              price: 10.2,
            },
            quantity: 2,
            
          },
        ],
      },
]

function getAllOrders() {
    return orders;
}
module.exports = {
    getAllOrders
}