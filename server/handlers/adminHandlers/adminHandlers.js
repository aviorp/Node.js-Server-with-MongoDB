
let Product = require('../../models/product.model')

const newProduct = (req, res) => {
    let newProduct = Product({ name, categoryId, price, image } = req.body);
    Product.find({name : name} , (err , result)=>{
        if(err){
            res.json({status:"error" ,message: "There is an Error , Contact the Admin : " + err }) 
        }  
    })
    newProduct.save();
    res.json("The product added succesfully.")
}

const editProduct = (req, res) => {
    let { id, name, categoryId, price } = req.body

    Product.updateOne({ _id: id }, {
        $set: {
            name: JSON.stringify(name),
            categoryId: JSON.stringify(categoryId),
            price: JSON.stringify(price)
        }
    }, (err) => {
        if (err) {
            res.json({ message: "There is an Error , Contact the Admin : " + err })
        } res.json('The product edited Successfully.')
    })
}


module.exports = {
    newProduct,
    editProduct
}