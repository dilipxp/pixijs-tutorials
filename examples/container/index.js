// Using Containers in PixiJS

import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb
});

document.body.appendChild(app.view); // Add canvas to the document

// Create a container to group objects
const container = new PIXI.Container();
app.stage.addChild(container);

// Load a sprite texture
const texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png');

// Create multiple sprites and add them to the container
for (let i = 0; i < 5; i++) {
    const sprite = new PIXI.Sprite(texture);
    sprite.x = 100 + i * 150;
    sprite.y = 300;
    sprite.anchor.set(0.5);
    container.addChild(sprite);
}

// Scale and rotate the entire container
container.x = app.screen.width / 2 - 200;
container.y = app.screen.height / 2 - 100;
container.scale.set(1.2);

app.ticker.add(() => {
    container.rotation += 0.01; // Rotate the entire group of sprites
});
