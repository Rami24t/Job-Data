import mongoose, { Types } from "mongoose";

const {Schema} = mongoose

const jobApplicationSchema = new Schema({

        positionTitle: {
            type: String,
            required: true
        },
        applicant: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        company: {
            type: String,
            required: true
        },
        appliedOn: {
            type: Date,
            required: true,
            default: Date.now
        },
        closedOn: {
            type: Date,
            required: false
        },
        status: {
            type: String,
            required: true,
            enum: ['Applied', 'Rejected', 'Accepted'],
            default: 'Applied'
        },
    },
    {
        timestamps: true
}
)

export default mongoose.model('Post', jobApplicationSchema)