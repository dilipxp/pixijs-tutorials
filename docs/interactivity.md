# Handling Interactivity in PixiJS

PixiJS allows you to make sprites and other objects interactive, responding to user inputs like clicks, taps, and pointer events.

## 🖱 Enabling Interactivity
To make an object interactive, set `interactive = true` and add event listeners.

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

// Enable interactivity
bunny.interactive = true;
bunny.buttonMode = true; // Changes cursor to pointer

// Add event listeners
bunny.on('pointerdown', () => {
    bunny.scale.set(1.5); // Enlarge on click
});

app.stage.addChild(bunny);
```

## 🔄 Common Interaction Events
PixiJS supports various pointer events:

| Event Name       | Description                      |
|-----------------|----------------------------------|
| `pointerdown`   | Fires when clicked/touched      |
| `pointerup`     | Fires when released             |
| `pointerupoutside` | Fires if released outside    |
| `pointerover`   | Fires when hovered over         |
| `pointerout`    | Fires when hovered out          |
| `pointermove`   | Fires when moved over           |

### Example: Drag and Drop
```js
bunny.on('pointerdown', (event) => {
    bunny.data = event.data;
    bunny.dragging = true;
});

bunny.on('pointerup', () => {
    bunny.dragging = false;
    bunny.data = null;
});

bunny.on('pointermove', () => {
    if (bunny.dragging) {
        const newPosition = bunny.data.getLocalPosition(bunny.parent);
        bunny.x = newPosition.x;
        bunny.y = newPosition.y;
    }
});
```

## 🎯 Optimizing Interactivity
- Use **buttonMode = true** for better UX on clickable objects.
- Group interactive objects in **containers** to manage events easily.
- Use `hitArea` for precise click detection instead of sprite bounds.

## ✅ Summary
- **Enable interactivity** using `interactive = true`.
- **Use pointer events** to handle clicks, drags, and movement.
- **Optimize with hit areas** and event delegation.

Now, you're ready to make interactive experiences! 🚀

