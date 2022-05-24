import mongoose from 'mongoose'

// Defining Schema
const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true},
    state: { type: String, required: true, trim: true },
    address: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    
    city: { type: String, required: true, trim: true },
    
    zipcode: { type: Number, required: true },

})

// Model

const StudentModel = mongoose.model("student", studentSchema)

export default StudentModel;