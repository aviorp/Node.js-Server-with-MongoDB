const Products = require('../../models/product.model')


const getAll = (req, res) => {
    Products.find({}, { __v: 0 }, (err, result) => {
        if (err) {
            res.json({ message: "There is an Error , Contact the Admin : " + err })
        }
        res.json(result)

    })
}

const search = (req, res) => {
    let name = req.params.name;
    //  * insensitive case 
    Products.find({ name: { $regex: `^${name}`, '$options': 'i' } }, { _v: 0 }, (err, result) => {
        if (err) {
            res.json({ message: "There is an Error , Contact the Admin : " + err })
        }
        res.json(result)
    })
}

const getSpecific = (req, res) => {
    let name = req.params.name;
    Products.find({ categoryName: name }, { __v: 0 }, (err, result) => {
        if (err) {
            res.json({ message: "There is an Error , Contact the Admin : " + err })
        } else if (result.length === 0) {
            res.json({ status: 'invalid', message: 'did not found a product' })
        } else {
            res.json(result)
        }
    })
}

module.exports = { getAll, getSpecific, search }