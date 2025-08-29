# Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Built-in metadata and OpenGraph tags
- **Fast Performance**: Optimized with Next.js Image component
- **Clean Architecture**: Well-organized component structure

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Personal Information

Edit the `data/portfolio.ts` file to update your personal information:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  // ... other fields
};
```

### Projects

Add your projects in the same `data/portfolio.ts` file:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    // ... other fields
  },
  // ... more projects
];
```

### Images

Add your project images to the `public/projects/` directory and update the image paths in your project data.

### Resume

Add your resume PDF to the `public/` directory as `resume.pdf`.

## 🏗️ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Contact.tsx     # Contact section
│   └── Footer.tsx      # Footer
├── data/
│   └── portfolio.ts    # Portfolio data
├── types/
│   └── index.ts        # TypeScript types
└── public/
    └── projects/       # Project images
```

## 📱 Sections

1. **Hero**: Eye-catching introduction with name and title
2. **About**: Personal description and resume link
3. **Projects**: Showcase of your best work
4. **Contact**: Contact information and social links
5. **Footer**: Copyright and credits

## 🛠️ Technologies Used

- **Next.js 14**: React framework for production
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For any questions or suggestions, please reach out via the contact form on the website.

---

Built with ❤️ using Next.js and Tailwind CSS