// type.model.js
import mongoose from 'mongoose';

const TypeSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Горячее', 'Супы', 'Салаты', 'Сладкие напитки', 'Десерты', 'Алкогольные напитки'],
        required: true,
    },
});

export default mongoose.model('Type', TypeSchema);
