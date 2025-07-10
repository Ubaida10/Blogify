import Blog from '../Model/blogModel.js';


const mapBlog = (blog) => ({
    id: blog._id,
    title: blog.title,
    content: blog.content,
    author: blog.author,
    category: blog.category,
    publishDate: blog.createdAt,
    lastUpdated: blog.updatedAt,
    imageUrl: blog.imageUrl
});

export const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.status(201).json(mapBlog(blog));
    } catch (err) {
        console.error("Error creating blog:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find({});
        res.status(200).json(blogs.map(mapBlog));
    } catch (err) {
        console.error("Error fetching blogs:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(mapBlog(updatedBlog));
    } catch (err) {
        console.error("Error updating blog:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBlog = await Blog.findByIdAndDelete(id);
        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json({ message: "Blog deleted successfully" });
    } catch (err) {
        console.error("Error deleting blog:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};