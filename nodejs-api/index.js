const express = require('express');

const app = express();
const PORT = 8080;

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: "OK" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});