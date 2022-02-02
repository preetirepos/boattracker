import mongoose from 'mongoose';

const boatSchema = mongoose.Schema({
    bId: Number,
    bName: String,
    bOwner: String,
    selectedFile: String,
    currentGuide: String,
    status: String,
    createdAt: {
        type: Date,
        default: new Date()
    }  
});

const BoatDetail = mongoose.model('BoatDetail', boatSchema);

export default BoatDetail;
