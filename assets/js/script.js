// ============================================
// Projects Data Array
// ============================================

const projects = [
    {
        title: "MediAI - AI-Powered Healthcare System",
        description: "Led the development of an AI-powered precision healthcare and hospital management system integrating CNN-based image disease detection and text-based disease risk prediction. Features include role-based authentication, patient risk analytics, medication reminders, and hospital inventory management. Achieved 3rd place at MIE 1.0 Robolution 2025, CUET.",
        image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
        technologies: ["Python", "Machine Learning", "CNN", "Neural Networks", "AI"],
        link: "https://github.com/mubasshirarnab/MediAI"
    },
    {
        title: "Autonomous Trash Collector",
        description: "Led a team of 5 students to develop an autonomous trash collection robot addressing critical environmental challenges. Implemented Arduino code and designed a 3D module Robotic Arm using Autodesk Fusion 360. Enhanced team productivity and project management throughout the development lifecycle.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
        technologies: ["Arduino", "C/C++", "Fusion 360", "Robotics", "3D Design"],
        link: "https://github.com/mubasshirarnab"
    },
    {
        title: "Problem Solving Solutions",
        description: "Active problem solver on LeetCode and Codeforces, demonstrating strong algorithmic thinking and data structure knowledge. Solutions cover various topics including dynamic programming, graph algorithms, and optimization problems.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
        technologies: ["C++", "Java", "Python", "Algorithms", "Data Structures"],
        link: "https://github.com/mubasshirarnab"
    },
    {
        title: "Web Development Projects",
        description: "Various web development projects showcasing proficiency in frontend and backend technologies. Includes responsive designs, database integration, and modern web application development.",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
        technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
        link: "https://github.com/mubasshirarnab"
    }
];

// ============================================
// DOM Elements
// ============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const contactForm = document.getElementById('contact-form');
const projectsGrid = document.getElementById('projects-grid');
const downloadCvBtn = document.getElementById('download-cv-btn');

// ============================================
// Theme Toggle Functionality
// ============================================

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', currentTheme);
updateThemeIcon(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    if (theme === 'dark') {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// ============================================
// Sticky Navigation
// ============================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// ============================================
// Mobile Menu Toggle
// ============================================

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Smooth Scroll for Navigation Links
// ============================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Active Navigation Link Highlighting
// ============================================

function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section, .hero');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ============================================
// Scroll Reveal Animation
// ============================================

const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay for staggered animation
            setTimeout(() => {
                entry.target.classList.add('active');
            }, index * 100);
            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ============================================
// Load Projects Dynamically
// ============================================

function loadProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card reveal';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <a href="${project.link}" target="_blank" class="project-link">
                    View Project <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
    
    // Observe newly added project cards for reveal animation
    const newRevealElements = projectsGrid.querySelectorAll('.reveal');
    newRevealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// ============================================
// Contact Form Handling with EmailJS
// ============================================

// ============================================
// EmailJS Configuration
// ============================================
// STEP-BY-STEP SETUP INSTRUCTIONS:
//
// 1. Go to https://www.emailjs.com/ and sign up (FREE - 200 emails/month)
//
// 2. CREATE EMAIL SERVICE:
//    - Go to "Email Services" in dashboard
//    - Click "Add New Service"
//    - Choose Gmail, Outlook, or your email provider
//    - Connect your email account
//    - Copy the "Service ID" (looks like: service_xxxxxxxxx)
//
// 3. CREATE EMAIL TEMPLATE:
//    - Go to "Email Templates" in dashboard
//    - Click "Create New Template"
//    - Choose your service from step 2
//    - Set "To Email" to: marnab222263@bscse.uiu.ac.bd
//    - Set "Subject" to: Portfolio Contact: {{subject}}
//    - Set "Content" to:
//      --------
//      From: {{from_name}}
//      Email: {{from_email}}
//      Subject: {{subject}}
//      
//      Message:
//      {{message}}
//      --------
//    - Copy the "Template ID" (looks like: template_xxxxxxxxx)
//
// 4. GET PUBLIC KEY:
//    - Go to "Account" > "General"
//    - Scroll to "API Keys"
//    - Copy your "Public Key"
//
// 5. REPLACE THE VALUES BELOW with your actual credentials:

const EMAILJS_SERVICE_ID = 'service_xkq0lk7'; // Your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_ipcxhcf'; // Your EmailJS Template ID
const EMAILJS_PUBLIC_KEY = 'G0RAnD9BuX9vaOTy9'; // Your EmailJS Public Key

// Initialize EmailJS (only if credentials are configured)
if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_PUBLIC_KEY);
    console.log('EmailJS initialized successfully');
} else if (EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    console.warn('⚠️ EmailJS credentials not configured. Please set your Service ID, Template ID, and Public Key in script.js');
}

// Notification Toast Functions
function showNotification(message, type = 'success') {
    const toast = document.getElementById('notification-toast');
    const toastMessage = toast.querySelector('.toast-message');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastMessage.textContent = message;
    
    // Remove existing icon classes
    toastIcon.className = 'toast-icon';
    
    if (type === 'success') {
        toastIcon.classList.add('fas', 'fa-check-circle');
        toast.classList.remove('error');
        toast.classList.add('success');
    } else {
        toastIcon.classList.add('fas', 'fa-exclamation-circle');
        toast.classList.remove('success');
        toast.classList.add('error');
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Contact Form Submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = {
            from_name: document.getElementById('name').value.trim(),
            from_email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject').value.trim(),
            message: document.getElementById('message').value.trim()
        };
        
        // Validation
        if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
            showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.from_email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Get submit button elements
        const submitBtn = document.getElementById('submit-btn');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-flex';
        
        try {
            // Check if EmailJS is initialized
            if (typeof emailjs === 'undefined') {
                throw new Error('EmailJS is not loaded. Please check your internet connection.');
            }
            
            // Check if credentials are set (check for placeholder values, not actual credentials)
            if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || 
                EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
                EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
                const errorMsg = 'EmailJS is not configured yet. ' +
                    'To enable the contact form:\n\n' +
                    '1. Sign up at https://www.emailjs.com/ (FREE - 200 emails/month)\n' +
                    '2. Create an Email Service → Copy Service ID\n' +
                    '3. Create an Email Template → Copy Template ID\n' +
                    '4. Get Public Key from Account → API Keys\n' +
                    '5. Open assets/js/script.js and replace lines 266-268 with your credentials\n\n' +
                    '📖 See EMAILJS_SETUP.md file for detailed step-by-step instructions.';
                throw new Error(errorMsg);
            }
            
            // Send email using EmailJS
            const templateParams = {
                from_name: formData.from_name,
                from_email: formData.from_email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'marnab222263@bscse.uiu.ac.bd', // Your email (can also be set in EmailJS template)
                reply_to: formData.from_email
            };
            
            const response = await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                templateParams
            );
            
            // Success
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
            
        } catch (error) {
            console.error('EmailJS Error:', error);
            
            // Show user-friendly error message
            let errorMessage = 'Failed to send message. Please try again later.';
            
            if (error.text) {
                errorMessage = error.text;
            } else if (error.message) {
                // Format multi-line error messages for display
                errorMessage = error.message;
                
                // If it's the configuration error, show a simplified version
                if (error.message.includes('EmailJS is not configured')) {
                    errorMessage = 'EmailJS not configured. Please set up your credentials in assets/js/script.js (see EMAILJS_SETUP.md for instructions).';
                }
            }
            
            showNotification(errorMessage, 'error');
            
            // Log full error details to console for debugging
            if (error.message && error.message.includes('EmailJS is not configured')) {
                console.log('%c📧 EmailJS Setup Required', 'color: #06b6d4; font-size: 16px; font-weight: bold;');
                console.log('%cFollow these steps to enable the contact form:', 'color: #475569; font-size: 14px;');
                console.log('1. Sign up at https://www.emailjs.com/ (FREE)');
                console.log('2. Create Email Service → Get Service ID');
                console.log('3. Create Email Template → Get Template ID');
                console.log('4. Get Public Key from Account settings');
                console.log('5. Update credentials in assets/js/script.js (lines 266-268)');
                console.log('%c📖 See EMAILJS_SETUP.md for detailed instructions', 'color: #10b981; font-size: 12px;');
            }
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    });
}

// ============================================
// Parallax Effect for Hero Section
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroBackground = document.querySelector('.hero-background');
    
    if (hero && heroContent) {
        // Subtle parallax effect
        if (scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = Math.max(0, 1 - (scrolled / 600));
        }
    }
    
    // Parallax for background orbs
    if (heroBackground) {
        const orbs = heroBackground.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.2 + (index * 0.1);
            orb.style.transform = `translate(${scrolled * speed * 0.1}px, ${scrolled * speed * 0.1}px)`;
        });
    }
});

// ============================================
// Logo Click to Scroll to Top
// ============================================

const logo = document.getElementById('logo');
if (logo) {
    logo.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// Resume Modal Functionality
// ============================================

const resumeModal = document.getElementById('resume-modal');
const resumeCloseBtn = document.getElementById('resume-close-btn');
const resumeDownloadBtn = document.getElementById('resume-download-btn');
const resumeModalOverlay = document.querySelector('.resume-modal-overlay');

// Open resume modal
if (downloadCvBtn) {
    downloadCvBtn.addEventListener('click', () => {
        if (resumeModal) {
            resumeModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    });
}

// Close resume modal
if (resumeCloseBtn) {
    resumeCloseBtn.addEventListener('click', () => {
        closeResumeModal();
    });
}

if (resumeModalOverlay) {
    resumeModalOverlay.addEventListener('click', () => {
        closeResumeModal();
    });
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && resumeModal && resumeModal.classList.contains('active')) {
        closeResumeModal();
    }
});

function closeResumeModal() {
    if (resumeModal) {
        resumeModal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Download resume from modal
if (resumeDownloadBtn) {
    resumeDownloadBtn.addEventListener('click', () => {
        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = 'Resume.pdf';
        link.download = 'Mubasshir_Ahmed_Arnab_Resume.pdf';
        
        // Append to body, click, and remove
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Visual feedback
        resumeDownloadBtn.innerHTML = '<i class="fas fa-check"></i> Downloaded!';
        resumeDownloadBtn.style.background = 'var(--gradient-2)';
        
        setTimeout(() => {
            resumeDownloadBtn.innerHTML = '<i class="fas fa-download"></i> Download';
            resumeDownloadBtn.style.background = '';
        }, 2000);
    });
}

// ============================================
// Initialize on Page Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Typewriter Animation Enhancement - Ensure full name is shown
    const heroName = document.querySelector('.hero-name.typewriter');
    if (heroName) {
        // Store the original text
        const fullName = heroName.textContent.trim();
        const charCount = fullName.length;
        
        // Temporarily show the element to measure its natural width
        heroName.style.width = 'auto';
        heroName.style.visibility = 'hidden';
        heroName.style.display = 'inline-block';
        
        // Force a reflow to get the actual width
        void heroName.offsetWidth; // Trigger reflow
        const fullWidth = heroName.offsetWidth;
        
        // Now set it up for animation
        heroName.style.visibility = 'visible';
        heroName.style.width = '0px';
        heroName.style.whiteSpace = 'nowrap';
        heroName.style.overflow = 'hidden';
        
        // Create a custom keyframe animation with the exact width
        const style = document.createElement('style');
        style.textContent = `
            @keyframes typing-${charCount} {
                from {
                    width: 0px;
                }
                to {
                    width: ${fullWidth}px;
                }
            }
        `;
        document.head.appendChild(style);
        
        // Use more steps to ensure all characters are revealed
        const steps = Math.max(charCount * 2, 50);
        const duration = 4;
        
        // Update animation with the custom keyframe
        heroName.style.animation = `typing-${charCount} ${duration}s steps(${steps}, end) forwards, blink-caret 0.75s step-end infinite`;
    }
    
    // Load projects
    loadProjects();
    
    // Set initial active nav link
    updateActiveNavLink();
    
    // Add smooth scroll polyfill for older browsers (optional)
    if (!('scrollBehavior' in document.documentElement.style)) {
        // You could add a polyfill here if needed
    }
});

// ============================================
// Performance Optimization: Lazy Loading Images
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Add Loading Animation (Optional)
// ============================================

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ============================================
// Keyboard Navigation Support
// ============================================

document.addEventListener('keydown', (e) => {
    // Close mobile menu on Escape key
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// Console Message (Optional)
// ============================================

console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #6366f1; font-size: 16px; font-weight: bold;');
console.log('%cWant to see the code? Check out the repository!', 'color: #8b5cf6; font-size: 12px;');

