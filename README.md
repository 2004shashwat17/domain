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

🔗 Live site:
👉 https://braindomain.onrender.com/
