# SNC Flores Urban Canvas - Art Portfolio Website

## Overview

This is a modern art portfolio website built for SNC Flores, showcasing urban/street art canvas pieces. The application features a single-page design with sections for featured artwork, gallery, artist information, and contact details. It's built with a full-stack TypeScript architecture using React for the frontend and Express.js for the backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom urban/street art theme
- **UI Components**: Radix UI components via shadcn/ui
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Pattern**: RESTful API endpoints
- **Database ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured but using in-memory storage for demo)
- **Session Management**: Express sessions with PostgreSQL store support

### Design System
- **Theme**: Custom urban/street art aesthetic with dark colors
- **Colors**: Neon green, vibrant orange, electric blue, deep black, dark gray
- **Typography**: Oswald and Impact fonts for street-style look
- **Components**: Fully responsive design with mobile-first approach

## Key Components

### Data Models
- **Artworks**: Core entity with title, description, image, availability status, medium, dimensions
- **Inquiries**: Contact form submissions linked to specific artworks
- **Features**: Featured artwork highlighting system

### API Endpoints
- `GET /api/artworks` - Retrieve all artworks
- `GET /api/artworks/featured` - Get the currently featured artwork
- `GET /api/artworks/:id` - Get specific artwork details
- `POST /api/inquiries` - Submit purchase inquiries

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Large banner with call-to-action buttons
- **Featured Drop**: Showcase current featured artwork
- **Gallery Section**: Grid display of previous artworks
- **About Section**: Artist biography and statistics
- **Contact Section**: Email and phone contact options
- **Footer**: Social links and copyright information

## Data Flow

1. **Initial Load**: Client fetches artworks and featured piece via TanStack Query
2. **Navigation**: Smooth scrolling between sections using scroll-to functionality
3. **Contact Flow**: Direct email links with pre-filled subject and body text
4. **Purchase Inquiries**: Form submissions to backend API (when implemented)
5. **Real-time Updates**: TanStack Query handles caching and background updates

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React, Wouter for routing
- **Styling**: Tailwind CSS, Radix UI primitives
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React icons
- **Fonts**: Google Fonts (Oswald, Impact)
- **Images**: Unsplash for placeholder images

### Backend Dependencies
- **Database**: Neon Database (PostgreSQL)
- **ORM**: Drizzle ORM with Zod schema validation
- **Utilities**: Date-fns for date handling

### Development Tools
- **Build**: Vite with React plugin
- **TypeScript**: Full type safety across frontend and backend
- **Development**: Hot reload, error overlay, and Replit integration

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with Express API proxy
- **Hot Reload**: Automatic updates for both frontend and backend changes
- **Error Handling**: Runtime error overlay for debugging

### Production Build Process
1. **Frontend**: Vite builds optimized React application to `dist/public`
2. **Backend**: esbuild compiles TypeScript server to `dist/index.js`
3. **Static Assets**: Frontend build served by Express in production
4. **Database**: Drizzle migrations applied automatically

### Environment Configuration
- **Database**: PostgreSQL connection via DATABASE_URL environment variable
- **Session Storage**: PostgreSQL-backed session store for scalability
- **Static Files**: Express serves built frontend in production mode

### Hosting Considerations
- **Replit**: Optimized for Replit deployment with specific plugins
- **Scalability**: Stateless backend design supports horizontal scaling
- **CDN**: Images hosted externally (Unsplash) for better performance
- **Database**: Neon Database provides serverless PostgreSQL scaling

The application follows modern web development best practices with separation of concerns, type safety, responsive design, and optimized performance for both development and production environments.