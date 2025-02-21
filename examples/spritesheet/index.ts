// Using Spritesheets in PixiJS

import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb
});

document.body.appendChild(app.view); // Add canvas to the document

// Load the spritesheet
PIXI.Assets.load('https://pixijs.com/assets/spritesheet/mc.json').then((resources) => {
    const textures = [];

    // Extract frames from the spritesheet
    for (let i = 0; i < 6; i++) {
        textures.push(PIXI.Texture.from(`mc_0${i}.png`));
    }

    // Create an animated sprite
    const animatedSprite = new PIXI.AnimatedSprite(textures);
    animatedSprite.x = app.screen.width / 2;
    animatedSprite.y = app.screen.height / 2;
    animatedSprite.anchor.set(0.5);
    animatedSprite.animationSpeed = 0.1;
    animatedSprite.play();

    app.stage.addChild(animatedSprite);
});
