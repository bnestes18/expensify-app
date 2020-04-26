const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// register some middleware
// use public directory to serve up our static assests
app.use(express.static(publicPath));

// if what the user requested is not in the public folder, then just
// give them back the index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

// start the server up on port 3000
app.listen(port, () => {
    console.log('Server is up')
})