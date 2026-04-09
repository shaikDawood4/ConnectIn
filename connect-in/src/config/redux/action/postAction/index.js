import { clientServer } from "@/config";
import { createAsyncThunk } from "@reduxjs/toolkit";



export const getAllPosts = createAsyncThunk(
    "post/getAllPosts",
    async(_,thunkAPI)=>{
        try{
          const response = await clientServer.get("/posts");

          return thunkAPI.fulfillWithValue(response.data)
        }
        catch(err){
            return thunkAPI.rejectWithValue(err.response.data)
        }
    }
)


export const createPost = createAsyncThunk(
    "post/createPost",
    async(userData, thunkAPI)=>{
        const {file,body} = userData;
        try{

            const formData = new FormData();
            formData.append('token', localStorage.getItem('token'));
            formData.append('body', body);
            formData.append('media', file);

            const response = await clientServer.post("/post",formData,{
                headers: {
                    'content-type' : 'multipart/form-data'
                }
            });

            if(response.status === 200){
                return thunkAPI.fulfillWithValue("post uploaded")
            }else{
                return thunkAPI.rejectWithValue("post not uploaded")
            }
        }catch(err){
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
)



export const deletePost = createAsyncThunk(
    "post/deletePost",
    async(postId, thunkAPI)=>{
        try{
            const response = await clientServer.delete("/delete_post", {
                data:{
                    token : localStorage.getItem("token"),
                    post_id : postId.postId
                }
            })
            return thunkAPI.fulfillWithValue(response.data)
        } catch(err){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
) 


export const incrementPostLike = createAsyncThunk(
    "post/incrementLike",
    async(post, thunkAPI)=>{
        try{
            const response = await clientServer.post(`/increment_post_like`,{
                post_id: post.post_id
        })
        return thunkAPI.fulfillWithValue(response.data)
        }catch(err){
            return thunkAPI.rejectWithValue(err.response.data.message);  //i just want to know how the err body looks like
        }
    }
)


export const getAllComments = createAsyncThunk(
    "post/getAllComments",
    async (postData, thunkAPI) => {
        try {
            const response = await clientServer.get("/get_comments", {
                params: {
                    postId: postData.postId
                }
            });
           console.log("res we got is",response.data)
            return thunkAPI.fulfillWithValue({
                comments: response.data,
                postId: postData.postId
            });
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "something went wrong"
            );
        }
    }
);


export const postComment = createAsyncThunk(
    "post/postComment",
    async (commentData, thunkAPI) => {
        try {
            console.log("Sending to backend:", {
                token: localStorage.getItem("token"),
                postId: commentData.postId,
                commentBody: commentData.body
            });

            const response = await clientServer.post("/comment", {
                token: localStorage.getItem("token"),
                postId: commentData.postId,
                commentBody: commentData.body
            });

            return thunkAPI.fulfillWithValue(response.data);
        } catch (err) {
            return thunkAPI.rejectWithValue(
                err.response?.data?.message || "something went wrong"
            );
        }
    }
);