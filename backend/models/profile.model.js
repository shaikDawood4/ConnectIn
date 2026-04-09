import mongoose from "mongoose";

const educationSchema = mongoose.Schema({
    school : {
        type : String,
        default:''
    },
    degree : {
        type : String,
        default : ''
    },
    fieldOfStudy :{
        type :String,
        default :''
    }
});

const workSchema = mongoose.Schema({
    company :{
        type : String,
        default : ''
    },
    position :{
        type: String,
        default : ''
    },
    years : {
        type :String,
        default :''
    }
});

const profileScehma = mongoose.Schema({
    userId :{
        type : mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    bio : {
        type : String,
        default : ''
    },
    pastWork :{
        type :[workSchema],
        default : []
    },
    education : {
        type : [educationSchema],
        default : []
    }
});  // in this we are gonna have field : pastWord(i.e related to workSchema ) and education(related to educationScehma);


const Profile = mongoose.model("Profile",profileScehma);

export default Profile;