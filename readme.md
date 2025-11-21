```markdown
# 📝 NoteApp - MERN Stack Note-Making Application

A full-stack note-making application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can create, read, update, and delete personal notes with secure authentication.

![MERN Stack](https://img.shields.io/badge/Stack-MERN-green)
![License](https://img.shields.io/badge/License-MIT-blue)

## ✨ Features

### Authentication & Authorization
- 🔐 User registration and login with JWT authentication
- 🛡️ Password hashing with bcrypt
- 🚪 Protected routes - users can only access their own notes
- 💾 Persistent login with localStorage

### Note Management
- ➕ Create new notes with title and content
- 📖 View all personal notes in a responsive grid
- ✏️ Edit existing notes
- 🗑️ Delete notes with confirmation
- ☁️ Manual sync to cloud (refresh data from server)

### User Experience
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Modern, clean UI with smooth animations
- ⚡ Fast and intuitive interface
- 🔔 Error handling and loading states
- ✅ Form validation

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **dotenv** - Environment variable management
- **cors** - Cross-Origin Resource Sharing

### Frontend
- **React** (Vite) - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client
- **Context API** - State management
- **CSS3** - Styling

## 📂 Project Structure

<img width="445" height="767" alt="image" src="https://github.com/user-attachments/assets/94688692-fc7a-42c1-8094-c8f5b5dbe19a" />

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account OR local MongoDB installation
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/notemaking-app.git
cd notemaking-app
```

2. **Set up Backend**
```bash
cd server
npm install
```

Create `.env` file in the `server` folder:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_jwt_key_make_it_long_and_random
```

3. **Set up Frontend**
```bash
cd ../client
npm install
```

Create `.env` file in the `client` folder:
```env
VITE_API_URL=http://localhost:5000/api
```

4. **Run the Application**

Start the backend server (from `server` folder):
```bash
npm run dev
```

Start the frontend (from `client` folder):
```bash
npm run dev
```

5. **Access the Application**
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:5000`

## 🔑 API Endpoints

### Authentication Routes
```
POST   /api/auth/register    - Register new user
POST   /api/auth/login       - Login user
GET    /api/auth/profile     - Get user profile (Protected)
```

### Note Routes (All Protected)
```
GET    /api/notes            - Get all notes for logged-in user
GET    /api/notes/:id        - Get single note by ID
POST   /api/notes            - Create new note
PUT    /api/notes/:id        - Update note
DELETE /api/notes/:id        - Delete note
```

## 📱 Usage

### Registration
1. Navigate to the Register page
2. Enter your name, email, and password (min 6 characters)
3. Click "Sign Up"
4. You'll be automatically logged in and redirected to the dashboard

### Login
1. Navigate to the Login page
2. Enter your email and password
3. Click "Login"
4. Access your personal dashboard

### Managing Notes
- **Create**: Click "New Note" button, fill in title and content
- **Edit**: Click "Edit" button on any note card
- **Delete**: Click "Delete" button and confirm
- **Sync**: Click "Sync to Cloud" to fetch latest data from server

## 🔒 Security Features

- Passwords are hashed using bcrypt before storage
- JWT tokens for secure authentication
- Protected API routes with middleware verification
- User authorization - users can only access their own notes
- Input validation on both client and server
- CORS configured for secure cross-origin requests

## 🎨 UI/UX Features

- Responsive grid layout for notes
- Modal-based note creation/editing
- Loading states for async operations
- Error messages for better user feedback
- Empty state for new users
- Confirmation dialogs for destructive actions
- Smooth hover animations
- Character counter for note titles

## 📝 Environment Variables

### Backend (.env)
```env
PORT=5000                                    # Server port
MONGO_URI=mongodb+srv://...                  # MongoDB connection string
JWT_SECRET=your_secret_key                   # JWT signing secret
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api      # Backend API URL
```

## 🧪 Testing

### Manual Testing Checklist
- [ ] User can register with valid credentials
- [ ] User can login with correct credentials
- [ ] Invalid login shows error message
- [ ] Protected routes redirect to login when not authenticated
- [ ] User can create a note
- [ ] User can edit a note
- [ ] User can delete a note
- [ ] User can sync notes from cloud
- [ ] Different users see only their own notes
- [ ] Logout works correctly
- [ ] Responsive design works on mobile

### Testing with Postman/Thunder Client
Import and test the API endpoints using the provided routes. Make sure to:
1. Register a user to get a token
2. Include the token in Authorization header as `Bearer <token>`
3. Test all CRUD operations

## 🚧 Known Limitations

- No real-time updates - users must manually click "Sync to Cloud"
- No note categories or tags
- No search functionality
- No rich text formatting
- No file attachments
- No note sharing between users

## 🔮 Future Enhancements

- [ ] Real-time synchronization with WebSockets
- [ ] Search and filter notes
- [ ] Categories/tags for organization
- [ ] Rich text editor (Markdown/WYSIWYG)
- [ ] Dark mode toggle
- [ ] Export notes as PDF/TXT
- [ ] Note sharing functionality
- [ ] Email verification
- [ ] Password reset
- [ ] Profile management
- [ ] Note archiving
- [ ] Drag and drop reordering

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- MongoDB documentation
- Express.js documentation
- React documentation
- JWT.io for token debugging
- Stack Overflow community

## 📞 Support

For support, email unassumingheretic.com or open an issue in the GitHub repository.

---

**Happy Note Taking! 📝**
```
