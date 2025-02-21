# Getting Started with PixiJS

Welcome to the **Getting Started** guide for PixiJS! This document will help you set up a basic PixiJS project and render your first scene.

## 📦 Installation

You can install PixiJS in multiple ways:

### 1️⃣ Using npm (Recommended)
If you're working in a JavaScript or TypeScript project, you can install PixiJS via npm:
```sh
npm install pixi.js
```

### 2️⃣ Using a CDN
For quick testing, you can include PixiJS via a CDN:
```html
<script src="https://pixijs.download/release/pixi.min.js"></script>
```

## 🎨 Creating a Basic PixiJS Application

Now, let's create a basic PixiJS application that renders a blue background.

```js
// Import PixiJS
import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800, // Canvas width
    height: 600, // Canvas height
    backgroundColor: 0x1099bb, // Background color
});

document.body.appendChild(app.view); // Add the canvas to the document
```

## 🖼 Adding a Sprite

Let's load an image and display it as a sprite.

```js
// Load a texture from an image URL
const texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png');

// Create a sprite using the texture
const bunny = new PIXI.Sprite(texture);

// Position the sprite at the center of the canvas
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

// Set the anchor point to center the sprite properly
bunny.anchor.set(0.5);

// Add the sprite to the stage
app.stage.addChild(bunny);
```

## ✅ Running the Code

To run the above code:
1. Create an `index.html` file.
2. Add the CDN script or bundle your JS file.
3. Open the file in a browser, and you should see the blue canvas with a bunny sprite in the center!

You are now ready to explore more features of PixiJS. 🚀

