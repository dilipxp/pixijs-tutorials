# Creating Animations in PixiJS

PixiJS provides a powerful way to animate sprites and other objects using the built-in ticker and external animation libraries.

## 🎭 Using the Ticker for Animation
The **ticker** is the main loop that updates objects on each frame.

### 🔄 Basic Animation Example
```js
import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

// Create a sprite
const texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png');
const bunny = new PIXI.Sprite(texture);

bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;
bunny.anchor.set(0.5);
app.stage.addChild(bunny);

// Add a function to the ticker (runs 60 times per second by default)
app.ticker.add((delta) => {
    bunny.rotation += 0.05 * delta; // Rotate sprite
});
```

## 🚀 Moving a Sprite
```js
app.ticker.add(() => {
    bunny.x += 2; // Move right
    if (bunny.x > app.renderer.width) bunny.x = 0; // Reset position
});
```

## 🕹 Using Tweening for Smooth Animation
For more control, use **GSAP** (GreenSock Animation Platform):

```sh
npm install gsap
```

```js
import gsap from 'gsap';

// Animate the sprite position
gsap.to(bunny, { x: 700, y: 500, duration: 2, repeat: -1, yoyo: true });
```

## 🎯 Optimizing Animations
- Use **app.ticker** instead of `setInterval` for smooth performance.
- Keep animations inside **off-screen containers** when not in view.
- Use **tweening libraries** for complex animations.

## ✅ Summary
- **Ticker updates objects continuously**.
- **Use delta timing** for consistent animations.
- **Tweening libraries like GSAP** offer smooth animations.

Now, you're ready to make interactive animations! 🚀

