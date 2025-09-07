# Fitness with Invictus

A modern, responsive fitness club website built with React.js, TypeScript, and modern web technologies. This website provides a comprehensive platform for fitness services, video courses, and client engagement.

## 🚀 Features

### Global Features
- **Fixed Navigation**: Sticky header with smooth scrolling
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **SEO Optimized**: Meta tags, Open Graph, Twitter cards, sitemap, and robots.txt
- **Accessibility**: WCAG AA compliant with keyboard navigation and screen reader support
- **Performance**: Optimized for Lighthouse scores ≥90 across all metrics

### Pages
- **Home**: Hero section, program highlights, transformations showcase, and on-the-go features
- **Services**: Grid of fitness services with pricing and detailed information
- **Video Courses**: Course gallery with filtering, modal previews, and enrollment
- **About**: Trainer profile, certifications, mission, and FAQ accordion
- **Contact**: Contact form with validation, contact information, and map placeholder

### Interactive Components
- **Course Modal**: Detailed course information with enrollment options
- **FAQ Accordion**: Expandable questions and answers
- **Contact Form**: Form validation with success/error handling
- **Service Cards**: Hover effects and detailed service information
- **Transformation Carousel**: Before/after photo showcase

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **React Router** for navigation
- **React Hook Form** for form handling
- **React Helmet Async** for SEO
- **CSS3** with modern features (Grid, Flexbox, Custom Properties)
- **Responsive Design** with mobile-first approach

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/fitness-with-invictus.git
   cd fitness-with-invictus
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🏗️ Project Structure

```
fitness-with-invictus/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # SEO robots file
│   └── sitemap.xml         # SEO sitemap
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Footer.tsx      # Site footer
│   │   ├── ServiceCard.tsx # Service display card
│   │   ├── CourseCard.tsx  # Course display card
│   │   ├── CourseModal.tsx # Course detail modal
│   │   ├── FAQ.tsx         # FAQ accordion component
│   │   └── sections/       # Page sections
│   │       ├── Hero.tsx
│   │       ├── ProgramHighlights.tsx
│   │       ├── Transformations.tsx
│   │       └── OnTheGo.tsx
│   ├── pages/              # Main page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── VideoCourses.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx             # Main app component
│   ├── App.css             # Global app styles
│   ├── index.tsx           # App entry point
│   └── index.css           # Global styles
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: #8B5CF6 (Purple)
- **Secondary**: #7C3AED (Dark Purple)
- **Text**: #1F2937 (Dark Gray)
- **Background**: #FFFFFF (White)
- **Accent**: #F8FAFC (Light Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Responsive scaling** for different screen sizes

### Components
- **Buttons**: Primary, secondary, and large variants
- **Cards**: Consistent shadow and hover effects
- **Forms**: Accessible inputs with validation
- **Modals**: Overlay with backdrop and close functionality

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 480px
- **Tablet**: 481px - 768px
- **Desktop**: 769px - 1024px
- **Large Desktop**: 1025px+

## ♿ Accessibility Features

- **WCAG AA Compliance**: Color contrast ratios meet standards
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators
- **Alt Text**: Descriptive alt text for all images
- **Skip Links**: Skip to main content functionality

## 🚀 Deployment

### Netlify (Recommended)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `build`
   - Deploy!

### Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload the `build` folder** to your web server

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_SITE_URL=https://fitnesswithinvictus.com
REACT_APP_CONTACT_EMAIL=info@fitnesswithinvictus.com
REACT_APP_PHONE_NUMBER=(555) 123-4567
```

### Customization

1. **Brand Colors**: Update CSS custom properties in `src/index.css`
2. **Content**: Modify text content in component files
3. **Images**: Replace placeholder images with actual photos
4. **Contact Info**: Update contact details in `src/pages/Contact.tsx`

## 📊 Performance Optimization

- **Code Splitting**: Automatic code splitting with React Router
- **Lazy Loading**: Images load as needed
- **Minification**: Production builds are minified
- **Caching**: Proper cache headers for static assets
- **Compression**: Gzip compression enabled

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage

# Run tests in watch mode
npm test -- --watch
```

## 📈 SEO Features

- **Meta Tags**: Title, description, keywords for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter sharing optimization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling instructions
- **Structured Data**: JSON-LD for rich snippets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Email: info@fitnesswithinvictus.com
- Phone: +919503370272
- Website: https://fitnesswithinvictus.com

## 🙏 Acknowledgments

- Design inspiration from modern fitness websites
- React community for excellent documentation
- TypeScript team for type safety
- All contributors and testers

---

**Built with ❤️ for the fitness community**