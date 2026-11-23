const jwt=require('jsonwebtoken');
module.exports=(req,res,next)=>{const token=(req.headers.authorization||'').replace(/^Bearer\s+/,'');if(!token)return res.status(401).json({message:'Authentication required'});try{req.user=jwt.verify(token,process.env.JWT_SECRET||'dev_only_change_me');next();}catch(e){res.status(401).json({message:'Invalid or expired token'});}};
