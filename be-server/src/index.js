import express from "express";
import cors from "cors"; // Import cors if you want to enable CORS
import testRoute from "./routes/testRoute.js"; // Import your other route
import tasksRoute from "./routes/tasksRoute.js"; // Import tasks route

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware setup
app.use(cors()); // Enable CORS if needed
app.use(express.json()); // Parse incoming JSON requests

// Example route for root (optional)
app.get("/", (req, res) => {
  res.send("Hello, world! This is your backend server. It's up and running! Today is a good day to code. Let's learn about rest APIs and how to build them. You can find me in index.js in the src folder.");
});

app.get("/users", (req, res) => {
  res.send("This is the users route or endpoint in the backend server. In this case, http://localhost:5001/users . It is sent as a string response to the client.");
});

// Modularized routes
app.use("/api", testRoute); // Existing route
app.use("/tasks", tasksRoute); // Tasks route

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
