const express = require('express');
const enforce = require('express-sslify');
const app = express();

// Middleware to enforce HTTPS (SSL)
app.use(enforce.HTTPS({ trustProtoHeader: true }));

// Serve static files from a 'public' directory
app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
