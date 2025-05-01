import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const projectSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ['In Progress', 'Not Started', 'Completed'],
        required: true,
    },
    clientId:{
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true,
    },
});

const Project = models.Project || model("Project", projectSchema);
export default Project;