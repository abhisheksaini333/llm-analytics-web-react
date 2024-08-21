import express from 'express';
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 5000;

// Proxy API requests
app.use('/connect', createProxyMiddleware({ target: 'https://campaign-demo-g6lg7lulsq-uc.a.run.app/connect', changeOrigin: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Catch all other requests and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
