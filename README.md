# RAGApplication (FastAPI + Next.js)

This is a **Retrieval-Augmented Generation (RAG) Application** using:
- **FastAPI (Backend)**
- **Next.js (Frontend)**
- **LangChain & OpenAI API (LLM Integration)**

## 🚀 Features
- Document loading and chunking with ChromaDB
- AI-powered query handling using OpenAI / Local LLMs
- Full-stack integration with Next.js frontend

## 🛠️ Setup Instructions

### 1️⃣ Install Backend Dependencies
```bash
cd backend-server
python -m venv .venv
source .venv/bin/activate  # Mac/Linux
venv\Scripts\activate      # Windows
pip install -r requirements.txt

### 2️⃣ Start FastAPI Server
uvicorn backend-server.app.main:app --host 0.0.0.0 --port 8000 --reload

### 3️⃣ Install Frontend Dependencies
cd frontend-client
npm install

### 4️⃣ Start Next.js Frontend
npm run dev
📄 API Endpoints

GET / - Check if backend is running
POST /query - Send a question to the AI model
🛠️ Environment Variables

Create a .env file:

OPENAI_API_KEY=your-api-key-here

📜 License

This project is open-source under the MIT License.