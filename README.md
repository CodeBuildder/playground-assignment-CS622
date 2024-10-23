Here’s the updated README with your **deployment link** included.

---

# **Interactive Particle Visualization with React and Vite**

This project demonstrates a **highly customizable particle visualization** using **React** and the `react-tsparticles` library, bundled with **Vite** for fast development. It provides users with real-time control over the particle configuration, such as **color, shape, speed, and count**. The particle system reacts to mouse interactions like **hover and click** for enhanced interactivity.

---

## **Live Demo**

Try out the **interactive particle visualization** here:  
👉 [Particle Visualization Demo](https://particlejssetup.netlify.app/)

---

## **Features**

- **Dynamic Particle Shapes**: Choose between **circle, square, and triangle** particles.
- **Real-time Color Picker**: Use a color picker to change particle colors dynamically.
- **Adjustable Speed & Size**: Control particle speed and size through input sliders.
- **Line Connections**: Toggle connections between particles for aesthetic effects.
- **Interactivity**:
  - **Hover Repulse**: Particles move away from the cursor.
  - **Click to Add Particles**: Generates more particles on canvas click.
- **3D-Like Motion**: Particles simulate depth with attractive forces and rotation.

---

## **Technology Stack**

- **Vite**: Modern frontend build tool that provides fast development and lightning-fast HMR (Hot Module Replacement).
- **React**: A JavaScript library for building user interfaces.
- **react-tsparticles**: A React wrapper for the `tsparticles` library, used to create particle-based effects.
- **react-color**: A color picker component to dynamically update particle colors.

---

## **How to Set Up and Run**

### 1. **Install Vite and Create the Project**

Use the following command to set up a Vite project with React:

```bash
yarn create vite
```

Select **React** when prompted. Then, navigate into your project directory:

```bash
cd your-project-name
```

### 2. **Install Required Packages**

Install the required libraries for this project:

```bash
yarn add react-tsparticles tsparticles-engine tsparticles-shape-circle tsparticles-move-parallax tsparticles-interaction-external-grab tsparticles-interaction-external-repulse react-color
```

### 3. **Configure Vite**

Make sure your **`vite.config.js`** is set up to work with React. It should look something like this:

```javascript
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### 4. **Run the Development Server**

Once everything is installed, run the Vite development server:

```bash
yarn dev
```

You should now see the Vite server running, with output similar to:

```
  VITE v4.0.0  ready in 300ms

  ➜  Local:   http://localhost:5173/
```

Open the link in your browser to view the interactive particle visualization.

---

## **How to Use the Controls**

1. **Number of Particles**: Adjust the particle count to increase or decrease density.
2. **Particle Speed**: Control how fast the particles move across the canvas.
3. **Particle Shape**: Choose from `circle`, `square`, or `triangle` in the dropdown.
4. **Color Picker**: Select any color dynamically using the color picker.
5. **Particle Size**: Modify the size of particles with an input slider.
6. **Line Connections**: Use the checkbox to toggle line connections between particles.

---

## **File Structure Overview**

```
/src
 ├── App.jsx            # Main component rendering the ParticleComponent and controls
 ├── ParticleComponent.js  # Component containing the particle logic and configuration
 ├── App.css            # CSS styling for the app and controls
 └── main.jsx           # Entry point for the Vite project
```

---

## **Customization Options**

- **Add More Shapes**: You can extend the shape options by modifying the logic in `ParticleComponent.js` (e.g., adding polygons).
- **Backgrounds**: Change the background color or image to match your aesthetic.
- **Additional Controls**: Add sliders or switches for more interactive features like gravity, particle trails, or scroll-based animation.

---

## **Conclusion**

This project is a great starting point for adding **custom particle effects** to your applications. Thanks to **Vite**, the development experience is fast and seamless, making it ideal for building interactive UIs. With flexible controls and modular components, this setup is perfect for:

- **Personal websites and portfolios**
- **Creative visualizations**
- **Interactive dashboards and user interfaces**

You can further extend this project by adding new shapes, integrating additional libraries, or connecting the particle behavior to external events (like page scroll or time-based triggers).

---

Feel free to explore the live demo at [Particle Visualization Demo](https://particlejssetup.netlify.app/) and customize it to suit your needs! 🎉

---

Let me know if you need any more changes!
