# E-commerce Shopping Cart Application

A modern, responsive e-commerce shopping cart application built with HTML, CSS, and JavaScript. Features a dynamic shopping cart system with promotional codes, item management, and a professional About Us page.

## 🚀 Features

### Shopping Cart
- ✅ **Dynamic Cart Management**: Add, remove, and update item quantities
- ✅ **Local Storage**: Cart data persists across browser sessions
- ✅ **Promotional Codes**: Support for percentage and fixed discount codes
- ✅ **Real-time Calculations**: Automatic subtotal, tax, and shipping calculations
- ✅ **Responsive Design**: Works seamlessly on desktop and mobile devices
- ✅ **Toast Notifications**: User-friendly feedback for all actions
- ✅ **Empty Cart Handling**: Graceful handling of empty cart states

### About Us Page
- ✅ **Modern Design**: Gradient backgrounds with glassmorphism effects
- ✅ **Animated Statistics**: Counter animations for company achievements
- ✅ **Team Profiles**: Interactive team member showcase
- ✅ **Company Values**: Professional presentation of core values
- ✅ **Social Media Integration**: Links to social platforms
- ✅ **Scroll Animations**: Smooth fade-in effects on scroll

## 📁 Project Structure

```
WEBDEV/
├── index.html              # Main homepage
├── cart.html              # Shopping cart page
├── aboutus.html           # About us page
├── checkout.html          # Checkout page
├── product1-details.html  # Product 1 details page
├── product2-details.html  # Product 2 details page
├── product3-details.html  # Product 3 details page
├── products.html          # Products listing page
├── profile.html           # User profile page
├── signin.html            # Sign in page
├── css/                   # CSS stylesheets directory
├── images/                # Images directory
│   ├── gradient.png       # Gradient background
│   ├── image.png          # General images
│   └── Screenshot*.png    # Various screenshots
├── node_modules/          # Node.js dependencies
├── .env                   # Environment variables
├── db.js                  # Database configuration
├── package-lock.json      # Package lock file
├── package.json           # Package configuration
└── README.md              # This file
```

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/WEBDEV.git
   cd WEBDEV
   ```

2. **Install dependencies** (if using Node.js features)
   ```bash
   npm install
   ```

3. **Open in browser**
   - Simply open `index.html` in your web browser
   - For local development, use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using live-server (if installed)
   live-server
   ```

4. **Access the application**
   - Open `http://localhost:8000` in your browser

## 🎯 Usage

### Shopping Cart Features

#### Adding Items
The cart automatically loads with sample data for demonstration. In a real application, items would be added via product pages.

#### Managing Cart Items
- **Increase/Decrease Quantity**: Use the + and - buttons
- **Remove Items**: Click the × button on any item
- **Clear Cart**: Use the "Clear Cart" button to remove all items

#### Applying Promotional Codes
Available promotional codes:
- `SAVE10` - 10% discount
- `SAVE100` - ₹100 fixed discount
- `WELCOME` - 15% discount
- `FIRST50` - ₹50 fixed discount

#### Checkout Process
1. Ensure cart has items
2. Apply promotional code (optional)
3. Click "Proceed to Checkout"
4. System will redirect to checkout page

### About Us Page Features

#### Interactive Elements
- **Scroll Animations**: Content fades in as you scroll
- **Counter Animations**: Statistics animate when they come into view
- **Team Member Cards**: Hover effects on team member profiles
- **Responsive Navigation**: Works on all device sizes

## 🔧 Configuration

### Cart Settings
Modify these values in `cart.js`:

```javascript
// Tax rate (default: 18% GST)
const tax = Math.round(subtotal * 0.18);

// Free shipping threshold
const shipping = subtotal > 1000 ? 0 : 99;

// Promotional codes
const validCodes = {
    'SAVE10': { discount: 0.1, type: 'percentage' },
    'SAVE100': { discount: 100, type: 'fixed' },
    // Add more codes here
};
```

### About Us Content
Update company information in `aboutus.html`:

```html
<!-- Company name -->
<a href="#" class="logo">YourBrand</a>

<!-- Team members -->
<div class="member-name">Jane Smith</div>
<div class="member-role">Chief Executive Officer</div>

<!-- Statistics -->
<div class="stat-number">15+</div>
<div class="stat-text">Years in Business</div>
```

### Navigation Links
Update navigation in all HTML files to match your structure:

```html
<nav class="navbar">
    <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="aboutus.html">About</a></li>
        <li><a href="cart.html">Cart</a></li>
        <li><a href="profile.html">Profile</a></li>
        <li><a href="signin.html">Sign In</a></li>
    </ul>
</nav>
```

## 🎨 Customization

### Color Scheme
The application uses CSS custom properties for easy theming:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ffd700;
    --text-color: #333;
    --background-color: #f8f9fa;
}
```

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 📱 Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 API Integration

To integrate with a backend API, modify these functions in `cart.js`:

```javascript
// Load cart from API
async loadCart() {
    const response = await fetch('/api/cart');
    this.cart = await response.json();
}

// Save cart to API
async saveCart() {
    await fetch('/api/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.cart)
    });
}

// Process checkout
async checkout() {
    const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            cart: this.cart,
            discount: this.discount
        })
    });
    const result = await response.json();
    window.location.href = result.checkoutUrl;
}
```

## 🚀 Deployment

### GitHub Pages
1. Push your code to GitHub
2. Go to repository Settings
3. Scroll to Pages section
4. Select source branch (main/master)
5. Your site will be available at `https://github.com/ShubhDulwani/zipcart-official`

### Netlify
1. Connect your GitHub repository
2. Set build command: (leave empty for static site)
3. Set publish directory: `/` (root)
4. Deploy

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically detect it as a static site
3. Deploy

## 🐛 Troubleshooting

### Common Issues

**Cart not saving items**
- Check if localStorage is enabled in browser
- Verify no JavaScript errors in console
- Ensure you're running from a local server (not file:// protocol)

**Checkout redirect not working**
- Ensure `checkout.html` file exists in the same directory as `cart.html`
- Check file path in cart.js checkout function
- Verify no popup blockers preventing redirect
- Test with: `window.location.href = 'checkout.html'`

**About page not loading**
- Check if file is named `aboutus.html` (not `about.html`)
- Verify all navigation links point to correct filenames
- Clear browser cache and try again

**Product pages not accessible**
- Verify product detail files exist (`product1-details.html`, etc.)
- Check navigation links in `products.html`
- Ensure proper file naming conventions

**Images not loading**
- Check if images exist in the `images/` directory
- Verify image paths in HTML/CSS files
- Ensure image file extensions match (png, jpg, etc.)

**Node.js related issues**
- Run `npm install` to install dependencies
- Check if `package.json` has correct scripts
- Verify `db.js` configuration for database connections

**Mobile responsiveness issues**
- Check viewport meta tag is present
- Verify CSS media queries are working
- Test on actual devices, not just browser dev tools

## 📈 Performance Optimization

### Implemented Optimizations
- **Lazy Loading**: Images load as needed
- **Minified Assets**: CSS and JS are optimized
- **Caching**: Local storage for cart data
- **Responsive Images**: Appropriate sizes for different devices

### Further Improvements
- Implement service worker for offline functionality
- Add image compression
- Use CSS Grid and Flexbox for better layouts
- Implement virtual scrolling for large product lists

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### File Naming Conventions
- Use lowercase letters and hyphens for HTML files
- Keep consistent naming across all pages
- Match navigation links with actual file names

### Code Structure
- Keep CSS in separate files when possible
- Use semantic HTML elements
- Follow consistent JavaScript patterns

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [ShubhDulwani](https://github.com/ShubhDulwani)
- Email: shubhdulwani@gmail.com
- LinkedIn: [Shubh Dulwani](https://www.linkedin.com/in/shubh-dulwani-902227268/)

## 🙏 Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- CSS Tricks for responsive design inspiration
- MDN Web Docs for JavaScript references

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/yourusername/ecommerce-cart/issues) section
2. Create a new issue if your problem isn't listed
3. Provide detailed information about the problem
4. Include browser version and error messages

---

**Happy Shopping! 🛒**