import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = 'mongodb+srv://mounikasree2002:12345@cluster0.wcf3ocz.mongodb.net/'

    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;