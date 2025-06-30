import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: String,
  brand: String,
  model: String,
  price: Number,
  cc_engine: Number,
  image: String,
}, { timestamps: true });

export default mongoose.model('Car', carSchema);
