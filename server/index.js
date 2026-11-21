const app = require('./app');
const path = require('path');
const express = require('express');

const PORT = process.env.PORT || 5000;

// In production or when client/dist exists, serve static React app
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));

// Fallback to index.html for client-side routing
app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send(`
        <h1>Amana Care API Server is running</h1>
        <p>Client build not found. Run <code>npm run dev</code> for development or <code>npm run build</code> to generate the client build.</p>
        <p>API Health: <a href="/api/health">/api/health</a></p>
      `);
    }
  });
});

// When running on Vercel Services, Vercel manages the HTTP server lifecycle.
// For local development or standalone server execution, listen on PORT.
if (!process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`[AmanaCare Server] Running on http://localhost:${PORT}`);
  });
}

module.exports = app;
