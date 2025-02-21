// Drawing Basic Shapes in PixiJS

import * as PIXI from 'pixi.js';

// Create a new PixiJS application
const app = new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb
});

document.body.appendChild(app.view); // Add canvas to the document

// Create a graphics object
const graphics = new PIXI.Graphics();

// Draw a rectangle
graphics.beginFill(0xff0000); // Red fill color
graphics.drawRect(200, 150, 400, 300); // x, y, width, height
graphics.endFill();

// Draw a circle
graphics.beginFill(0x00ff00); // Green fill color
graphics.drawCircle(400, 300, 100); // x, y, radius
graphics.endFill();

// Draw a line
graphics.lineStyle(5, 0x0000ff, 1); // Line thickness, color, alpha
graphics.moveTo(100, 500);
graphics.lineTo(700, 500);

graphics.endFill();

app.stage.addChild(graphics); // Add graphics to the stage
