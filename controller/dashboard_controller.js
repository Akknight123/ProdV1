const Video_Schema = require('../model/video_model');
const category_schema = require('../model/category_model');
const playListSchema = require('../model/playlist_model');

exports.getDashboard =async (req,res) =>{
    var videos = await Video_Schema.find()
    var categories = await category_schema.find()
    // var playLists = await playListSchema.find()

    playListSchema.find().then(value =>{
        res.status(200).json({
            status: true,
           
          
            data: {
                "videos":videos,
                "categories": categories,
                "playlist": value
            }
            
        });
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while retrieving notes."
        });
    });
}