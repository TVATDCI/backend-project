const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Smith", email: "jane@example.com" },
  ];
  
  // Get all users
  export const getAllUsers = (req, res) => {
    res.json(users);
  };
  
  // Get user by ID
  export const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((u) => u.id === userId);
  
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
  
    res.json(user);
  };
  
  // Create a new user
  export const createUser = (req, res) => {
    const newUser = {
      id: users.length + 1,
      name: req.body.name,
      email: req.body.email,
    };
  
    users.push(newUser);
    res.status(201).json(newUser);
  };
  