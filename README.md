STARTBOX - Full Stack Web Application
-------------------------------------

StartBox is a startup job discovery and application platform inspired by AngelList. 
It allows users to register, browse startups, view job listings, and apply to them.


Project Structure
-----------------
StartBox/
│
├── backend/         -> Node.js + Express + MongoDB
│
└── frontend/        -> ReactJS


Features
--------
- User Registration and Login
- View Startups and Job Listings
- Apply to Jobs
- Authenticated User Routing
- RESTful API for backend communication


Tech Stack
----------
Frontend:
- React.js
- React Router
- CSS or TailwindCSS/Bootstrap

Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- CORS and dotenv for config


Frontend
--------
Path: /frontend

Routing Structure:
  - "/"        -> Home Component
  - "/signin"  -> Login Component
  - "/signup"  -> RegisterForm Component

App Code Snippet:
<Router>
  <Navbar />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/signin" element={<Login />} />
    <Route path="/signup" element={<RegisterForm />} />
  </Routes>
  <Footer />
</Router>

Setup Instructions:
1. Open terminal and navigate to frontend folder:
   cd frontend
2. Install dependencies:
   npm install
3. Start the React app:
   npm start

Frontend runs on: http://localhost:3000


Backend
-------
Path: /backend

API Routes:
- /users         -> For user signup, login, profile
- /startUps      -> For creating and viewing startups
- /jobs          -> For job listing operations
- /applications  -> For applying to jobs

App Code Snippet:
app.use("/users", UserRouter);
app.use("/startUps", StartUpRouter);
app.use("/jobs", JobRouter);
app.use("/applications", ApplicationRouter);

Setup Instructions:
1. Open terminal and navigate to backend folder:
   cd backend
2. Install dependencies:
   npm install
3. Create a .env file with the following variables:
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
4. Start the server:
   npm run dev

Backend runs on: http://localhost:5000


Authentication
--------------
- JSON Web Token (JWT) is used for login authentication.
- After login, token is stored and used to access protected routes.


Planned Future Improvements
---------------------------
- Admin dashboard for job approval and analytics
- Resume upload and profile building
- Chat system between recruiters and applicants
- Bookmark and save jobs/startups



License
-------
MIT License
