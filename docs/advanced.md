# Advanced Topics in PixiJS

This section covers advanced PixiJS topics like shaders, masks, and performance optimization.

## 🎨 Using Shaders (Filters)
PixiJS allows custom WebGL shaders using `PIXI.Filter`. You can apply filters to create effects like blur, color adjustments, and custom visuals.

### Example: Applying a Blur Filter
```js
import * as PIXI from 'pixi.js';

const app = new PIXI.Application({ width: 800, height: 600, backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

const texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png');
const bunny = new PIXI.Sprite(texture);
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;
bunny.anchor.set(0.5);

// Apply a blur filter
const blurFilter = new PIXI.BlurFilter(5);
bunny.filters = [blurFilter];

app.stage.addChild(bunny);
```

## 🖼 Using Masks and Clipping
Masks allow you to hide parts of an object using a shape or an image.

### Example: Circular Mask
```js
const mask = new PIXI.Graphics();
mask.beginFill(0xffffff);
mask.drawCircle(0, 0, 50);
mask.endFill();
mask.x = bunny.x;
mask.y = bunny.y;

bunny.mask = mask;
app.stage.addChild(mask);
```

## ⚡ Performance Optimization Tips
### 1️⃣ Use Sprite Sheets
Instead of loading multiple images, use sprite sheets to reduce draw calls and improve performance.

### 2️⃣ Enable GPU Acceleration
Use `PIXI.settings.PREFER_ENV = PIXI.ENV.WEBGL2;` to ensure WebGL2 is used when available.

### 3️⃣ Optimize Texture Rendering
- Set `sprite.cacheAsBitmap = true` for static objects.
- Use lower-resolution textures for better performance.

### 4️⃣ Avoid Overdraw
Limit the number of overlapping objects to reduce GPU workload.

### 5️⃣ Use Offscreen Rendering
Render complex scenes offscreen using `RenderTexture` and update only when necessary.

## 🎯 Summary
- **Shaders** (filters) allow WebGL effects like blur and color adjustments.
- **Masks** help clip objects to a defined area.
- **Performance optimizations** improve rendering speed.

With these advanced techniques, you can create high-performance PixiJS applications! 🚀

