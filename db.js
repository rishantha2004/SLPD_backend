const mongoose = require('mongoose');

const DATABASE_KEY = 'mongodb+srv://roshanrishantha16:Konsi2004@cluster0.ukmbjtp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(DATABASE_KEY, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error to connecting to MongoDB', error);
})