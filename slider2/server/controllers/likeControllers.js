const {Like} = require('../models/modelsRating.js') ; 

class LikeController {
    async create(req , res) {
        try {
            let {likeCount} = req.body ; 
            const like = await Like.create({like: likeCount}) ; 
            return res.json(like) ;
        } catch (e) {
            res.status(400).json(e) ; 
        } 
        
    }

    async put(req , res) {
        try {
            let {id , isActive} = req.body ; 
            const likeCount = await Like.findOne({where: {id}}) ; 
            console.log(likeCount) ; 
            let like = likeCount.like ;
            if (isActive === 'true') {
                like = likeCount.like+1; 
                isActive = false 
            } else if (isActive === 'false') {
                like = likeCount.like-1; 
                isActive = true 
            }
            let likePut = await likeCount.update({like}) ; 
            const likePuts = {
                ...likePut , 
                isActive 
            } 
            return res.json(likePuts) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        }
        
    }

    async minusLike(req , res) {
        try {
            let {id} = req.body ; 
            const likeCount = await Like.findOne({where: {id}}) ; 
            let like = likeCount.like-1 ; 
            const minusLike = await likeCount.update({like}) ; 
            console.log(minusLike) ; 
            return res.json(minusLike) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        } 
        
    }

    async getAll(req , res) {
        try {
           const likes = await Like.findAll() ; 
           return res.json(likes) ;  
        } catch (e) {
            res.status(400).json(e) ; 
        }
    }
}

module.exports = new LikeController ; 