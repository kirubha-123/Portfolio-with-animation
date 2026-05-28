# Portfolio Animated App

A modern, interactive portfolio website built with Next.js and cutting-edge animation libraries. This project showcases professional work with smooth scrolling, stunning animations, and responsive design to create an engaging user experience.

![Next.js](https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- **Smooth Scrolling Animation** - Enhanced scroll experience with Lenis physics-based scrolling
- **Dynamic Motion Graphics** - Professional animations powered by Framer Motion and GSAP
- **Responsive Design** - Fully responsive layout that works seamlessly on all devices
- **TypeScript Support** - Type-safe codebase for better development experience
- **Performance Optimized** - Next.js optimization for fast load times and smooth interactions
- **Modern UI** - Clean, contemporary design with Tailwind CSS
- **Accessible Components** - Built with accessibility best practices in mind

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) - React meta-framework for production
- **Language**: [TypeScript 5](https://www.typescriptlang.org) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com) - Utility-first CSS framework
- **Animation**: 
  - [Framer Motion 12](https://www.framer.com/motion) - React animation library
  - [GSAP 3](https://gsap.com) - JavaScript animation library
  - [Lenis 1.3](https://lenis.darkroom.engineering) - Smooth scroll library
- **Icons**: [Lucide React](https://lucide.dev) - Beautiful SVG icon library
- **Utilities**: [clsx](https://github.com/lukeed/clsx) - Conditional className utility

## 📋 Prerequisites

Before getting started, ensure you have the following installed:

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/kirubha-123/Portfolio-with-animation.git
cd Portfolio-with-animation/client
```

### 2. Install Dependencies

```bash
npm install
```

Or using other package managers:

```bash
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run Development Server

```bash
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000). Open your browser and start editing `app/page.tsx` - changes will auto-update.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
client/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   └── SmoothScrollProvider.tsx  # Scroll provider
├── sections/              # Page sections
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Projects.tsx       # Projects showcase
│   └── Contact.tsx        # Contact section
├── hooks/                 # Custom React hooks
│   ├── useAnimations.ts   # Animation utilities
│   └── useScroll.ts       # Scroll detection
├── lib/                   # Utility functions
│   ├── animations.ts      # Animation configs
│   └── utils.ts           # Helper functions
├── public/                # Static assets
│   ├── images/            # Image files
│   └── videos/            # Video files
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── next.config.ts         # Next.js configuration
```

## 🎨 Key Sections

### Hero Section
Captivating landing section with hero video, smooth animations, and call-to-action buttons.

### About Section
Professional introduction with smooth scroll animations and personal highlights.

### Skills Section
Showcase of technical skills and expertise with animated skill cards.

### Projects Section
Portfolio of projects with detailed descriptions, technologies used, and project links.

### Contact Section
Easy-to-use contact form and social media links for getting in touch.

## 🎯 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production-optimized build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## ⚡ Performance Features

- **Image Optimization**: Automatic image optimization with Next.js Image component
- **Code Splitting**: Automatic code splitting for faster page loads
- **Smooth Animations**: GPU-accelerated animations for 60fps performance
- **Lazy Loading**: Components and images load on demand
- **TypeScript**: Early error detection during development

## 🌐 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy your Next.js app is on [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository on Vercel
3. Deploy automatically with each push

```bash
# Or deploy using Vercel CLI
npm i -g vercel
vercel
```

### Other Deployment Options

- **Netlify**: [Deploy guide](https://docs.netlify.com/integrations/frameworks/next-js/)
- **Railway**: [Deploy guide](https://railway.app)
- **Docker**: Create a Docker image for containerized deployment
- **Self-hosted**: Deploy on your own server using PM2 or similar

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion)
- [GSAP Docs](https://gsap.com/docs)

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kirubhakaran**

- GitHub: [@kirubha-123](https://github.com/kirubha-123)
- Portfolio: [Portfolio-with-animation](https://github.com/kirubha-123/Portfolio-with-animation)

## 📧 Get in Touch

Have questions or feedback? Feel free to open an issue or reach out through the contact form on the website.

---

**Made with ❤️ using Next.js and modern web technologies**
