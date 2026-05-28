# Premium Cinematic Developer Portfolio

A modern, futuristic developer portfolio built with Next.js 14, TypeScript, TailwindCSS, Framer Motion, and GSAP. Features smooth scrolling, premium animations, and glassmorphism design.

## 🚀 Features

- **Dark Futuristic UI** - Pure black background with cyan/blue glow effects
- **Cinematic Animations** - Smooth scrolling with Lenis, GSAP animations, Framer Motion transitions
- **Glassmorphism Design** - Premium glass-effect cards with blur overlays
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Performance Optimized** - Fast load times, smooth 60fps animations
- **TypeScript** - Fully typed for better development experience
- **SEO Friendly** - Metadata and structured markup included

## 📁 Project Structure

```
/app                 - Next.js app directory with layouts and pages
/components          - Reusable React components (Navbar, Footer, SmoothScrollProvider)
/sections            - Page sections (Hero, About, Skills, Projects, Contact)
/hooks               - Custom React hooks for animations and scroll
/lib                 - Utility functions and GSAP animations
/styles              - Global styles and animations
/public/videos       - Video assets (hero.mp4 should be added here)
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS v4
- **Animations**: 
  - Framer Motion - Component animations
  - GSAP - Advanced scroll animations
  - Lenis - Smooth scrolling
- **Icons**: Lucide React
- **UI**: Glassmorphism, gradient effects, glow effects

## 📋 Sections

### 1. **Navbar**
- Floating premium navbar with smooth animations
- Sticky on scroll with glassmorphism effect
- Mobile-responsive hamburger menu
- Active link indicators

### 2. **Hero**
- Fullscreen cinematic section with video background
- Animated text reveal using GSAP
- Call-to-action buttons with hover effects
- Animated scroll indicator
- Gradient lighting effects

### 3. **About**
- Split-screen layout with image and content
- Glassmorphism cards
- Scroll reveal animations
- Education, experience, and skills overview

### 4. **Skills**
- Animated skill cards with progress bars
- Neon glow borders on hover
- Stagger animations
- Floating background effects

### 5. **Projects**
- Cinematic project showcase cards
- Parallax scrolling effects
- Hover zoom animations
- Tech stack badges
- Live demo and GitHub links

### 6. **Contact**
- Premium contact form with glassmorphism
- Social media links
- Contact information
- Form validation ready

### 7. **Footer**
- Clean footer with links
- Copyright information
- Floating background effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project:
```bash
cd portfolio-animated-app
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📸 Adding Hero Video

1. Place your video file at `public/videos/hero.mp4`
2. The video should be:
   - MP4 format
   - Optimized for web (recommended: 1080p, 30fps, 5-10MB)
   - Landscape orientation

You can get free videos from:
- [Unsplash Videos](https://unsplash.com/videos)
- [Pexels Videos](https://www.pexels.com/videos/)
- [Pixabay Videos](https://pixabay.com/videos/)

## 🎨 Customization

### Change Brand Colors
Edit the CSS variables in `app/globals.css`:
```css
:root {
  --primary: #0ea5e9;        /* Cyan */
  --primary-dark: #0369a1;   /* Dark Blue */
  --accent: #00d4ff;         /* Bright Cyan */
}
```

### Update Content
- **Hero**: Edit `sections/Hero.tsx`
- **About**: Edit `sections/About.tsx`
- **Skills**: Edit `sections/Skills.tsx`
- **Projects**: Edit `sections/Projects.tsx`
- **Contact**: Edit `sections/Contact.tsx`

### Modify Animations
- Global animations: `app/globals.css`
- GSAP animations: `lib/animations.ts`
- Framer Motion animations: Individual component files
- Custom hooks: `hooks/useAnimations.ts`

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

All sections use Tailwind's responsive utilities for mobile-first design.

## 🔧 Build for Production

```bash
npm run build
npm run start
```

The built files will be in `.next/static/` folder.

## 📦 Dependencies

- `next` - React framework
- `react` & `react-dom` - UI library
- `framer-motion` - Animation library
- `gsap` - Animation library
- `lenis` - Smooth scrolling
- `lucide-react` - Icon library
- `clsx` - Classname utility
- `tailwindcss` - Styling

## ⚡ Performance Tips

1. **Lazy Load Images**: Already implemented with Next.js Image component
2. **Code Splitting**: Next.js handles this automatically
3. **Smooth Animations**: Use `requestAnimationFrame` for 60fps animations
4. **Optimize Videos**: Compress video files before deployment
5. **Use WebP Format**: For better image compression

## 🎯 Future Enhancements

- [ ] Add blog section with MDX
- [ ] Implement dark/light theme toggle
- [ ] Add project filtering by category
- [ ] Add testimonials section
- [ ] Implement contact form submission
- [ ] Add analytics tracking
- [ ] Create admin dashboard for content management

## 🌐 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms
Works with any platform that supports Next.js:
- Netlify
- Firebase Hosting
- AWS Amplify
- Heroku

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📧 Support

For questions or issues, please create an issue in the repository.

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
