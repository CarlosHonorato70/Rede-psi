# Rede Psi - Mental Health Social Network

A social network platform focused on mental health support and community building.

## Project Structure

```
├── models/                 # MongoDB models
│   ├── User.js            # User model with authentication
│   └── Post.js            # Post model with comments and likes
├── routes/                 # Express API routes
│   ├── users.js           # User authentication and profile routes
│   └── posts.js           # Post CRUD and interaction routes
├── src/                    # React frontend application
│   ├── components/         # Reusable React components
│   │   ├── Navbar.js      # Navigation component
│   │   └── Post.js        # Post display component
│   ├── pages/             # Page components
│   │   ├── Home.js        # Main feed page
│   │   ├── Profile.js     # User profile page
│   │   ├── Login.js       # Login page
│   │   └── Register.js    # Registration page
│   ├── context/           # React context providers
│   │   └── AuthContext.js # Authentication context
│   ├── styles/            # CSS stylesheets
│   │   └── main.css       # Main stylesheet
│   ├── App.js             # Main React component
│   ├── index.js           # React entry point
│   └── package.json       # Frontend dependencies
├── public/                 # Public assets
│   └── index.html         # HTML template
├── server.js              # Express server entry point
├── package.json           # Backend dependencies
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## Features

- User authentication and authorization
- Post creation with mood tags
- Like and comment system
- User profiles with therapist verification
- Responsive design
- Real-time updates

## Installation and Setup

### Backend Setup
1. Install dependencies: `npm install`
2. Start MongoDB service
3. Run the server: `npm run dev`

### Frontend Setup
1. Navigate to src folder: `cd src`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Technology Stack

- **Backend**: Node.js, Express.js, MongoDB, JWT
- **Frontend**: React, React Router, CSS3
- **Database**: MongoDB with Mongoose ODM

## API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/me` - Get current user

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create new post
- `POST /api/posts/:id/like` - Like/unlike post
- `POST /api/posts/:id/comment` - Add comment

### Users
- `GET /api/users/profile/:username` - Get user profile
- `GET /api/posts/user/:username` - Get user posts

## Recent Improvements

- ✅ Fixed deeply nested src folder structure
- ✅ Created proper component organization
- ✅ Added comprehensive error handling for MongoDB
- ✅ Implemented missing authentication routes
- ✅ Created all missing React components
- ✅ Organized CSS into proper structure
- ✅ Fixed all import paths and dependencies