const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
    url:String,
    category:String,
    categoryId:String,
    playList:String,
    playlistId:String
},{
    timestamps: true
})

module.exports = mongoose.model(
    'video',VideoSchema,'Video Library'
);