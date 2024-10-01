import mongoose from 'mongoose'

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://tesnimyounes:14037534@cluster0.hkntdbv.mongodb.net/application_web_food_delivery').then(()=>console.log("DB Connected"));
}
//creation de base de donne nomee application_web_food_delivery