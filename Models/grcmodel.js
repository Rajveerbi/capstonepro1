import mongoose from 'mongoose'
const Schema=mongoose.Schema

const grocerySchema = new Schema({
    groceryitem :{
        type:String
    },
    Ispurchased:{
        type:Boolean,
       
    }
},{timestamps:false})

export const Item=mongoose.model('Item',grocerySchema)