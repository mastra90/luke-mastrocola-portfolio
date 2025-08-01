# Luke Mastrocola Portfolio

A modern and responsive portfolio website showcasing Luke Mastrocola's web development and audio production work. Built with React/TypeScript featuring dynamic theme switching and smooth animations.

## Table of Contents

- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [What You'll Get](#what-youll-get)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Development Workflow](#development-workflow)
- [Project Structure](#project-structure)

## Quick Start

[Back to top](#table-of-contents)

**Install with the following terminal command:**

```bash
curl -sSL https://raw.githubusercontent.com/mastra90/luke-mastrocola-portfolio/master/deploy.sh | bash && cd luke-mastrocola-portfolio
```

### Compatible with:

- Mac/Linux
- Windows: Ubuntu/WSL terminal (Windows Subsystem for Linux)

_Note: The installation will create a `luke-mastrocola-portfolio` folder in your current directory._

**This single command will:**

- ✅ Clone the latest code
- ✅ Install dependencies for IDE support
- ✅ Build and start the containerized application
- ✅ Automatically open in your browser

## Prerequisites

[Back to top](#table-of-contents)

- **Docker Desktop** - [Download here](https://www.docker.com/products/docker-desktop/)
- **Git** - Usually pre-installed on Mac/Linux, [download for Windows](https://git-scm.com/)

## What You'll Get

[Back to top](#table-of-contents)

After the command is successful, the application will be available at:

- **Portfolio Website**: http://localhost:5173

## Features

[Back to top](#table-of-contents)

### Visual Design

- 🌙 Dark/Light Theme Toggle - Persistent theme preference with smooth transitions
- 📱 Fully Responsive - Optimized for mobile, tablet, and desktop
- ✨ Smooth Animations - Hover effects and transitions
- 🎭 Professional Profile Section - Clean header with image, titles and social links

### Interactive Elements

- 🔄 Dynamic Content Switching - Toggle between Web Development and Audio Production portfolios
- 🔗 Social Media Integration - Direct links to GitHub, LinkedIn, Twitter, and Instagram
- 🎯 Project Showcase Cards - Card layout with technology badges and live demo links
- 💫 Engaging User Experience - Immediate visual feedback on all interactions

### Content Management

- 📂 Project Organization - Professional websites, React apps, and Python applications
- 🏷️ Technology Stack Indicators - Clear badges for React, TypeScript, JavaScript, Express.js, NestJS, Docker, Python
- 🚀 Live Demo Links - Direct access to deployed projects and GitHub repositories
- 📝 Detailed Descriptions - Comprehensive project information and context
- 🎧 Audio Production section - Currently in development

## Tech Stack

[Back to top](#table-of-contents)

### Frontend

- React 19+ with TypeScript for type-safe development
- Material-UI for consistent design system and theming
- Vite for lightning-fast development and optimized builds
- Responsive Grid System with adaptive layouts

### DevOps

- Docker containerization with multi-stage builds
- Nginx for production-ready static file serving
- Hot reloading enabled for development
- Cross-platform compatibility via containerization

## Development Workflow

[Back to top](#table-of-contents)

The deployment script provides a comprehensive development environment:

### Automated Setup

- Automatically installs npm dependencies for IDE IntelliSense support
- Identifies and terminates any Docker containers using port 5173
- Builds and deploys the application in a containerized environment
- Automatically opens the application upon completion

### Developer Experience

- Command execution automatically navigates to the project directory
- Full support for `docker compose up/down` commands
- Execute `code .` to open the codebase in VS Code with full IntelliSense support

**Flexible Development Options:**

- Use Docker for consistent environment across platforms
- Stop containers and run `npm run dev` for native development and debugging
- Hot reloading with Docker volume mounting

### Manual Commands

After deployment you can use these commands from the project directory:

- `docker compose down` - Stop the application
- `docker compose up` - Start the application
- `code .` - Open in VS Code
- `npm run dev` - Run locally without Docker

## Project Structure

[Back to top](#table-of-contents)

```
luke-mastrocola-portfolio/
├── node_modules/
├── public/
│   └── Headshot.jpg
├── src/
│   ├── components/
│   │   ├── AudioWork.tsx
│   │   ├── DevWork.tsx
│   │   ├── Header.tsx
│   │   ├── ServicesSwitch.tsx
│   │   └── ToggleThemeButton.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── theme.ts
├── .dockerignore
├── .gitignore
├── deploy.sh
├── docker-compose.yml
├── Dockerfile
├── eslint.config.js
├── index.html
├── nginx.conf
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.json
└── vite.config.js
```

<br>

**Built with ❤️ as a modern showcase of React development practices and clean UI design.**
