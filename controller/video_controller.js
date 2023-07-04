const Video_Schema = require('../model/video_model');
const category_schema = require('../model/category_model')
exports.create = (req,res) =>{
    const video = new Video_Schema({
        url: req.body.url,
        category: req.body.category,
        categoryId:req.body.categoryId,
        playList: req.body.playList,
        playlistId: req.body.playlistId
    });


    video.save().then(data => {
        res.status(200).json({
            status: true,
            message: "video saved successfully",
            data: data,
        });
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Note."
        });
    });
}


exports.findAll = (req, res) => {

   
    Video_Schema.find()
    .then(videos => {
if (videos.length ==0) {
    res.status(200).json({
        status: false,
        length:videos.length,
        message: "No Videos available",
        data: videos,
    });
}else{
    res.status(200).json({
        status: true,
        length:videos.length,
        message: "Videos loaded successfully",
        data: videos,
    });
}
       
        // res.send(videos);
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while retrieving notes."
        });
    });
};

exports.removeOne=(req,res)=>{
    Video_Schema.findByIdAndRemove(req.query.uid)
    .then(note => {
        if(!note) {
            return res.status(200).json({
               status:false,
               message: "Video not found with id " + req.query.uid
            });
        }else{
            return res.status(200).json({
                status:true,
                message: "Video deleted successfully!"
             });
        }
    
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Video not found with id " + req.query.uid
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.query.uid
        });
    });
}


exports.findOne = (req, res) => {
    Video_Schema.exists({uuid:req.query.uuid},function(err,results) {
        if (err) {
            res.send(err);
        } else {
            if (results) {
                BS_order.find({uuid:req.query.uuid,status:req.query.status},function(err,datamodal) {
                    if (err) {
                        res.send(err);
                    } else {
                        res.send(datamodal);
                    }})
            } else {
                res.send(results);
            }
        }
    });

   
};
