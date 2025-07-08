# Clínica Dra. Fabiana Meneghelli - Replit Project Guide

## Overview

This is a full-stack web application for a Brazilian aesthetic clinic specializing in facial harmonization. The application features a modern, responsive design with a Portuguese-language interface, contact form functionality, and a comprehensive service showcase.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: connect-pg-simple for PostgreSQL session storage
- **API Design**: RESTful API with structured error handling

### Key Components

#### Database Schema
- **Contact Submissions**: Stores form submissions with fields for name, phone, email, service, and message
- **Users**: Basic user structure for potential admin functionality
- **Drizzle Configuration**: PostgreSQL dialect with migrations support

#### API Endpoints
- `POST /api/contact` - Creates new contact form submissions
- `GET /api/contact` - Retrieves contact submissions (admin functionality)

#### UI Components
- **Header**: Fixed navigation with mobile menu support
- **Hero**: Landing section with call-to-action buttons
- **About**: Doctor profile and credentials
- **Services**: Comprehensive service catalog with pricing
- **Gallery**: Before/after images and clinic photos
- **Testimonials**: Customer reviews and ratings
- **Contact**: Contact form with validation
- **Footer**: Site links and social media

## Data Flow

1. **User Interaction**: Users navigate the single-page application and interact with the contact form
2. **Form Submission**: Contact form data is validated client-side and sent to the backend API
3. **Database Storage**: Form submissions are stored in PostgreSQL via Drizzle ORM
4. **Response Handling**: Success/error messages are displayed using toast notifications
5. **Admin Access**: Contact submissions can be retrieved via GET endpoint for admin review

## External Dependencies

### Frontend Dependencies
- **UI Framework**: React with extensive Radix UI component library
- **Styling**: Tailwind CSS with PostCSS processing
- **Icons**: Font Awesome for iconography
- **Fonts**: Google Fonts (Inter and Playfair Display)
- **Validation**: React Hook Form with Zod resolvers
- **Carousel**: Embla Carousel for image galleries

### Backend Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: Drizzle ORM with Zod schema validation
- **Utilities**: Various utility libraries for date formatting and string manipulation

### Development Dependencies
- **Build**: Vite with React plugin and TypeScript support
- **Development**: tsx for TypeScript execution, esbuild for production builds
- **Replit Integration**: Specialized plugins for Replit development environment

## Deployment Strategy

### Development Environment
- Uses Vite dev server with HMR (Hot Module Replacement)
- TypeScript compilation with strict mode enabled
- Replit-specific plugins for enhanced development experience

### Production Build
- Frontend: Vite builds optimized static assets to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js`
- Database: Drizzle Kit handles schema migrations

### Environment Configuration
- `NODE_ENV` controls development vs production behavior
- `DATABASE_URL` required for PostgreSQL connection
- Replit-specific environment variables for platform integration

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 08, 2025. Initial setup