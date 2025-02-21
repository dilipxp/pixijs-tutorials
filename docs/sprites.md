# Working with Sprites in PixiJS

Sprites are one of the most common objects in PixiJS. They represent images or textures that can be displayed and manipulated on the screen.

## 🎨 What is a Sprite?
A **sprite** in PixiJS is an object that holds a texture (image) and can be positioned, rotated, scaled, and more.

## 🖼 Creating a Basic Sprite

```js
import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

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

## 🔄 Transforming Sprites
Sprites can be moved, rotated, and scaled.

```js
bunny.rotation = Math.PI / 4; // Rotates 45 degrees
bunny.scale.set(1.5); // Increases size by 1.5x
bunny.alpha = 0.8; // Makes it slightly transparent
```

## 🚀 Making Sprites Interactive

```js
bunny.interactive = true; // Enable interactivity
bunny.buttonMode = true; // Show hand cursor on hover

bunny.on('pointerdown', () => {
    bunny.scale.set(2); // Scale up on click
});
```

## 🎯 Optimizing Sprite Performance
- Use **texture atlases** to load multiple images efficiently.
- Use `bunny.anchor.set(0.5)` to simplify positioning.
- Avoid unnecessary texture loads by reusing textures.

## ✅ Summary
- **Sprites display images/textures** in PixiJS.
- **They can be transformed** (moved, rotated, scaled, etc.).
- **They can be interactive** and respond to user input.

Now, you're ready to animate sprites! 🚀

