# Coaches Classroom

![Coaches Classroom](https://via.placeholder.com/800x400?text=Coaches+Classroom)

A modern web application designed to help basketball coaches organize, analyze, and share their playbooks. Built with React and Tailwind CSS, featuring a responsive dark mode interface and comprehensive play management system.

## 🏀 Features

- **Interactive Play Library**
  - Categorized sections for Offense, Defense, SLOB, and BLOB plays
  - Video demonstrations with detailed explanations
  - Easy-to-navigate play categories

- **Responsive Design**
  - Mobile-first approach
  - Adaptive navigation with hamburger menu
  - Optimized viewing experience across all devices

- **Modern UI/UX**
  - Dark mode interface
  - Smooth transitions and animations
  - Intuitive navigation system
  - Clean and professional layout

## 🛠️ Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- Headless UI
- Lucide React Icons

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.0.0 or higher)
- npm (v7.0.0 or higher)

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/coaches-classroom.git
cd coaches-classroom
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
coaches-classroom/
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx
│   │   ├── PlayTitle.jsx
│   │   ├── VideoPlayer.jsx
│   │   ├── PlayDescription.jsx
│   │   └── PlayCard.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── More.jsx
│   │   ├── offense/
│   │   ├── defense/
│   │   ├── slob/
│   │   └── blob/
│   ├── data/              # Data and constants
│   │   └── playsData.js
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static assets
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Configuration

### Tailwind CSS

The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b00',
        background: '#1a1a1a',
        surface: '#2a2a2a',
      }
    },
  },
  plugins: [],
}
```

## 📱 Responsive Design Breakpoints

- Mobile: 0-767px
- Tablet: 768px-1023px
- Desktop: 1024px and above

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests (when implemented)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Headless UI](https://headlessui.dev/)
- [Lucide Icons](https://lucide.dev/)

## 📞 Support

For support, email support@coachesclassroom.com or open an issue in the GitHub repository.

---

Made with ❤️ by [Your Name/Team]
