# My Portfolio

A modern, responsive portfolio website built with React, Vite, and SCSS. Features a glassmorphism dark theme with smooth animations.

## Features

- **Responsive Design** - Mobile-first approach, works on all devices
- **Dark Theme** - Modern glassmorphism aesthetic
- **Smooth Animations** - CSS3 transforms and keyframes
- **3D Flip Cards** - Interactive project showcase
- **Timeline Layout** - Professional experience display
- **Contact Form** - Ready for backend integration

## Sections

- **Hero** - Introduction with social links
- **About** - Personal info and stats
- **Experience** - Work history timeline
- **Projects** - 3D flip card project gallery
- **Skills** - Categorized skill showcase
- **Contact** - Contact form and info

## Tech Stack

- React 18
- Vite
- SCSS
- Font Awesome Icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

1. Update personal info in component files
2. Add your projects in `src/components/Projects/Projects.jsx`
3. Modify experience in `src/components/Experience/Experience.jsx`
4. Update skills in `src/components/Skills/Skills.jsx`
5. Configure contact info in `src/components/Contact/Contact.jsx`
6. Replace placeholder images with your photos
7. Update social media links

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── About/
│   ├── Experience/
│   ├── Projects/
│   ├── Skills/
│   └── Contact/
├── styles/
│   ├── _variables.scss
│   ├── _animations.scss
│   └── main.scss
├── App.jsx
└── main.jsx
```

## License

MIT
