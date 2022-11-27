import { Application, Assets, Sprite } from 'pixi.js';
// import santaUrl from './santa.png';

const santaUrl =
  'https://hsto.org/files/447/9b4/6d3/4479b46d397e439a9613ce122a66a506.png';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new Application();

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture(纹理) we need
const texture = await Assets.load(santaUrl);

// This creates a texture from a 'santaUrl' image
const bunny = new Sprite(texture);

// Setup the position of the bunny
bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

// Rotate around the center
bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

// Add the bunny to the scene we are building
app.stage.addChild(bunny);

// Listen for frame updates
app.ticker.add(() => {
  // each frame we spin the bunny around a bit
  bunny.rotation += 0.01;
});
