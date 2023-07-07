require('dotenv').config();



exports.login = (req,res) =>{
if (req.body.userID == process.env.USER_ID && req.body.password ==process.env.PASSWORD) {
    res.status(200).json({
        status: true,
       
        message: "Logged in successful",
       
    });
}else{
    res.status(200).json({
        status: false,
       
        message: "Credentials not match",
       
    });
}
}