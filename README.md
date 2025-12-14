# Lebbnb - Premium Real Estate Portfolio Website

A modern, full-stack real estate portfolio website built with Next.js 16, TypeScript, and Tailwind CSS, featuring a powerful admin panel for content management.

## 🌟 Features

### Public Website
- **Modern Landing Page** with animated hero section and search functionality
- **Properties Gallery** with advanced filtering (location, price, property type)
- **Property Detail Pages** with image galleries and comprehensive information
- **About Us Page** showcasing company mission, vision, values, and team
- **Contact Form** with rate limiting and validation
- **Responsive Design** optimized for all devices
- **Smooth Animations** using Framer Motion
- **Green Color Scheme** with professional aesthetics

### Admin Panel
- **Dashboard** with statistics and quick actions
- **Properties Management** - Full CRUD operations for properties
- **Contact Messages** - View and manage customer inquiries
- **Content Management** for About Us and Home page

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Backend API running (see Lebbnb-backend folder)
- MongoDB database configured

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Configure environment:**
Create `.env.local` file:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Color Scheme

- **Primary Green:** `#2d6a4f`
- **Accent Green:** `#52b788`
- **Background:** White and soft grays

## 📁 Project Structure

```
src/
├── app/              # Next.js pages
│   ├── admin/       # Admin panel
│   ├── properties/  # Property pages
│   ├── about/       # About page
│   └── contact/     # Contact page
├── components/      # Reusable components
├── lib/            # API client
└── types/          # TypeScript types
```

## 🔗 Backend Integration

This frontend connects to the Lebbnb backend API. Ensure the backend is running on port 5000.

See `Lebbnb-backend/API_DOCUMENTATION.md` for API details.

## 📧 Support

For issues or questions, refer to the backend documentation or contact the development team.

---

**Built with ❤️ using Next.js 16, TypeScript, and Tailwind CSS**
