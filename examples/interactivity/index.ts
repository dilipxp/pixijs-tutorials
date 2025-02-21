// Handling User Interactions in PixiJS

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
sprite.interactive = true; // Enable interactivity
sprite.buttonMode = true; // Show pointer cursor

// Add click event listener
sprite.on('pointerdown', () => {
    sprite.scale.x *= 1.2; // Increase size on click
    sprite.scale.y *= 1.2;
});

app.stage.addChild(sprite); // Add sprite to the stage
