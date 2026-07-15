import  Jwt from "jsonwebtoken";

const adminAuth = async (req,res,next)=>{
    try {
        const {token} = req.headers
        if(!token){
            return res.send({success:false,message:"not authorized login again"})
        }
        const token_decod = Jwt.verify(token,process.env.JWT_SECRET)
        if(token_decod !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD ){
            return res.send({success:false,message:"not authorized log in again"})
        }
        next()
    } catch (error) {
        console.log(error);
        res.send({success:false,message:error.message})
    }
}


export default adminAuth;