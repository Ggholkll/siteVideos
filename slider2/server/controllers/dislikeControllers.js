const {Dislike , Like} = require('../models/modelsRating.js') ; 

class DislikeController {
    async create(req , res) {
        try {
            let {dislikeCount} = req.body ; 
            const dislike = await Dislike.create({dislike: dislikeCount}) ; 
            return res.json(dislike) ;
        } catch (e) {
            res.status(400).json(e) ; 
        } 
        
    }

    async put(req , res) {
        try {
            let {id , isActive} = req.body ; 
            const dislikeCount = await Dislike.findOne({where: {id}}) ;  
            let dislike = dislikeCount.dislike; 
            if (isActive === 'true') {
                dislike = dislikeCount.dislike+1; 
                isActive = false ; 
            } else if (isActive === 'false') {
                dislike = dislikeCount.dislike-1; 
                isActive = true ; 
            }

            const dislikePut = await dislikeCount.update({dislike}) ; 
            const dislikePuts = {
                ...dislikePut , 
                isActive
            }
            return res.json(dislikePuts) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        }
        
    }

    async minusDislike(req , res) {
        try {
            let {id} = req.body ; 
            const dislikeCount = await Dislike.findOne({where: {id}}) ; 
            let dislike = dislikeCount.dislike-1 ; 
            const minusDislike = await dislikeCount.update({dislike}) ; 
            console.log(minusDislike) ; 
            return res.json(minusDislike) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        } 
        
    }

    async getAll(req , res) {
        try {
           const dislikes = await Dislike.findAll() ; 
           return res.json(dislikes) ;  
        } catch (e) {
            res.status(400).json(e) ; 
        }
    }
}

module.exports = new DislikeController ; 