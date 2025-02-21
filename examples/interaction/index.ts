// Adding Interactivity in PixiJS

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
sprite.anchor.set(0.5);
sprite.interactive = true; // Enable interactivity
sprite.buttonMode = true; // Show hand cursor on hover

// Click event
sprite.on('pointerdown', () => {
    sprite.scale.x *= 1.2;
    sprite.scale.y *= 1.2;
});

// Hover event
sprite.on('pointerover', () => {
    sprite.tint = 0xff0000; // Change color to red
});

sprite.on('pointerout', () => {
    sprite.tint = 0xffffff; // Reset color
});

app.stage.addChild(sprite); // Add sprite to the stage
