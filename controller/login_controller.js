



exports.login = (req,res) =>{
if (req.body.userID == "123456" && req.body.password =="12345678") {
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