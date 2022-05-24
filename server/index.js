const { Client } = require('@notionhq/client');
const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const client = new Client({
auth: process.env.NOTION_KEY
});
  
const getPosts = async () => {
return await client.databases.query({
    database_id: process.env.NOTION_DB
});
};

app.get('/api/', (_, res) => {
    res.send('works fine')
})

app.get('/api/posts', async (_, res) => {
    
    const {results} = await getPosts();

    res.json(results)
})

app.listen(4000, () => {
    console.log('App running on port 4000');
})