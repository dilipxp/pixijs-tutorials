# Understanding Rendering in PixiJS

PixiJS is a powerful 2D rendering engine that uses WebGL to efficiently draw graphics and images on the screen. This guide explains how rendering works and how to optimize your scene.

## 🎨 How Rendering Works

1. **PixiJS creates a WebGL context**
   - When you create a `PIXI.Application`, it initializes WebGL (or falls back to Canvas if WebGL is unavailable).
   
2. **The Scene Graph**
   - PixiJS organizes all objects (sprites, graphics, containers) into a tree-like structure called the **scene graph**.
   
3. **Rendering the Scene**
   - Each frame, PixiJS updates and redraws objects based on their properties (position, scale, rotation, etc.).
   - The `app.renderer.render(app.stage)` method handles this automatically.

## 🚀 Setting Up the Renderer

```js
import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800,  // Canvas width
    height: 600, // Canvas height
    backgroundColor: 0x1099bb, // Background color
    antialias: true, // Smooth edges
    resolution: window.devicePixelRatio || 1, // High-resolution support
});

document.body.appendChild(app.view); // Add canvas to the document
```

## 📌 Understanding the Stage

The **stage** is the root container that holds all elements in the scene. Every object (sprites, graphics, text) must be added to `app.stage` to be visible.

```js
const container = new PIXI.Container(); // Create a new container
app.stage.addChild(container); // Add it to the stage
```

## 🔄 Continuous Rendering

PixiJS uses a **ticker** to automatically update the scene on every frame.

```js
app.ticker.add(() => {
    console.log("Rendering frame...");
});
```

## 🎯 Optimizing Rendering Performance

- **Use `requestAnimationFrame`** (handled by PixiJS automatically).
- **Batch similar objects together** using `PIXI.Container()`.
- **Use texture atlases** instead of multiple image files.
- **Set `interactive = false`** on non-interactive objects to improve performance.
- **Avoid unnecessary redraws** by enabling `app.renderer.plugins.interaction.moveWhenInside = true` for mouse events.

## ✅ Summary

- Rendering in PixiJS is automatic using `app.ticker`.
- The scene is updated based on transformations (position, rotation, scale, etc.).
- Optimizations can significantly improve performance for complex scenes.

Now that you understand rendering, you can move on to working with **sprites** and other display objects! 🚀

