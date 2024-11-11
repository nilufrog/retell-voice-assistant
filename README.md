# Retell Voice Bot

A React-based voice assistant application built with Retell AI, featuring an interactive voice interface with modern UI components.

## Features

- 🎙️ Real-time voice conversations with AI
- 🎨 Beautiful, modern UI with Tailwind CSS
- ⚡ Built with Vite for fast development
- 🔄 Framer Motion animations
- 📱 Responsive design

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Retell AI API credentials

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd retell_voice_bot
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit the `.env` file with your Retell AI credentials:
```env
VITE_RETELL_API_KEY=Bearer your_api_key_here
VITE_RETELL_AGENT_ID=your_agent_id_here
VITE_RETELL_LLM_ID=your_llm_id_here
```

## Getting Your Retell AI Credentials

1. Sign up for a Retell AI account at [retell.ai](https://retell.ai)
2. Create an agent in your Retell AI dashboard
3. Generate an API key
4. Copy your Agent ID, LLM ID, and API Key
5. Paste them into your `.env` file

## Running the Application

### Development Mode

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm preview
```

## Project Structure

```
retell_voice_bot/
├── src/
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   ├── lib/
│   │   ├── retell.ts     # Retell SDK integration
│   │   └── utils.ts      # Utility functions
│   └── components/
│       └── ui/
│           └── lamp.tsx  # Lamp UI component
├── .env                  # Environment variables (not committed)
├── .env.example          # Environment variables template
└── package.json          # Dependencies and scripts
```

## Environment Variables

All sensitive credentials are stored in environment variables to protect your API keys. Never commit `.env` to version control.

Required environment variables:
- `VITE_RETELL_API_KEY`: Your Retell AI API key with Bearer prefix
- `VITE_RETELL_AGENT_ID`: Your Retell agent ID
- `VITE_RETELL_LLM_ID`: Your LLM configuration ID

## Security Notes

✅ **Security Best Practices Implemented:**
- All API keys are stored in `.env` files
- `.env` files are excluded from git via `.gitignore`
- No hardcoded credentials in source code
- Environment variables prefixed with `VITE_` for client-side exposure

## Technologies Used

- **React** - UI framework
- **TypeScript/JavaScript** - Programming languages
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Retell AI SDK** - Voice AI integration
- **Lucide React** - Icons

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details

## GitHub Repository Setup

### Repository Name
```
retell-voice-assistant
```

### Repository Description
```
🎙️ Modern voice assistant built with React and Retell AI. Features real-time voice conversations, beautiful UI with Tailwind CSS, and smooth animations with Framer Motion. Perfect for building conversational AI interfaces with clean, production-ready code.
```

### Topics/Tags
```
voice-assistant, react, retell-ai, conversational-ai, voice-interface, tailwindcss, framer-motion, vite, typescript, react-typescript, ai-integration, web-voice-app, modern-ui, real-time-communication, voice-bot, ai-chat, interactive-ui, production-ready
```

## Support

For issues related to:
- **This application**: Open an issue on GitHub
- **Retell AI**: Visit [retell.ai](https://retell.ai) for documentation and support

