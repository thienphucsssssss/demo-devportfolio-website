# Minimalist Developer Portfolio

A sleek, minimalist, and perfectly responsive portfolio representing a professional personal brand. Features a premium dark theme, smooth scrolling, and dynamic engagement features built on modern web technologies.

## 🚀 Features
- **Dark Theme Aesthetics:** Premium, polished feel with subtle accent colors.
- **Hero & About Sections:** Clear intro and CTA mapping out core expertise.
- **Image-based Portfolio Gallery:** Crisp, visually-driven showcase of past works.
- **Interactive Forms:** Fully functional Contact & "Hire Me" modules with active email routing via SMTP.
- **Responsive & SEO-friendly:** Semantic markup providing excellent performance and fast loading on all devices.

## 🛠 Tech Stack
- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** Lucide React
- **Mail Service:** Nodemailer (SMTP routing)

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js (v18 or newer)** installed on your machine.

### 2. Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/thienphucsssssss/demo-devportfolio-website.git
cd demo-devportfolio-website
npm install
```

### 3. Environment Variables
Create a `.env.local` file at the root of the project to enable the contact form email functionality. Add the following variables:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="465"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
CONTACT_EMAIL="your-receiving-email@gmail.com"
```
*(Note: If using Gmail, you must generate an "App Password" from your Google Account security settings, rather than using your standard account password).*

### 4. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## 📦 Build Commands

To build the application for production:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

## 📝 How to Add New Projects
Managing your portfolio content is straightforward. All data is centralized in the `data/portfolio-data.ts` file.

1. Navigate to `data/portfolio-data.ts`.
2. Locate the `PORTFOLIO_PROJECTS` array (or similar data array).
3. Add a new object following this structure:
```typescript
{
  id: 'unique-project-id',
  title: 'Project Title',
  category: 'Category (e.g. Web App, Mobile)',
  image: '/assets/project-image.jpg', // Place your image in the public/assets/ directory
  description: 'A brief description of the project.',
  technologies: ['React', 'Next.js', 'Tailwind'],
  link: 'https://project-link.com',
  github: 'https://github.com/your-repo' // Optional
}
```

## 🌍 Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).
1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Add your Environment Variables (`SMTP_HOST`, `SMTP_USER`, etc.) in the Vercel project settings.
4. Deploy!

### GitHub Pages
To deploy on GitHub pages, you will need to update the `next.config.ts` to enable static exports (`output: 'export'`), however, **Next.js API routes (like the email contact form) do not work on GitHub Pages** since it only hosts static files. For full functionality including the contact form, please use Vercel, Netlify, or any Node.js compatible hosting.

---
*Crafted for professional excellence.*
