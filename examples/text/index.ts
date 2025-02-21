// Rendering and Styling Text in PixiJS

import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb
});

document.body.appendChild(app.view); // Add canvas to the document

// Create a styled text object
const text = new PIXI.Text('Hello, PixiJS!', {
    fontFamily: 'Arial',
    fontSize: 50,
    fill: ['#ffffff', '#ff00ff'], // Gradient fill
    fontWeight: 'bold',
    stroke: '#000000',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 4,
    dropShadowDistance: 6,
    align: 'center'
});

// Position text at the center
text.x = app.screen.width / 2;
text.y = app.screen.height / 2;
text.anchor.set(0.5);

app.stage.addChild(text); // Add text to the stage
