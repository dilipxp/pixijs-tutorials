# Frequently Asked Questions (FAQ) - PixiJS

## ❓ General Questions

### 1️⃣ What is PixiJS?
PixiJS is a 2D WebGL rendering engine used for creating interactive graphics, games, and applications. It provides fast performance and is easy to use.

### 2️⃣ How do I install PixiJS?
You can install PixiJS using npm:
```sh
npm install pixi.js
```
Or include it via CDN:
```html
<script src="https://pixijs.download/release/pixi.min.js"></script>
```

### 3️⃣ What platforms does PixiJS support?
PixiJS works on modern web browsers and can run on both desktop and mobile devices.

## 🎨 Rendering & Performance

### 4️⃣ Why is my PixiJS application slow?
Common reasons for slow performance:
- Too many sprites on the screen at once.
- Using high-resolution textures without optimization.
- Not using `cacheAsBitmap` for static objects.
- Too many overlapping transparent objects.

### 5️⃣ How can I improve performance in PixiJS?
- Use sprite sheets instead of individual textures.
- Enable GPU acceleration: `PIXI.settings.PREFER_ENV = PIXI.ENV.WEBGL2;`
- Reduce overdraw by limiting overlapping objects.
- Use `RenderTexture` for offscreen rendering.

## 🖼 Sprites & Textures

### 6️⃣ How do I load an image into PixiJS?
```js
const texture = PIXI.Texture.from('image.png');
const sprite = new PIXI.Sprite(texture);
app.stage.addChild(sprite);
```

### 7️⃣ How do I resize a sprite?
```js
sprite.width = 200;
sprite.height = 100;
```
Or use scaling:
```js
sprite.scale.set(1.5);
```

## 🔄 Animations & Interactions

### 8️⃣ How do I animate a sprite?
```js
app.ticker.add(() => {
    sprite.x += 2; // Moves sprite to the right
});
```

### 9️⃣ How do I make an object interactive?
```js
sprite.interactive = true;
sprite.on('pointerdown', () => {
    console.log('Sprite clicked!');
});
```

## 🚀 Advanced Topics

### 🔟 How do I apply a filter (shader)?
```js
const blurFilter = new PIXI.BlurFilter(5);
sprite.filters = [blurFilter];
```

### 1️⃣1️⃣ How do I create a mask?
```js
const mask = new PIXI.Graphics();
mask.beginFill(0xffffff);
mask.drawCircle(50, 50, 50);
mask.endFill();
sprite.mask = mask;
```

## 📌 More Questions?
If you have more questions, check out the [official PixiJS documentation](https://pixijs.com/) or join the community forums.

Happy coding with PixiJS! 🚀

