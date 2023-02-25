const {View} = require('../models/modelsRating.js') ; 

class ViewController {
    async create(req , res) {
        try {
            let {ViewCount} = req.body ; 
            const view = await View.create({view: ViewCount}) ; 
            return res.json(view) ;
        } catch (e) {
            res.status(400).json(e) ; 
        } 
        
    }

    async put(req , res) {
        try {
            let {id} = req.body ; 
            const viewCount = await View.findOne({where: {id}}) ; 
            let view = viewCount.view+1; 
            const viewPut = await viewCount.update({view}) ; 
            return res.json(viewPut) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        }
        
    }

    async getAll(req , res) {
        try {
           const views = await View.findAll() ; 
           return res.json(views) ;  
        } catch (e) {
            res.status(400).json(e) ; 
        }
    }
}

module.exports = new ViewController ; 