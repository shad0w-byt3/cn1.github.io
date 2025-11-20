# Batman Security Portfolio

A modern, responsive portfolio website for showcasing cybersecurity projects and penetration testing expertise.

## 🚀 Features

- **Modern Design**: Built with Next.js 15, Tailwind CSS, and Radix UI
- **3D Animations**: Interactive background animations using React Three Fiber
- **Dark/Light Theme**: Seamless theme switching with system preference detection
- **Responsive**: Mobile-first design that works on all devices
- **Static Export**: Optimized for GitHub Pages deployment
- **SEO Optimized**: Comprehensive metadata and structured data
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Dynamic project cards with GitHub links

## 📁 Project Structure

```
cn1.github.io/
├── app/                    # Next.js app router
│   ├── actions/           # Server actions
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage
│   ├── sitemap.xml        # SEO sitemap
│   └── not-found.tsx      # Custom 404 page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── background-3d.tsx # 3D background animation
│   ├── contact.tsx       # Contact section
│   ├── hero.tsx          # Hero section
│   ├── projects.tsx      # Projects showcase
│   ├── skills.tsx        # Skills section
│   ├── about.tsx         # About section
│   └── footer.tsx        # Footer
├── public/               # Static assets
│   ├── favicon.svg       # Site favicon
│   ├── site.webmanifest  # PWA manifest
│   └── robots.txt        # SEO robots file
└── next.config.mjs       # Next.js configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **3D Graphics**: React Three Fiber, Three.js
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Typography**: Space Grotesk & JetBrains Mono fonts
- **Deployment**: GitHub Pages

## 🚀 Deployment

### GitHub Pages (Recommended)

This project is configured for automatic deployment to GitHub Pages:

1. **Repository Setup**
   - Ensure your repository is named `cn1.github.io`
   - Enable GitHub Pages in repository settings
   - Select source as "GitHub Actions"

2. **Environment Variables** (Optional)
   - Copy `.env.local.example` to `.env.local`
   - Set your actual values:
     ```env
     NEXT_PUBLIC_EMAIL=your-email@example.com
     NEXT_PUBLIC_GITHUB_USERNAME=your-username
     NEXT_PUBLIC_LINKEDIN_URL=your-linkedin-profile
     ```

3. **Automatic Deployment**
   - Push changes to main branch
   - GitHub Actions will build and deploy automatically
   - Site will be live at `https://cn1.github.io`

### Manual Build

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Export static files
npm run export

# Deploy to GitHub Pages
npm run deploy
```

## 📧 Contact Form

The contact form is configured to work with static GitHub Pages deployment:

1. **Static Mode**: Uses mailto links for direct email communication
2. **Email Address**: `hero.cn1@gmail.com`
3. **Fallback**: Opens user's default email client with pre-filled message

For server-side email functionality, deploy to Vercel or Netlify and configure an email service.

## 🔧 Configuration

### Updating Projects

Edit `components/projects.tsx` to update your security projects:

```typescript
const staticProjects: Project[] = [
  {
    title: "Your Project Title",
    description: "Project description",
    image: "/your-image.jpg",
    tags: ["Tag1", "Tag2"],
    github_url: "https://github.com/username/repo",
    live_url: "https://your-demo-url.com",
    order_index: 1
  }
]
```

### SEO Customization

Update `app/layout.tsx` to customize SEO metadata:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Specialty",
  description: "Your professional description",
  // ... other SEO settings
}
```

## 📱 Performance Optimization

- **Images**: Optimized with lazy loading and proper sizing
- **Fonts**: Optimized font loading with Next.js Font API
- **Code**: Tree-shaking and minification enabled
- **Static Export**: No server-side rendering overhead

## 🌐 SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card metadata
- **Structured Data**: JSON-LD structured data for search engines
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Proper crawl instructions for search engines
- **Semantic HTML**: Proper HTML5 semantic markup

## 🎨 Customization

### Adding New Sections

1. Create new component in `components/`
2. Import and add to `app/page.tsx`
3. Update navigation in `components/header.tsx`

### Changing Color Scheme

Update CSS variables in `app/globals.css` for instant theme changes.

## 📊 Analytics

To add analytics:

1. **Google Analytics**: Add `NEXT_PUBLIC_GA_ID` to environment variables
2. **Vercel Analytics**: Uncomment the Analytics component in `app/layout.tsx`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Support

For support or questions:

- **Email**: hero.cn1@gmail.com
- **GitHub**: Create an issue in the repository
- **Portfolio**: https://cn1.github.io

---

Built with ❤️ using Next.js 15 and modern web technologies.
