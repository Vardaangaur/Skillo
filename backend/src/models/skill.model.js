import mongoose from "mongoose"

const skillSchema=new mongoose.Schema({
    name:String,
    description:String,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Skill=mongoose.model("Skill",skillSchema);
export default Skill;