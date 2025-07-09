 A web-based game designed to be inclusive and educational for both specially-abled children and typically developing children. 
Types of games -> games for specially abled-> 
memory match game -> Autism Spectrum Disorder (ASD), Supports visual memory and cognitive flexibility. For normal child also
2. Number Sequencing Game -> Down Syndrome -> Supports cognitive development and sequencing skills for normal child
Soundboard Game (Sound Playback & Learning) -> Autism Spectrum Disorder (ASD)
 → Enhances audio recognition and communication cues
Sound Identification Game- Language Disorders ->  Supports vocabulary growth and sound-symbol connection
Games for normal children -> shape sorter, tic tac toe, pong game, maze game, social awareness.
Student progress report contains total score in each game tells the status weather it is completed or not. Total points got from each game, user can redeem points and buy rewards . 
This full-stack project is built using React.js for the frontend, with a  modern and responsive UI.  auth0 for google authentication in frontend itself and chatgpt integration form chatbase.co use available code in index.html in frontend
The backend is powered by Node.js and Express.js for stripe for payment
Render, a cloud hosting service used for deploying full-stack web applications with seamless backend, frontend, and database integration.
It’s fully deployed on Render, making it accessible anytime. Overall, this project highlights my skills in building secure, scalable, and user-friendly web applications, and reflects my interest in this domain.
Auth0 is a flexible authentication and authorization platform. It’s mainly used to secure applications by managing things like:User authentication (login/logout),Authorization (who can access what),Single Sign-On (SSO),Social login (Google, Facebook, etc.),Passwordless login (email or phone code) . Auth0 SDKs for different platforms: auth0-react.

//about stripe 🗝️
Stripe is a payment processing platform that lets you:
Accept credit/debit cards, UPI, wallets, etc.
Handle subscriptions, one-time payments, and refunds
Works globally with strong security (PCI-DSS compliance)
Integrates with backend frameworks like Node.js + Express

//chatbase.co💬
Chatbase.co is a no-code AI chatbot builder that lets you train your own chatbot using documents like .txt, .pdf, websites, or knowledge bases — and integrates GPT models like ChatGPT-3.5 or 4.0 to power the chatbot’s intelligence.
 How Chatbase.co Works (Internally - Simplified)
Upload Knowledge Base
 You upload a file (like your knowledge.txt) → Chatbase extracts and stores the content.
Text Chunking + Embedding
 Your content is broken into small "chunks" → then converted into vector embeddings using a model like OpenAI's embedding API.
Vector Database Storage
 These vectors are stored in a vector DB (like Pinecone, Weaviate, or built-in DB) so it can search semantically later.
User Sends a Query
 When someone types a question, it converts the query to a vector and semantically searches the vector database for the most relevant content chunks.
Prompt Construction
 It takes the found chunks and injects them into a prompt → sends this to a GPT model (you choose: GPT-3.5, 4.0, etc.).
Response Generation
 The selected GPT model generates a response, grounded in your uploaded knowledge → and sends it back to the chat UI.
UI & Customization - The chatbot UI is embeddable into your website. You can customize the appearance, system prompt, behavior, etc.
🧠 Productivity OS – A Full-Stack MERN Productivity Suite
MERN Live Demo

Productivity OS is a clean and modern full-stack productivity platform built with the MERN stack. It enables users to:

✅ Manage daily tasks
🔁 Track habits with streaks
📝 Take notes with tags
⏱️ Stay focused with a Pomodoro-style timer
📊 Analyze productivity via a dashboard
A real-world resume-level app to showcase your full-stack capabilities including auth, CRUD, state management, API architecture, and deployment.

🚀 Features
🔐 Secure Authentication using JWT & bcrypt
🧠 Modules: Tasks, Habits, Notes, Focus Timer, Dashboard
🌐 RESTful API with Express.js
🎨 Modern UI using React + Tailwind
📈 Data Visualization for analytics
🛡️ Security: Helmet, Rate Limiting, CORS
🧰 Tech Stack
Frontend	Backend	Deployment
React + Vite + TypeScript	Node.js + Express	Vercel (Frontend)
Context API + Axios	MongoDB via Mongoose	Render (Backend + DB)
Tailwind CSS	JWT Auth + REST APIs	
🔐 Environment Variables
🔹 Backend .env example
NODE_ENV=production
PORT=5000
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-super-secret-key
CLIENT_URL=https://productivity-os.vercel.app
🔹 Frontend .env example
VITE_API_URL=https://productivity-os.onrender.com
🛠️ Local Development Setup
1️⃣ Clone the Repo
git clone https://github.com/EthanxSK/productivity-os.git
cd productivity-os
2️⃣ Setup Backend
cd backend
npm install
# Create your .env file using the sample above
npm run dev
3️⃣ Setup Frontend
cd ../client
npm install
# Create your .env file using the sample above
npm run dev
🔗 App should now be running locally at:
👉 http://localhost:5173
🚀 Production Deployment
Layer	Platform
Front-End	Vercel
Back-End	Render
DataBase	MongoDb Altas
🧠 Key Learnings:
Full MERN stack architecture

Token-based authentication & protected routes

Frontend-backend integration using Axios & Context API

CORS setup, security (Helmet), and rate limiting

Managing environment variables across environments

Scalable deployment pipelines

🔗 Live site:
👉 https://productivity-os.vercel.app/
