import mongoose from "mongoose";

export const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title cannot be empty']
    },
    description: {
        type: String,
        required: [true, 'Description cannot be empty']
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        requried: [true, 'Difficulty cannot be empty'],
        default: 'easy'
    },
    testcase: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            },
        }
    ],
    editorial: {
        type: String
    }
})

const Problem = mongoose.model('Problem', problemSchema);
export default Problem;
