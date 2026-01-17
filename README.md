# PixelFrame - Professional Photography Studio Website

##  Project Overview

PixelFrame is a modern, responsive photography studio website featuring interactive galleries, a pricing calculator, and contact forms. Built with HTML, CSS, and JavaScript.

##  Features

- **Responsive Navigation** - Fixed navbar with mobile hamburger menu
- **Hero Section** - Eye-catching landing with smooth animations
- **Services Showcase** - 7 photography services with pricing
- **Portfolio Gallery** - Filterable gallery (Wedding, Portrait, Product, Event)
- **Cost Calculator** - Interactive pricing tool with quantity controls
- **Contact Form** - Multi-field form with file upload
- **Fully Responsive** - Optimized for all devices

##  Design

**Color Scheme:**
- Deep Purple (#6366F1)
- Vibrant Pink (#EC4899)
- Electric Orange (#F97316)
- Cyber Blue (#06B6D4)
- Neon Green (#10B981)

**Typography:**
- Headings: Playfair Display
- Body: Inter

##  File Structure

```
PixelFrame/
├── index.html          # Main HTML structure
├── style.css           # Complete stylesheet
├── app.js              # JavaScript functionality
└── README.md           # Documentation
```

##  Getting Started

1. **Download the project files**
2. **Open `index.html` in your browser**
3. **Or use Live Server** (VS Code extension) for better development experience

That's it! No installation or build process required.

##  Responsive Design

- **Desktop:** > 768px (full layout)
- **Mobile/Tablet:** ≤ 768px (stacked layout)

### Mobile Features
- Hamburger menu
- Vertical calculator layout
- Touch-friendly buttons
- Optimized padding and spacing

##  Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --deep-purple: #6366F1;
    --vibrant-pink: #EC4899;
    /* Modify these values */
}
```

### Update Services
1. Edit service cards in HTML
2. Update calculator items with matching prices
3. Change images by replacing Unsplash URLs

### Modify Contact Info
Update details in the Contact Section:
```html
<strong>Address</strong><br>
Your Address Here
```

##  Key Functionality

**JavaScript handles:**
- Navigation toggle
- Smooth scrolling
- Gallery filtering
- Calculator logic
- Form validation
- File upload
- Quote download

**Make sure `app.js` is linked in HTML!**

##  Dependencies

- **Google Fonts** - Playfair Display, Inter
- **Font Awesome 6.4.0** - Icons
- **Unsplash** - Stock images (can be replaced)

##  Common Issues

**Calculator not responsive?**
- Clear cache and reload
- Verify responsive CSS is applied

**Images not loading?**
- Check internet connection
- Replace with local images if needed

**Menu not working?**
- Ensure `app.js` is properly linked
- Check browser console for errors

##  Browser Support

> Chrome, Firefox, Safari, Edge (latest versions)  
> Mobile browsers (iOS Safari, Chrome Mobile)

##  Update Your Details

Don't forget to replace:
- Contact information (address, phone, email)
- Social media links
- Business name and branding
- Service prices
- Images with your own photography

##  Future Ideas

- Lightbox for gallery
- Backend integration
- Client testimonials
- Booking system
- Blog section
- Instagram feed

---

**Version:** 1.0  
**Built with:** HTML5, CSS3, Vanilla JavaScript  
**License:** Free to use and modify

For support: info@pixelframe.com