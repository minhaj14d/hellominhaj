# Minhaj Portfolio - Developer & Creative Showcase

## Overview

This is a full-stack personal portfolio website built for Minhaj, showcasing his multifaceted identity as an Applied Mathematics student, aspiring Data Scientist, skilled Graphic Designer, Web Developer, and Campus Leader. The application features a modern, responsive design with both light and dark themes, smooth animations, and interactive components.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **UI Library**: Radix UI components with shadcn/ui design system
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks with Tanstack Query for server state
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **API Pattern**: RESTful API with JSON responses
- **Session Management**: Express sessions with PostgreSQL store

### Development Architecture
- **Monorepo Structure**: Shared code between client and server
- **Hot Reload**: Vite dev server with HMR
- **Type Safety**: Shared TypeScript schemas between frontend and backend
- **Build Process**: Separate client and server builds

## Key Components

### Database Schema
- **Users Table**: Basic user authentication (id, username, password)
- **Contacts Table**: Contact form submissions (id, name, email, subject, message, created_at)
- **Schema Validation**: Zod schemas for runtime validation with drizzle-zod integration

### Frontend Components
- **Navigation**: Fixed navigation with smooth scrolling and theme toggle
- **Hero Section**: Landing area with animated badges and call-to-action buttons
- **About Section**: Personal introduction with floating animations
- **Skills Section**: Animated progress bars for different skill categories
- **Projects Section**: Filterable project showcase with category tabs
- **Experience Section**: Timeline-based experience display
- **Certifications Section**: Achievement cards with icons
- **Blog Section**: Article previews with category badges
- **Contact Section**: Form with validation and API integration
- **Footer**: Social links and branding

### API Endpoints
- `POST /api/contact`: Submit contact form with validation
- `GET /api/contacts`: Retrieve all contact submissions (admin use)

### Storage Layer
- **Interface**: IStorage abstraction for data operations
- **Implementation**: MemStorage for development (in-memory storage)
- **Production Ready**: Configured for PostgreSQL with Drizzle ORM

## Data Flow

1. **Client Request**: User interacts with React components
2. **State Management**: Tanstack Query manages API calls and caching
3. **API Layer**: Express routes handle HTTP requests
4. **Validation**: Zod schemas validate incoming data
5. **Storage**: Data operations through storage abstraction
6. **Response**: JSON responses sent back to client
7. **UI Update**: React components re-render with new data

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **wouter**: Lightweight routing

### Development Dependencies
- **vite**: Build tool and dev server
- **tailwindcss**: Utility-first CSS framework
- **typescript**: Type checking and compilation
- **@replit/vite-plugin-***: Replit-specific development tools

### UI/UX Dependencies
- **class-variance-authority**: Type-safe component variants
- **clsx**: Conditional class names
- **lucide-react**: Icon library
- **date-fns**: Date formatting utilities

## Deployment Strategy

### Development
- **Environment**: NODE_ENV=development
- **Server**: Express with Vite middleware for HMR
- **Database**: Uses DATABASE_URL environment variable
- **Port**: Configurable (defaults to Express server)

### Production
- **Build Process**: 
  1. `vite build` - Builds client-side assets
  2. `esbuild` - Bundles server code
- **Output**: 
  - Client assets in `dist/public`
  - Server bundle in `dist/index.js`
- **Startup**: `node dist/index.js`
- **Database**: PostgreSQL with connection pooling

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)
- `REPL_ID`: Replit-specific identifier for development features

## Changelog

- July 03, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.