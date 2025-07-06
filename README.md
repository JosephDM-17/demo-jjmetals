# JJ Metal Works - Professional Metal Fabrication Website

A modern, responsive website built with Next.js for JJ Metal Works, a professional metal fabrication company specializing in structural steel, HVAC ductwork, and custom metalwork solutions.

## 🚀 Features

- **Modern Design**: Clean, professional design with beautiful animations and transitions
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance and SEO
- **Comprehensive Sections**:
  - Hero section with compelling call-to-action
  - Services showcase with detailed descriptions
  - Company information (Vision, Mission, Values)
  - Project portfolio with case studies
  - Production capacity statistics
  - Contact forms and information
  - Professional navigation and footer

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Styling**: TailwindCSS v4
- **Language**: TypeScript
- **Icons**: Heroicons (SVG)
- **Fonts**: Geist Sans & Geist Mono

## 📋 Prerequisites

- Node.js 18+
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/jj-metal-works.git
   cd jj-metal-works
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
jj-metal-works/
├── src/
│   └── app/
│       ├── components/          # Reusable React components
│       │   ├── Navigation.tsx   # Header navigation
│       │   ├── Footer.tsx       # Footer component
│       │   ├── Hero.tsx         # Hero section
│       │   ├── Services.tsx     # Services showcase
│       │   ├── About.tsx        # About company section
│       │   ├── Statistics.tsx   # Production capacity stats
│       │   ├── Projects.tsx     # Project portfolio
│       │   └── Contact.tsx      # Contact form and info
│       ├── about/              # About page
│       ├── services/           # Services page
│       ├── projects/           # Projects page
│       ├── contact/            # Contact page
│       ├── globals.css         # Global styles and utilities
│       ├── layout.tsx          # Root layout
│       └── page.tsx            # Homepage
├── public/                     # Static assets
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🎨 Customization

### Colors and Branding

The website uses a blue and gray color scheme. To customize:

1. **Primary Colors**: Modify the blue color variants in `globals.css`
2. **Logo**: Update the logo in `Navigation.tsx` and `Footer.tsx`
3. **Company Information**: Update contact details, addresses, and company info throughout the components

### Content Updates

- **Services**: Modify the services array in `Services.tsx`
- **Projects**: Update the projects data in `Projects.tsx`
- **Statistics**: Change the production capacity numbers in `Statistics.tsx`
- **Contact Information**: Update phone numbers, emails, and addresses in contact components

## 🏗️ Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## 📱 Pages Overview

- **Homepage (`/`)**: Full showcase with hero, services, about, statistics, projects, and contact
- **About (`/about`)**: Detailed company information, history, and certifications
- **Services (`/services`)**: Comprehensive service descriptions and process overview
- **Projects (`/projects`)**: Project portfolio with detailed case studies
- **Contact (`/contact`)**: Contact forms, location info, and department contacts

## 🎯 Business Features

- **Lead Generation**: Multiple contact forms and call-to-action buttons
- **Professional Credibility**: Certifications, statistics, and project showcases
- **SEO Optimized**: Proper meta tags, headings, and semantic HTML
- **Mobile-First**: Responsive design for all device sizes
- **Fast Loading**: Optimized images and efficient code structure

## 🔧 Development Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📞 Contact Information

For questions about this website or JJ Metal Works services:

- **Phone**: +1 (555) 123-4567
- **Email**: info@jjmetalworks.com
- **Website**: [Your Domain Here]

## 📄 License

This project is proprietary software created for JJ Metal Works.

---

**Built with ❤️ for JJ Metal Works - Professional Metal Fabrication & Engineering**
