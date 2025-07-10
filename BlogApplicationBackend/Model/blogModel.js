import mongoose, {Schema} from "mongoose";

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true,
    },
    author:{
        type: String,
        required: true,
    },
    category:{
      type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: mongoose.Schema.Types.Mixed,
        default: null,
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;