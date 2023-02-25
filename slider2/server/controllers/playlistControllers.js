const {PlaylistRating} = require('../models/modelsRating.js') ; 

class PlaylistController {
    async create (req , res) {
        try {
            const {view , like , dislike} = req.body ; 
            const playlistRatings = await PlaylistRating.create({view , like , dislike}) ; 
            return res.json(playlistRatings) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        }
        
    }

    async putLike(req , res) {
        try {
            let {id , isActive} = req.body ; 
            const playlistLike = await PlaylistRating.findOne({where: {id}}) ; 
            if (!playlistLike) {
                return res.json('Not found like by id') ; 
            }
            let like = playlistLike.like ; 
            if (isActive === 'true') {
                like = playlistLike.like+1; 
                isActive = false 
            } else if (isActive === 'false') {
                like = playlistLike.like > 0 
                ?  playlistLike.like-1 
                : playlistLike.like 
                isActive = true 
            }

            const putLikes = await playlistLike.update({like}) ; 
            const newLikes = {
                ...putLikes , 
                isActive 
            } 
            return res.json(newLikes) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        }
        
    }

    async putDislike(req , res) {
        try {
            let {id , isActive} = req.body ; 
            const playlistDislike = await PlaylistRating.findOne({where: {id}}) ; 
            if (!playlistDislike) {
                 return res.json('Not found dislike by id') ; 
            }
            let dislike = playlistDislike.dislike ; 
            if (isActive === 'true') { 
                dislike = playlistDislike.dislike+1; 
                isActive = false 
            } else if (isActive === 'false') { 
                dislike = playlistDislike.dislike > 0
                ? playlistDislike.dislike-1 
                : playlistDislike.dislike 
                isActive = true 
            }

            const putDislikes = await playlistDislike.update({dislike}) ; 
            const newDislikes = {
                ...putDislikes , 
                isActive 
            } 
            return res.json(newDislikes) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        }
        
    }

    async putView(req , res) {
        try {
            const {id} = req.body ; 
            const playlistViews = await PlaylistRating.findOne({where: {id}}) ; 
            if (!playlistViews) {
                return res.json('Not found views by id') ; 
            }
            let view = playlistViews.view+1 ; 
            const putViews = await playlistViews.update({view}) ; 
            return res.json(putViews) ;  
        } catch (e) {
            res.status(400).json(e) ; 
        }
        
    }

    async minusLike(req , res) {
        try {
            let {id} = req.body ; 
            const playlistLikeCount = await PlaylistRating.findOne({where: {id}}) ; 
            if (!playlistLikeCount) {
                return res.json('Not found like by id') ; 
            }
            let like = playlistLikeCount.like > 0 
            ? playlistLikeCount.like-1 
            : playlistLikeCount.like 
            const minusLike = await playlistLikeCount.update({like}) ; 
            return res.json(minusLike) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        } 
        
    }

    async minusDislike(req , res) {
        try {
            let {id} = req.body ; 
            const playlistDislikeCount = await PlaylistRating.findOne({where: {id}}) ; 
            if (!playlistDislikeCount) {
                return res.json('Not found dislike by id') ; 
            }
            let dislike =  playlistDislikeCount.dislike > 0 
            ? playlistDislikeCount.dislike-1 
            : playlistDislikeCount.dislike 
            const minusDislike = await playlistDislikeCount.update({dislike}) ; 
            console.log(minusDislike) ; 
            return res.json(minusDislike) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        } 
        
    }

    async getAll(req , res) {
        try {
            const playlistRatings = await PlaylistRating.findAll() ; 
            return res.json(playlistRatings) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        }
        
    }

    async getOne(req , res) {
        try {
            let {id} = req.params ; 
            const playlistRating = await PlaylistRating.findOne({where: {id}}) ; 
            if (!playlistRating) {
                return res.json('Not found rating by id') ; 
            }
            return res.json(playlistRating) ; 
        } catch (e) {
            res.status(400).json(e) ; 
        }
        
    }

}

module.exports = new PlaylistController ; 