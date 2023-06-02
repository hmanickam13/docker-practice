// Import the Express module and create an instance of the Express application
const app = require('express')();

// Define a route for the root URL ('/') that handles GET requests
app.get('/', (req, res) => {
    // Send a JSON response with a message
    res.json({ message: 'Docker is easy' });
});

// Define the port to listen on, using either the value from the environment variable PORT or 8080 as a fallback
const port = process.env.PORT || 8080;

// Start the server and listen on the specified port
app.listen(port, () => console.log(`app listening on http://localhost:${port}`));
