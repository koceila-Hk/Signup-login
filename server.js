import express from 'express'
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json())

////////// Post form
app.post('/form', async function (req,res){
    const data = req.body
    const uri = 'mongodb+srv://koceilaHk:4xSBU3-HTxfa5da@cluster0.hk97rdt.mongodb.net/';
    const  client = new MongoClient(uri);

    await client.connect();

    const dbname ='users';
    const collectionName = 'Users';

    const database = client.db(dbname);
    const collection = database.collection(collectionName);

    const insert = await collection.insertMany([data]);
})

////////// Login

app.post('/login', async function (req,res){
    const data = req.body;
    const uri = 'mongodb+srv://koceilaHk:4xSBU3-HTxfa5da@cluster0.hk97rdt.mongodb.net/';
    const  client = new MongoClient(uri);

    await client.connect();

    const dbname ='users';
    const collectionName = 'Users';

    const database = client.db(dbname);
    const collection = database.collection(collectionName);
    
    const user = await collection.find(data).toArray();
    console.log(user);
    
    if (user.length !== 0) {
        res.status(200).send('User found');
    } else {
        res.status(404).send('User not found' );

    }
})


app.listen(port,() =>{
    console.log(`I'm here ${port}`);
})