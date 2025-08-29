// Authentication service for handling user registration and login with localStorage

class AuthService {
  constructor() {
    this.USERS_KEY = "cineverse_users";
    this.CURRENT_USER_KEY = "cineverse_current_user";
  }

  // Get all users from localStorage
  getUsers() {
    const users = localStorage.getItem(this.USERS_KEY);
    return users ? JSON.parse(users) : [];
  }

  // Save users to localStorage
  saveUsers(users) {
    localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
  }

  // Register a new user
  register(userData) {
    const { fullName, email, password, confirmPassword } = userData;

    // Validation
    if (!fullName || !email || !password || !confirmPassword) {
      throw new Error("All fields are required");
    }

    if (password !== confirmPassword) {
      throw new Error("Passwords do not match");
    }

    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long");
    }

    const users = this.getUsers();

    // Check if user already exists
    if (users.find((user) => user.email === email)) {
      throw new Error("User with this email already exists");
    }

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      fullName,
      email,
      password, // In a real app, this should be hashed
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    this.saveUsers(users);

    return { success: true, message: "Account created successfully!" };
  }

  // Login user
  login(email, password) {
    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const users = this.getUsers();
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    // Save current user (without password)
    const currentUser = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      createdAt: user.createdAt,
    };

    localStorage.setItem(this.CURRENT_USER_KEY, JSON.stringify(currentUser));

    return { success: true, user: currentUser, message: "Login successful!" };
  }

  // Get current logged-in user
  getCurrentUser() {
    const user = localStorage.getItem(this.CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  }

  // Logout user
  logout() {
    localStorage.removeItem(this.CURRENT_USER_KEY);
    return { success: true, message: "Logged out successfully!" };
  }

  // Check if user is authenticated
  isAuthenticated() {
    return this.getCurrentUser() !== null;
  }
}

export default new AuthService();
