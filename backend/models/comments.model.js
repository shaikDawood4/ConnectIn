import mongoose from "mongoose";

const commentSchema = mongoose.Schema({
    userId : {   // kiskne
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    },
    postId : {    //kiske post pe 
        type : mongoose.Schema.Types.ObjectId,
        ref : "Post"
    },
    body : {   //kya comment ? 
        type : String,
        required : true
    }
})


const Comment = mongoose.model("Comment",commentSchema);

export default Comment;