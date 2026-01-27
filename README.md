# 3D Developer Portfolio

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMOHAN-MOORTHI%2FPortfolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is a premium, immersive 3D portfolio website built with React, Three.js, and Tailwind CSS. It features a modern "Cyber/Space" aesthetic with interactive 3D elements, glassmorphism UI, and smooth animations.

## 🚀 Key Features

*   **Immersive 3D Visuals**:
    *   **Hero Section**: Interactive Cyber Polyhedron with wireframe overlay.
    *   **Contact Section**: Layered Cyber Globe with atmospheric glow.
    *   **Tech Stack**: Floating interactive icons with gradient borders.
*   **Premium UI/UX**:
    *   **Glassmorphism Navbar**: Dynamic backdrop blur that adapts to scrolling.
    *   **Smart Navigation**: Active link highlighting and scroll-to-top functionality.
    *   **Custom Cursor**: Interactive spring-animated cursor.
    *   **Preloader**: Sleek typography reveal animation on load.
    *   **Reading Progress**: Top progress bar indicating scroll position.
*   **Interactivity**:
    *   **Dynamic Logo**: The navbar logo types itself out ("MOHAN P | Portfolio") for a unique branding effect.
    *   **Typewriter Effect**: Dynamic text typing in the hero section.
    *   **Confetti Celebration**: fun particle explosion on successful contact form submission.
    *   **Tilt Effects**: 3D tilt interactions on project and service cards.
*   **Responsive**: Fully optimized for Desktop, Tablet, and Mobile devices.

## 🛠 Tech Stack

*   **Frontend**: React, Vite
*   **Styling**: Tailwind CSS, Framer Motion
*   **3D Graphics**: Three.js, React Three Fiber, React Three Drei
*   **Icons**: Lucide React
*   **Utilities**: Maath, Canvas Confetti

## ⚙️ Setup & Customization

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Locally**:
    ```bash
    npm run dev
    ```

3.  **Update Content**:
    *   Edit `src/constants/index.js` to update text, links, projects, and experience data.
    *   Replace `public/PHOTO.jpg` with your own profile picture.

4.  **Resume/CV**:
    *   Place your resume PDF in the `public` folder.
    *   The current configured file is `MOHAN P_MCA 2023_RESUME.pdf`.
    *   If you change the file, update the `handleDownloadCV` function in `src/components/Navbar.jsx`.

5.  **Email Configuration**:
    *   The contact form currently calls a `confetti` animation on success.
    *   To integrate real email sending, we recommend using [EmailJS](https://www.emailjs.com/). Update the `handleSubmit` function in `src/components/Contact.jsx`.

## 📦 Deployment

This project is optimized for deployment on Vercel, Netlify, or GitHub Pages.

1.  **Build**:
    ```bash
    npm run build
    ```
2.  **Deploy**:
    *   **Vercel/Netlify**: Connect your GitHub repo and it will auto-detect the Vite settings.

## 🎨 Aesthetics

*   **Primary Color**: `#915EFF` (Purple)
*   **Background**: Dark Space Theme (`#050816`)
*   **Gradients**: `green-pink-gradient`, `violet-gradient`

---
*Created by Antigravity*
