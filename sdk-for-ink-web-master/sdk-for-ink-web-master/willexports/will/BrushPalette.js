let BrushPalette = {
	/* **************** VECTOR BRUSH configuration **************** */
	circle: new Brush2D(URIBuilder.getBrushURI("vector", "Circle"), [
		BrushPrototype.create(BrushPrototype.Type.CIRCLE, 0, 4),
		BrushPrototype.create(BrushPrototype.Type.CIRCLE, 2, 8),
		BrushPrototype.create(BrushPrototype.Type.CIRCLE, 6, 16),
		BrushPrototype.create(BrushPrototype.Type.CIRCLE, 18, 32)
	]),

	basic: new Brush2D(URIBuilder.getBrushURI("vector", "Basic"), ShapeFactory.createCircle(3), 0.3),

	/* **************** RASTER BRUSH configuration **************** */
	pencil: new BrushGL(URIBuilder.getBrushURI("raster", "Pencil"), "./will/textures/essential_shape.png", "./will/textures/essential_fill_11.png", {spacing: 0.15, scattering: 0.15}),

	waterBrush: new BrushGL(URIBuilder.getBrushURI("raster", "WaterBrush"), "./will/textures/essential_shape.png", "./will/textures/essential_fill_14.png", {
		spacing: 0.1,
		scattering: 0.03,
		blendMode: BlendMode.MAX
	}),

	inkBrush: new BrushGL(URIBuilder.getBrushURI("raster", "InkBrush"),
		[
			"./will/textures/fountain_brush_128x128.png",
			"./will/textures/fountain_brush_64x64.png",
			"./will/textures/fountain_brush_32x32.png",
			"./will/textures/fountain_brush_16x16.png",
			"./will/textures/fountain_brush_8x8.png",
		],
		"./will/textures/essential_fill_8.png",
		{spacing: 0.035, rotationMode: BrushGL.RotationMode.NONE}
	),

	rainbowBrush: new BrushGL(URIBuilder.getBrushURI("raster", "RainbowBrush"), "./will/textures/essential_shape.png", "./will/textures/essential_fill_8.png", {spacing: 0.15, rotationMode: BrushGL.RotationMode.NONE}),
	crayon: new BrushGL(URIBuilder.getBrushURI("raster", "Crayon"), "./will/textures/essential_shape.png", "./will/textures/essential_fill_17.png", {spacing: 0.15, scattering: 0.05}),

	eraser: new BrushGL(URIBuilder.getBrushURI("raster", "Eraser"), "./will/textures/shape_circle.png", "./will/textures/essential_fill_8.png", {
		spacing: 0.1,
		rotationMode: BrushGL.RotationMode.NONE
	})
};

let ready = false;

BrushPalette.configure = async function(ctx) {
	if (ready) return;
	ready = true;

	let brushes = Object.values(BrushPalette).filter(value => value instanceof BrushGL);

	for (let brush of brushes)
		await brush.configure(ctx);
}

BrushPalette.delete = async function() {
	let brushes = Object.values(BrushPalette).filter(value => value instanceof BrushGL);

	for (let brush of brushes) {
	    //await brush.delete();
	    console.log(brush.constructor.name);
	}
}
