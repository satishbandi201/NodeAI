const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    res.send('DevOps Assignment Success Satish Bandi');
});

app.listen(3000,()=>{
    console.log('Started');
});

// const express = require("express");
// const client = require("prom-client");

// const app = express();

// /* -------------------- PROMETHEUS SETUP -------------------- */

// // Create custom registry
// const register = new client.Registry();

// // Collect default Node.js metrics
// client.collectDefaultMetrics({ register });

// /* -------------------- CUSTOM METRICS -------------------- */

// // HTTP request counter
// const httpRequestsTotal = new client.Counter({
//   name: "http_requests_total",
//   help: "Total HTTP requests",
//   labelNames: ["method", "route", "status"]
// });

// // IMPORTANT: register metric with Prometheus registry
// register.registerMetric(httpRequestsTotal);

// /* -------------------- MIDDLEWARE -------------------- */

// // Track all incoming requests
// app.use((req, res, next) => {
//   res.on("finish", () => {
//     httpRequestsTotal
//       .labels(req.method, req.path, res.statusCode)
//       .inc();
//   });
//   next();
// });

// /* -------------------- ROUTES -------------------- */

// app.get("/", (req, res) => {
//   res.send("NodeAI Assignment is running");
// });

// /* Metrics endpoint for Prometheus */
// app.get("/metrics", async (req, res) => {
//   res.set("Content-Type", register.contentType);
//   res.end(await register.metrics());
// });

// /* -------------------- SERVER -------------------- */

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });