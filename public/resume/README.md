# Christopher Britten - Interactive Resume

A modern, responsive, and interactive web-based resume built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Looks great on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with gradient backgrounds and smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and clickable skills
- **Print Friendly**: Optimized for printing with a dedicated print button
- **Accessibility**: Semantic HTML and proper ARIA labels
- **Performance**: Optimized animations and minimal dependencies

## Technologies Used

- **HTML5**: Semantic markup for better accessibility and SEO
- **CSS3**: Modern styling with Flexbox, Grid, animations, and gradients
- **JavaScript (ES6+)**: Interactive features and dynamic content
- **Responsive Design**: Mobile-first approach with media queries

## File Structure

```
Newsest resume/
├── index.html              # Main HTML structure
├── styles.css              # All styling and animations
├── script.js               # Interactive features and functionality
├── README.md               # Project documentation
├── Christopher Britten Resume  PUBLIC.pdf
└── Christopher Britten Resume .pdf
```

## Features Breakdown

### 1. Scroll Progress Bar
- Visual indicator at the top of the page showing scroll progress
- Smooth gradient animation

### 2. Interactive Buttons
- **Print Button**: Trigger browser print dialog (Fixed position, bottom-right)
- **Download PDF Button**: Quick access to PDF version of resume

### 3. Animations
- Fade-in sections on scroll using Intersection Observer API
- Smooth hover effects on skills and job cards
- Animated gradient backgrounds

### 4. Skills Section
- Grid layout with hoverable skill badges
- Gradient backgrounds with shadow effects
- Responsive columns that adapt to screen size

### 5. Experience Cards
- Clean card-based layout for job experiences
- Hover effects for better interactivity
- Clear date indicators and technology tags

### 6. Email Copy Feature
- Click email address to copy to clipboard
- Visual notification on successful copy

## Keyboard Shortcuts

- `Ctrl/Cmd + P`: Open print dialog

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Customization

### Colors
The main color scheme uses a purple gradient. To change colors, update these CSS variables:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Header background */
background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
```

### Layout
- Maximum width: 1000px (adjustable in `.container` class)
- Padding and spacing can be modified in the `.section` class

### Fonts
Default font stack:
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```

## How to Use

1. **View Locally**: Open `index.html` in any modern web browser
2. **Print**: Click the print button or use `Ctrl/Cmd + P`
3. **Download PDF**: Click the download button to access PDF version

## Deployment Options

### GitHub Pages
1. Create a new repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Access at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the folder to Netlify
2. Get instant deployment with custom domain options

### Vercel
1. Import the project
2. Deploy with one click
3. Get automatic HTTPS and CDN

## Future Enhancements

- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Contact form integration
- [ ] Download as PDF (client-side generation)
- [ ] Animation preferences (respect `prefers-reduced-motion`)
- [ ] Skills filter/search functionality
- [ ] Timeline visualization for experience
- [ ] Integration with LinkedIn API

## Performance Optimizations

- Minimal external dependencies (no frameworks)
- CSS animations using `transform` and `opacity` (hardware accelerated)
- Intersection Observer for efficient scroll animations
- Optimized images and assets

## Accessibility Features

- Semantic HTML5 elements
- Proper heading hierarchy
- Keyboard navigation support
- High contrast colors for readability
- Print-friendly stylesheet

## Development

To make changes:

1. Edit `index.html` for content changes
2. Modify `styles.css` for styling updates
3. Update `script.js` for functionality additions

## License

This project is open source and available for personal use.

## Contact

**Christopher Britten**
- Email: britten63@hotmail.com
- LinkedIn: [linkedin.com/in/christopher-britten](https://www.linkedin.com/in/christopher-britten)
- Location: Big Pond, NS

---

Built with 💻 by Christopher Britten | Software Development Engineer in Test