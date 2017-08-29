// PIXI.Application is a convenience class to create a new PIXI application.
// This class automatically creates the renderer, ticker and root container
var app = new PIXI.Application(1366 / 2, 768 / 2, { backgroundColor : 0x1099bb});
document.body.appendChild(app.view);

PIXI.loader.add('sonic', 'img/idle.png').load(
	function(loader, resources) {
		// creates a texture from 'img/idle.png' image
		var sonic = new PIXI.Sprite(resources.sonic.texture);

		// Setup the position of sonic
		sonic.x = app.renderer.width / 2;
		sonic.y = app.renderer.height / 2;

		// Rotate around the center
		sonic.anchor.x = 0.5;
		sonic.anchor.y = 0.5;

		// Add sonic to the scene
		app.stage.addChild(sonic);

		// Listen for frame updates
		app.ticker.add(function(delta) {
			// delta is 1 if running at 100% performance
			// creates frame-independente transformation
			sonic.rotation -= 0.1 * delta;
		});
	}
);
