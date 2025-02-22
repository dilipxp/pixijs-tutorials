// Using Containers in PixiJS
import { Application,Assets,Container, Sprite, Texture } from "pixi.js";

// Create a new PixiJS application
const app = new Application();
await app.init({backgroundColor:'seagreen', height:600, width:400});

document.body.appendChild(app.canvas); // Add canvas to the document

// Create a container to group objects
const container = new Container();
app.stage.addChild(container);

const texture = await Assets.load('https://pixijs.com/assets/bunny.png')

// Load a sprite texture
// const texture = Texture.from('https://pixijs.com/assets/bunny.png');

// Create multiple sprites and add them to the container
for (let i = 0; i < 5; i++) {
    const sprite = new Sprite(texture);
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
