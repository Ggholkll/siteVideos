const Router = require('express') ; 
const LikeController = require('../controllers/likeControllers.js') ; 
const ViewControllers = require('../controllers/viewControllers.js') ; 
const DislikeController = require('../controllers/dislikeControllers.js') ; 
const PlaylistController = require('../controllers/playlistControllers.js') ; 
const router = new Router() ; 

router.get('/like' ,LikeController.getAll)  ; 
router.post('/like' , LikeController.create) ; 
router.put('/like' , LikeController.put) ; 
router.put('/likeMinus' , LikeController.minusLike) ; 
router.get('/view' , ViewControllers.getAll)  ; 
router.post('/view' , ViewControllers.create) ; 
router.put('/view' , ViewControllers.put) ; 
router.get('/dislike' , DislikeController.getAll)  ; 
router.post('/dislike' , DislikeController.create) ; 
router.put('/dislike' , DislikeController.put) ; 
router.put('/dislikeMinus' , DislikeController.minusDislike) ; 
router.get('/PlaylistRatings' , PlaylistController.getAll) ; 
router.get('/PlaylistRating/:id' , PlaylistController.getOne) ; 
router.post('/PlaylistRatings' , PlaylistController.create) ; 
router.put('/PlaylistLike' , PlaylistController.putLike) ; 
router.put('/PlaylistView' , PlaylistController.putView) ; 
router.put('/PlaylistDislike' , PlaylistController.putDislike) ; 
router.put('/PlaylistLikeMinus' , PlaylistController.minusLike) ; 
router.put('/PlaylistDislikeMinus' , PlaylistController.minusDislike) ; 

module.exports = router ; 

