// const express=require('express');

// const app=express();

// app.get('/',(req,res)=>{
//     res.send('DevOps Assignment Success Satish Bandi');
// });

// app.listen(3000,()=>{
//     console.log('Started');
// });

const express = require('express');
const client = require('prom-client');

const app = express();

// Collect default Node.js metrics
client.collectDefaultMetrics();

app.get('/', (req, res) => {
    res.send('DevOps Assignment Success Satish Bandi');
});

// Prometheus metrics endpoint
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.end(await client.register.metrics());
});

app.listen(3000, () => {
    console.log('Started');
});