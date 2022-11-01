import * as PIXI from 'pixi.js';
import santaUrl from '../assets/santa.png';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container.
const app = new PIXI.Application();

// The application will create a canvas element for you that you
// can then insert into the DOM.
document.body.appendChild(app.view);

// load the texture we need
app.loader.add('santa', santaUrl).load((loader, resources) => {
  // This creates a texture from a 'santa.png' image.
  const santa = new PIXI.Sprite(resources.santa.texture);

  // Setup the position of the santa
  santa.x = app.renderer.width / 2;
  santa.y = app.renderer.height / 2;

  // Rotate around the center
  santa.anchor.x = 0.5;
  santa.anchor.y = 0.5;

  // Add the santa to the scene we are building.
  app.stage.addChild(santa);

  // Listen for frame updates
  app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    santa.rotation += 0.01;
  });
});
