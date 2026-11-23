const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({name:{type:String,default:''},hotelName:{type:String,default:''},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true},role:{type:String,enum:['hotel','receptionist','housekeeper','supervisor'],required:true},hotelId:{type:mongoose.Schema.Types.ObjectId,ref:'User',default:null}}, {timestamps:true});
module.exports=mongoose.model('User',userSchema);
