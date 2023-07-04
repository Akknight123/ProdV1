const category_Schema = require('../model/category_model');

exports.create = (req,res) =>{
    const category = new category_Schema({
        name: req.body.name,
        image: req.body.image,
       
    });
    category.save().then(data => {
        res.status(200).json({
            status: true,
            message: "category saved successfully",
            data: data,
        });
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while creating the Note."
        });
    });
}



exports.findAll = (req, res) => {
  
    
    category_Schema.find()
    .then(value => {
        if (value.length==0) {
            res.status(200).json({
                status: false,
                length: value.length,
                message: "No Categories Available",
                data: value
                
            });
        }else{
            res.status(200).json({
                status: true,
                length:value.length,
                message: "Categories loaded successfully",
                data: value,
            });
        }
     
    }).catch(err => {
        res.status(500).send({
            error: err.message || "Some error occurred while retrieving notes."
        });
    });
};
exports.getOne= (req,res)=>{
    
      category_Schema.findById({ '_id': req.query.uid})
      .then(value => {
      
        res.status(200).json({
            status: true,
            
            message: "Categories loaded successfully",
            data: value,
        });
       
      }).catch(err => {
        res.status(200).json({
            status: false,
                  
            message: "Category Not Found",
        });
      
      });
      
}

exports.findOne = (req, res) => {
    category_Schema.exists({uuid:req.query.uuid},function(err,results) {
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

exports.removeOne=(req,res)=>{
    category_Schema.findByIdAndRemove(req.query.uid)
    .then(note => {
        if(!note) {
            return res.status(200).json({
               status:false,
               message: "Category not found with id " + req.query.uid
            });
        }else{
            return res.status(200).json({
                status:true,
                message: "Category deleted successfully!"
             });
        }
    
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Category not found with id " + req.query.uid
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.query.uid
        });
    });
}
