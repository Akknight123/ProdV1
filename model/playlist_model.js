const mongoose = require('mongoose');

const playListSchema = mongoose.Schema({
    name:String,
    image:String,
    category:String,
    categoryId:String,
    videos:Array
},{
    timestamps: true
})

module.exports = mongoose.model(
    'playlist',playListSchema,'PlayList'
);