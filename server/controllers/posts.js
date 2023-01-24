import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js'

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();//find data needs time, so it should be async. use async... await...
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const { title, message, creator, selectedFile, zipcode } = req.body;// data of post sent from frontend
    const newPostMessage = new PostMessage({ title, message, creator, selectedFile, zipcode })

    try {
        await newPostMessage.save();//save data needs time, so async
        res.status(201).json(newPostMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, zipcode } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { title, message, creator, selectedFile, zipcode, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}