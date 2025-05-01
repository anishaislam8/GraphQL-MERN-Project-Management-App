import mongoose from 'mongoose';

const { Schema, model, models } = mongoose;

const clientSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        required: true,
    },
});

const Client = models.Client || model("Client", clientSchema);
export default Client;