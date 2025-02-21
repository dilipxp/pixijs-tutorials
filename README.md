# PixiJS Tutorials

Welcome to the **PixiJS Tutorials** repository! This repository is designed to help you quickly learn the basics of **PixiJS**, a powerful 2D rendering engine for creating interactive graphics, games, and applications.

## 📌 About This Repository
This repository provides:
- **Step-by-step documentation** for understanding PixiJS fundamentals.
- **Code examples** demonstrating key concepts.
- **Interactive demos** to see PixiJS in action.

## 📂 Folder Structure
```
pixijs-tutorials/
│── examples/               # Code examples for different concepts  
│   ├── basic-setup/        # Setting up PixiJS  
│   ├── sprites/            # Loading and rendering sprites  
│   ├── animations/         # Basic animations with ticker  
│   ├── interactivity/      # Handling user interactions  
│   ├── particles/          # Particle effects  
│   ├── filters/            # Using PixiJS filters  
│   ├── text/               # Rendering text  
│   ├── scenes/             # Scene management  
│   ├── physics/            # Integrating with physics libraries  
│   ├── slot-game/          # A mini slot game example  
│── assets/                 # Images, sprites, and other assets  
│── docs/                   # Markdown-based documentation  
│   ├── getting-started.md  # Introduction and setup guide  
│   ├── rendering.md        # Understanding rendering in PixiJS  
│   ├── sprites.md          # Working with sprites  
│   ├── animations.md       # Creating animations  
│   ├── interactivity.md    # Making interactive elements  
│   ├── advanced.md         # Advanced topics like shaders  
│   ├── faq.md              # Frequently asked questions  
│── src/                    # Source code for in-depth examples  
│── .gitignore              # Ignoring unnecessary files  
│── README.md               # Overview of the repository  
│── package.json            # Dependencies if needed  
│── LICENSE                 # Open-source license  
```

## 🚀 Getting Started
### 1️⃣ Install PixiJS
You can install PixiJS via npm:
```sh
npm install pixi.js
```
Or include it via CDN:
```html
<script src="https://pixijs.download/release/pixi.min.js"></script>
```

### 2️⃣ Create a Basic PixiJS Application
```js
// Import PixiJS
import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);
```

## 📖 Learn PixiJS
Explore the documentation and examples inside the `docs/` and `examples/` folders.

## 📜 License
This project is licensed under the MIT License.

