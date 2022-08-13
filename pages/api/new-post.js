import { MongoClient } from 'mongodb';
// POST /api/new-post

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://ideacon:next-12345@cluster0.ifz0crw.mongodb.net/?retryWrites=true&w=majority');
        const db = client.db();

        const ideaCollection = db.collection('new-posts');

        const result = await ideaCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: 'Idea Inserted!' });
    }

}

export default handler;