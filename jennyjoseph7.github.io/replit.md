# Portfolio Website - Jenny Joseph K

## Overview

This repository contains a modern, responsive portfolio website built for Jenny Joseph K, a Master of Computer Applications student specializing in AI, DevOps, and Ethical Hacking. The application is a full-stack web application with a React frontend and Express backend, designed to showcase professional achievements, projects, and contact information.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: PostgreSQL session store
- **API Design**: RESTful endpoints for contact form submissions

### Design System
- **Theme**: Light/dark mode support with custom CSS variables
- **Typography**: Inter font for modern, professional appearance
- **Color Palette**: Professional blues, emeralds, and accent colors
- **Components**: Comprehensive UI component library
- **Responsive**: Mobile-first design with Tailwind breakpoints

## Key Components

### Frontend Components
1. **Header**: Fixed navigation with smooth scrolling and theme toggle
2. **Hero**: Landing section with name, tagline, and call-to-action buttons
3. **About**: Detailed background and soft skills showcase
4. **Skills**: Technical skills with progress bars and tool categories
5. **Projects**: Featured projects with achievements and technology stacks
6. **Certifications**: Professional certifications with visual branding
7. **Education**: Timeline-style education history
8. **Contact**: Interactive contact form with backend integration
9. **Footer**: Social links and copyright information

### Backend Components
1. **Contact API**: Handles form submissions with validation
2. **Storage Layer**: Abstracted storage interface (currently in-memory)
3. **Route Registration**: Centralized API route management
4. **Error Handling**: Comprehensive error middleware

### Database Schema
- **Contacts Table**: Stores contact form submissions with name, email, message, and timestamp
- **Validation**: Zod schemas ensure data integrity

## Data Flow

1. **Client Interaction**: User fills out contact form
2. **Form Validation**: Client-side validation with React Hook Form and Zod
3. **API Request**: TanStack Query sends POST request to backend
4. **Server Validation**: Backend validates data using shared Zod schema
5. **Data Storage**: Contact information stored in PostgreSQL database
6. **Response**: Success/error feedback displayed to user via toast notifications

## External Dependencies

### Core Technologies
- **React**: UI framework with hooks and modern patterns
- **Express**: Minimal web framework for Node.js
- **Drizzle**: Type-safe PostgreSQL ORM with migrations
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool with hot module replacement

### UI and Styling
- **Radix UI**: Accessible component primitives
- **shadcn/ui**: Pre-built component library
- **Lucide React**: Modern icon library
- **Class Variance Authority**: Type-safe component variants

### Development Tools
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

### Database and Storage
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-kit**: Database migration and schema management
- **connect-pg-simple**: PostgreSQL session store

## Deployment Strategy

### Development Environment
- **Hot Reload**: Vite dev server with HMR for instant feedback
- **Database**: Neon serverless PostgreSQL for development
- **Environment Variables**: DATABASE_URL for database connection

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle handles schema migrations
- **Static Serving**: Express serves built React application

### Build Process
1. Frontend assets compiled and optimized with Vite
2. Backend TypeScript transpiled and bundled with ESBuild
3. Database schema pushed using Drizzle migrations
4. Single production server serves both API and static files

### Key Features
- **Professional Portfolio**: Clean, modern design showcasing technical expertise
- **Interactive Contact Form**: Full-stack contact functionality with validation and database storage
- **Professional Timeline**: Comprehensive timeline combining education, experience, projects, and certifications
- **Resume Download**: Direct PDF download functionality for employers
- **Performance Optimized**: Lazy loading, skeleton screens, scroll animations, and SEO optimization
- **Responsive Design**: Mobile-first approach with smooth animations across all devices
- **Dark Mode**: Theme switching capability with persistent storage
- **Accessibility**: Built with accessible components from Radix UI
- **Type Safety**: End-to-end TypeScript for robust development

### Recent Changes (January 2025)
- ✓ Added comprehensive contact form with backend API integration
- ✓ Implemented professional timeline component with filterable events
- ✓ Enhanced SEO with proper meta tags, Open Graph, and Twitter cards
- ✓ Added performance optimizations including lazy loading and skeleton screens
- ✓ Updated database schema to include contact form subject field
- ✓ Created scroll animation hooks for improved user experience
- ✓ Added resume download functionality using authentic PDF file