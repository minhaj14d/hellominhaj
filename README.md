# Minhaj Portfolio - Developer & Creative Showcase

A modern, interactive personal portfolio website showcasing multifaceted skills in data science, web development, and graphic design with dark/light mode and smooth animations.

## 🎯 About

This portfolio website highlights Minhaj's multifaceted identity as:
- 🎓 **Applied Mathematics** undergraduate student
- 📊 Aspiring **Data Scientist** with experience in data analysis and machine learning
- 🎨 Skilled **Graphic Designer** and **Web Developer** with strong UI/UX command
- 💬 Active **Debater**, **Organizer**, and **Campus Leader**
- 🧠 **Problem Solver** passionate about innovation and tech for social good

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Sections**: Animated progress bars, hover effects, and transitions
- **Project Showcase**: Filterable projects by category (Data Science, Web Dev, Design)
- **Contact Form**: Fully functional contact form with backend integration
- **Responsive Design**: Optimized for all devices and screen sizes
- **SEO Optimized**: Proper meta tags and Open Graph implementation

## 🚀 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** with shadcn/ui components
- **Framer Motion** for animations
- **Wouter** for routing
- **TanStack Query** for state management

### Backend
- **Node.js** with Express
- **TypeScript** with ES modules
- **PostgreSQL** with Drizzle ORM
- **Zod** for validation

### Development
- **Vite** for build tooling
- **ESLint** for code quality
- **Prettier** for formatting

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
├── server/                # Backend Express application
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage layer
│   └── index.ts           # Server entry point
├── shared/                # Shared types and schemas
└── package.json           # Dependencies and scripts
```

## 🛠️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/minhaj-portfolio.git
cd minhaj-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your database URL
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:5000`

## 🎨 Key Sections

- **Hero Section**: Dynamic introduction with animated badges
- **About Me**: Personal background and academic journey
- **Skills**: Interactive progress bars for different skill categories
- **Projects**: Showcase of data science, web development, and design projects
- **Experience**: Timeline of teaching, leadership, and professional roles
- **Certifications**: Academic and professional achievements
- **Blog**: Articles on data science, web development, and leadership
- **Contact**: Functional contact form with social media links

## 🌟 Highlights

- **Smooth Animations**: CSS animations and transitions for enhanced UX
- **Theme Support**: Complete dark/light mode implementation
- **Interactive Elements**: Hover effects, progress bars, and smooth scrolling
- **Professional Content**: Real project showcases and experience highlights
- **Mobile Responsive**: Fully optimized for mobile and tablet devices

## 🚀 Deployment

### Quick Deployment Options

**Option 1: Replit Deployment (Recommended)**
1. Click the "Deploy" button in Replit
2. Follow the deployment wizard
3. Your portfolio will be live at `https://your-repl-name.your-username.replit.app`

**Option 2: Vercel (Free)**
1. Connect your GitHub repository to Vercel
2. Set environment variables: `DATABASE_URL`
3. Deploy automatically on every push

**Option 3: Netlify (Free)**
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist/public`

### Manual Deployment
1. Build the project: `npm run build`
2. Upload `dist` folder to your hosting provider
3. Set up environment variables: `DATABASE_URL`

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string
- `NODE_ENV`: Set to "production" for production deployments

## 📧 Contact

For questions or collaboration opportunities:
- **Email**: minhaj@university.edu
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ by Minhaj** - Turning Equations, Code, and Creativity into Impact