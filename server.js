// ==============================================================================
// DEPENDENCIES
// ==============================================================================
const express = require('express');
const path = require('path');

// ==============================================================================
// EXPRESS CONFIGURATION
// ==============================================================================

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. 
const PORT = process.env.PORT||8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// ================================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});