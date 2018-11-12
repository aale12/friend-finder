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
app.use(express.static(path.join(__dirname, './app/public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// ================================================================================
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// =============================================================================
// LISTENER
// =============================================================================
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});