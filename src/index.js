require("cesium/Widgets/widgets.css");
require("./css/main.css");

var Cesium = require("cesium/Cesium");

// Example app

var viewer = new Cesium.Viewer("cesiumContainer");

viewer.entities.add({
  position: Cesium.Cartesian3.fromDegrees(0, 0, 100000),
  ellipsoid: {
    radii: new Cesium.Cartesian3(100000, 100000, 100000),
    material: Cesium.Color.fromRandom({ alpha: 1.0 })
  }
});
