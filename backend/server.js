require('dotenv').config();
const express=require('express'); const cors=require('cors'); const mongoose=require('mongoose');
const app=express(); app.use(cors()); app.use(express.json()); app.use(express.static(require('path').join(__dirname,'../frontend')));
app.use('/api/auth',require('./routes/authRoutes')); app.use('/api/rooms',require('./routes/roomRoutes')); app.use('/api/activities',require('./routes/activityRoutes'));
app.get('/api/health',(req,res)=>res.json({ok:true,app:'InnReady',time:new Date()}));
const PORT=process.env.PORT||3000;
mongoose.connect(process.env.MONGO_URI||'mongodb://127.0.0.1:27017/innready').then(()=>{console.log('MongoDB connected');app.listen(PORT,()=>console.log(`InnReady running http://localhost:${PORT}`));}).catch(err=>{console.error('MongoDB connection failed:',err.message); console.error('Server not started. Configure MONGO_URI and ensure MongoDB is running.');});
