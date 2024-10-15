# stayIndulgent 🏨✨

[![Status](https://img.shields.io/badge/Status-Live-brightgreen)](https://booking-pcmm.onrender.com)
[![Platform](https://img.shields.io/badge/Platform-Render-blue)](https://render.com)
[![Runtime](https://img.shields.io/badge/Runtime-Node.js-informational)](https://nodejs.org)

**stayIndulgent** is a premium, full-stack luxury accommodations platform built to deliver an elegant, seamless booking experience. Featuring deep third-party API integrations, live client-support capabilities, and automated transactional infrastructure, stayIndulgent bridges sophisticated backend logic with a beautiful aesthetic optimized for high-output environments.

---

## 🚀 Live Demo

Experience the live application hosted on Render: **[stay-indulgent.onrender.com](https://booking-pcmm.onrender.com/listings)**

---

## ✨ Features

*   🏠 **Dynamic CRUD Listings:** Seamlessly create, read, update, and delete luxurious property listings with localized pricing constraints.
*   🗺️ **Interactive Leaflet Mapping:** Visualize stay locations dynamically using high-fidelity rendering on an interactive map coordinate system.
*   🌦️ **Real-Time Weather Engine:** Fetch dynamic climate conditions and real-time updates directly at your travel destinations via automated API queries.
*   🔒 **Robust Authentication:** Secure user registration, state persistence, and login flows equipped with strict access control.
*   📧 **Automated Transactional Email:** Instant booking confirmations delivered securely to user inboxes using secure SMTP relays.
*   ⭐ **Reviews & Ratings Engine:** A complete feedback loop enabling users to rate properties and leave structured reviews.
*   💬 **Live Chat Concierge:** Integrated real-time customer support overlay for immediate on-page user assistance.
*   🎨 **Premium Dark Aesthetics:** Fully styled layout optimized for a premium, modern user interface.

---

## 🛠️ System Architecture & Stack

### **Frontend Engine**
*   **Templating:** EJS (Embedded JavaScript templates) for dynamic, server-side HTML rendering.
*   **Styling & Layout:** Bootstrap 5, Custom CSS3 modules, and Google Fonts (*Plus Jakarta Sans*).
*   **Interactivity & Motion:** GSAP (GreenSock Animation Platform) and AOS (Animate on Scroll) for smooth contextual transitions.

### **Backend Framework**
*   **Runtime Environments:** Node.js, Express.js core architecture.
*   **Database Management:** MongoDB Cloud Atlas managed cluster utilizing Mongoose ODM schemas.

### **Integrated APIs & Microservices**
*   **Mapping:** Leaflet.js open-source map tiles.
*   **Weather Data:** OpenWeather API endpoints.
*   **Communication:** Nodemailer utilizing encrypted App Password relays.
*   **Live Chat Operations:** Tawk.to asynchronous browser tracking widget.

---

## 🗂️ Project Repository Structure

```text
BOOKING_SYSTEM/
│
└── book/                    # Main Application Root
    ├── controllers/         # Express Route Logic Handlers
    ├── init/                # Database Seeding Utility Scripts (data.js, index.js)
    ├── Models/              # Mongoose Object Data Schemas (Listing, Review, User)
    ├── public/              # Client-Side Static Assets
    │   ├── css/             # Custom Stylesheets (style.css, book.css, rating.css)
    │   └── js/              # Client Scripting (map.js, script.js)
    ├── routes/              # Express Router Midpoints
    ├── utils/               # Custom Middleware & Error Handlers
    ├── views/               # EJS Structural Core Layout Templates
    │   ├── includes/        # UI Fragments (navbar.ejs, footer.ejs, flash.ejs)
    │   └── layouts/         # Master App Layout (boilerplate.ejs)
    ├── app.js               # Primary Application Server Entry point
    └── package.json         # Node System Dependencies Manifest