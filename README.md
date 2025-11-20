# Portfolio
This is my personal Portfolio. You can access it through "mubasshir-ahmed-arnab.netlify.app/"


# Personal Portfolio Website

A modern, responsive, and animated personal portfolio website built with HTML, CSS, and JavaScript.

## Features

✨ **Modern Design**
- Clean, professional UI with glassmorphism effects
- Smooth animations and transitions
- Beautiful gradient backgrounds
- Soft shadows and modern styling

🌓 **Theme Toggle**
- Light and dark mode support
- Theme preference saved in localStorage
- Smooth theme transitions

📱 **Fully Responsive**
- Mobile-first design approach
- Hamburger menu for mobile devices
- Optimized for all screen sizes

🎨 **Animations**
- Scroll reveal animations
- Typewriter effect for hero name
- Hover animations on cards and buttons
- Parallax effects
- Smooth scrolling

📋 **Sections**
- Hero section with animated intro
- About me with profile picture
- Skills showcase with icons
- Dynamic projects grid
- Experience/Education timeline
- Contact form
- Footer with social links

## File Structure

```
Portfolio/
│
├── index.html              # Main HTML file
├── README.md              # This file
├── profile_photo.jpeg     # Profile photo (already included)
│
└── assets/
    ├── css/
    │   └── style.css      # All styles and animations
    ├── js/
    │   └── script.js      # JavaScript functionality
    └── img/
        └── profile_photo.jpeg  # Profile photo copy
```

## Getting Started

1. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (http-server)
     npx http-server
     ```

2. **Customize Your Content**
   - Edit `index.html` to update text content
   - Modify `assets/js/script.js` to update projects array
   - Replace `assets/img/profile_photo.jpeg` with your photo

## Customization Guide

### 1. Update Personal Information

**In `index.html`:**
- Replace "Mubasshir Ahmed Arnab" with your name
- Update the tagline "Developer • Designer • Innovator"
- Modify the about section bio
- Update contact information (email, phone, location)
- Update social media links

### 2. Update Projects

**In `assets/js/script.js`, modify the `projects` array:**

```javascript
const projects = [
    {
        title: "Your Project Title",
        description: "Project description here...",
        image: "path/to/image.jpg",  // Use your own images
        technologies: ["React", "Node.js", "MongoDB"],
        link: "https://your-project-link.com"
    },
    // Add more projects...
];
```

**To use your own project images:**
1. Place images in `assets/img/` folder
2. Update the `image` property in the projects array:
   ```javascript
   image: "assets/img/project1.jpg"
   ```

### 3. Update Skills

**In `index.html`, find the skills section and modify:**

```html
<div class="skill-card reveal">
    <div class="skill-icon">
        <i class="fab fa-your-icon"></i>  <!-- Change icon class -->
    </div>
    <h3 class="skill-name">Your Skill</h3>
    <p class="skill-level">Proficient</p>
</div>
```

**Available icon libraries:**
- Font Awesome (already included): https://fontawesome.com/icons
- Use classes like `fab fa-react`, `fab fa-js`, etc.

### 4. Update Experience/Education

**In `index.html`, find the timeline section and modify:**

```html
<div class="timeline-item reveal">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <span class="timeline-date">2023 - Present</span>
        <h3 class="timeline-title">Your Position</h3>
        <h4 class="timeline-company">Company Name</h4>
        <p class="timeline-description">Your description...</p>
    </div>
</div>
```

### 5. Update Logo Initials

**In `index.html`, find the logo:**

```html
<div class="logo" id="logo">
    <span class="logo-text">MA</span>  <!-- Change to your initials -->
</div>
```

Also update in the footer section.

### 6. Customize Colors

**In `assets/css/style.css`, modify CSS variables:**

```css
:root {
    --accent-primary: #6366f1;      /* Main accent color */
    --accent-secondary: #8b5cf6;    /* Secondary accent */
    --accent-tertiary: #ec4899;     /* Tertiary accent */
    /* ... other colors ... */
}
```

### 7. Update Contact Form

The contact form currently shows an alert on submission. To connect it to a backend:

**In `assets/js/script.js`, modify the form handler:**

```javascript
contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });
        
        if (response.ok) {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    } catch (error) {
        alert('Error sending message. Please try again.');
    }
});
```

**Alternative: Use a service like Formspree or EmailJS**

### 8. Update Social Media Links

**In `index.html`, find all social links and update:**

```html
<a href="https://your-github.com" target="_blank" aria-label="GitHub" class="social-link">
    <i class="fab fa-github"></i>
</a>
```

Update links in:
- Hero section
- Contact section
- Footer section

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**
   - Compress images before adding them
   - Use WebP format for better compression
   - Add `loading="lazy"` attribute to images (already included)

2. **Minify Files** (for production)
   - Minify CSS and JavaScript files
   - Use tools like UglifyJS or Terser

3. **CDN for Font Awesome**
   - Already using CDN, but you can host locally if preferred

## Deployment

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to Settings > Pages
3. Select your branch and folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop your project folder to Netlify
2. Or connect your GitHub repository
3. Your site will be live instantly

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts

## License

This project is open source and available for personal use.

## Credits

- Font Awesome for icons
- Unsplash for placeholder images (replace with your own)
- Design inspiration from modern portfolio websites

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Made by Mubasshir Ahmed Arnab**


