# Fruit Added List

The "Fruit Added List" project is a full-stack web application combining a responsive front-end and a robust back-end. Now, with the addition of login and signup functionality, the application emphasizes user management, authentication, and improved navigation.

# How It Works
## Signup Process:
Form Submission: A user signs up by entering their details (e.g., name, email, password) in a user-friendly signup form.
API Call to Back-end: Upon submission, the details are sent to the ExpressJS back-end using an API call.
Validation & Storage: The backend validates the input and stores user credentials securely (currently in an array, with future potential for database integration).
Feedback: If successful, the user receives a confirmation (e.g., “Signup Successful”) and is redirected to the login page.

## Login Process:
Authentication: On the login page, users enter their credentials (email and password).
Verification via API: The back-end checks the entered credentials against the stored user data.
Successful Login: If credentials match, the server sends a success response, and the user is redirected to the AddFruit page.
Error Handling: If credentials are incorrect, an error message (e.g., “Invalid Email or Password”) is displayed, prompting the user to try again.

# AddFruit Page:
After logging in, users are directed to the AddFruit page.
This page allows users to:
Input fruit names in a text field.
Send the fruit name to the backend using a POST request.
Dynamically update the back-end array to reflect the added fruit.

# Unique Features
User Authentication:
Ensures only registered users can access the AddFruit functionality.
Secures user data with validation steps and proper routing.

# Dynamic Navigation:
Automatically redirects users post-login to the main functionality (AddFruit page).
Streamlined transitions between signup, login, and application pages.

# Interactive UI/UX:
Responsive forms for signup and login ensure smooth operation across devices.
Instant feedback for successful or unsuccessful actions keeps the user informed.
Future Enhancements

# Persisting User Data:
Integrate a database to store user credentials and fruits permanently.
Utilize local storage or session management for maintaining user sessions.

# Enhanced Security:
Add password hashing (e.g., bcrypt) to secure user passwords in storage.
Implement JSON Web Tokens (JWT) for secure user authentication and session management.

# Comprehensive Fruit List Management:
Display a live list of added fruits on the AddFruit page.
Enable users to delete fruits from the list dynamically.
Provide personalized lists for logged-in users.

# Live Demo:
GitHub Repository: 🔗 https://github.com/Surendiran2710/Fruit-Added-List-Project.
Live Demo on Vercel: 🔗 https://fruit-added-list-project.vercel.app/.



