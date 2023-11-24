import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema(
	{
		postTitle: { type: String, required: true },
		postDescription: { type: String, required: true },
		postCarMake: { type: String, required: true },
		postCarYear: { type: String, required: true },
		postImageUrl: { type: String, required: false },
		postCarType: { type: String, required: false },
		postCarFuelType: { type: String, required: false },
	},
	{ collection: 'posts' }
);

const PostModel = mongoose.model('Post', PostSchema); // Use 'User' as the model name

export default PostModel;
