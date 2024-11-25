import express from "express";

const app = express();
const port = 8000;

// Middleware setup
const firstMiddleware = (req, res, next) => {
  console.log("First middleware executed!");
  next();
};

const secondMiddleware = (req, res, next) => {
  console.log("Second middleware executed!");
  res.setHeader("X-Powered-By", "My Awesome Middleware");
  next();
};

const lastMiddleware = (req, res, next) => {
  console.log("Last middleware executed!");
  next();
};

// Apply middleware globally
app.use(firstMiddleware);
app.use(secondMiddleware);
app.use(lastMiddleware);
app.use(express.json()); // For parsing JSON in request bodies

// Sample data
const users = [
  { id: 1, name: "Jane Austen", status: "I find myself in tolerable health." },
  { id: 2, name: "John Doe", status: "Learning backend development." },
];

// Routes
// GET request for the homepage
app.get("/", (req, res) => {
  res.send(
    "Hello, world! This is another backend server. It defines Middleware and uses it to log incoming requests and outgoing responses."
  );
});

// GET request to retrieve all users
app.get("/user", (req, res) => {
  res.json(users); // Send the users array as JSON
});

// POST request for updating or creating a user
app.post("/user", (req, res) => {
  const { id, name, status } = req.body;

  if (!id || !name || !status) {
    return res
      .status(400)
      .json({ message: "Please provide id, name, and status." });
  }

  // Check if the user exists
  const user = users.find((u) => u.id === id);

  if (user) {
    // Update the user details
    user.name = name;
    user.status = status;

    return res.json({
      message: "User updated successfully.",
      user,
    });
  }

  // If user doesn't exist, return an error
  return res.status(404).json({ message: "User not found." });
});

// PATCH request for updating a specific user by ID
app.patch("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { name, status } = req.body;

  const user = users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  if (name) user.name = name;
  if (status) user.status = status;

  res.json({
    message: "User updated successfully.",
    user,
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
