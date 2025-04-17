# AI Interview Prep Platform
![robot](https://github.com/user-attachments/assets/e9a4a93e-3ef6-466e-be96-f91ec3949c59)



A Next.js-powered platform that helps users practice technical interviews with AI-generated questions, real-time feedback, and performance analytics.

## ✨ Features

- **AI-Powered Mock Interviews**
  - Role-specific questions (Frontend, Backend, Full-stack)
  - Real-time speech-to-text transcription
  - Gemini-powered feedback generation
  - Interview retake functionality

- **Performance Analytics**
  - Score breakdown by category (Technical, Communication, Problem-solving)
  - Strengths/weaknesses identification
  - Historical progress tracking

- **User Experience**
  - Responsive design (mobile & desktop)
  - JWT authentication
  - Interactive feedback dashboard

## 🛠 Tech Stack

**Frontend:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Shadcn/ui Components
- React Hook Form
- Web Speech API

**Backend:**
- Firebase Firestore (Database)
- Firebase Authentication
- Google Gemini API (AI Feedback)
- Vercel Serverless Functions

**DevOps:**
- Vercel Hosting
- GitHub Actions CI/CD (not really 😅)
- ESLint + Prettier

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Firebase project with Firestore enabled
- Google Cloud API key (for Gemini)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ai-interview-prep.git
   cd ai-interview-prep

2. Install the dependencies
    ```bash
    npm install

3. Set up the Enviroment varialbles <br />
  a. FIREBASE_PROJECT_ID <br />
  b. FIREBASE_PRIVATE_KEY <br />
  c. FIREBASE_CLIENT_EMAIL <br />
  d. GOOGLE_GENERATIVE_AI_API_KEY <br />
  e. NEXT_PUBLIC_VAPI_WEB_TOKEN  <br />
  f. NEXT_PUBLIC_VAPI_WORKFLOW_ID <br />

## Run in the development server
``` bash
  npm run dev
```

## 🤝 Contributing
- Fork the repository
- Create a new branch (git checkout -b feature/your-feature)
- Commit changes (git commit -am 'Add some feature')
- Push to branch (git push origin feature/your-feature)
- Open a Pull Request

📧 Contact
Obomhese Raphael - obomheser@gmail.com <br />
Project Link: [https://github.com/yourusername/ai-interview-prep](https://github.com/Obomhese-Raphael/ai_mock_interviews)

## 🙏 Acknowledgments

Special thanks to these resources that helped make this project possible:

- **JavaScript Mastery** - For their excellent tutorial series on FULLSTACK DEVELOPMENT PROJECTS 
  - 🔗 [Watch the tutorial series here](https://www.youtube.com/watch?v=8GK8R77Bd7g&t=3373s)

- **Firebase Documentation** - For clear examples of real-time database implementations
- **Shadcn/ui** - For beautiful, accessible UI components
- **Next.js Community** - For their amazing framework documentation

