// Basic Animations using PixiJS Ticker

import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb
});

document.body.appendChild(app.view); // Add canvas to the document

// Load a sprite texture
const texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png');
const sprite = new PIXI.Sprite(texture);

// Set sprite properties
sprite.x = app.screen.width / 2;
sprite.y = app.screen.height / 2;
sprite.anchor.set(0.5); // Center the sprite

app.stage.addChild(sprite); // Add sprite to the stage

// Add animation using the ticker
app.ticker.add(() => {
    sprite.rotation += 0.05; // Rotate the sprite continuously
});
