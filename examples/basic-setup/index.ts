// Basic Setup of PixiJS

import { Application, Text } from "pixi.js";

// Create a new PixiJS application
const app = new Application();

await app.init({backgroundColor:'seagreen', height:600, width:400});
document.getElementById('app')?.appendChild(app.canvas); 


// Create a simple text
const text = new Text('Hello, PixiJS!', {
    fontSize: 36,
    fill: 0xffffff,
    fontWeight: 'bold'
});
text.x = app.screen.width / 2;
text.y = app.screen.height / 2;
text.anchor.set(0.5);

app.stage.addChild(text); // Add text to the stage
