import mongoose from "mongoose";

const connectionRequestSchema = mongoose.Schema({
    userId:{   // from whom ?
        type : mongoose.Schema.Types.ObjectId,
        ref :"User"
    },
    connectionId : { // sent to whom ? 
        type : mongoose.Schema.Types.ObjectId,
        ref :"User"
    },
    status_accepted : {
        type : Boolean,
        default : null
    }

})


const ConnectionRequest = mongoose.model("ConnectionRequest",connectionRequestSchema);
export default ConnectionRequest;