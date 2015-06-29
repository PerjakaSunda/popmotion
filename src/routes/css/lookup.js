"use strict";

var COLOR = 'color',
    POSITIONS = 'positions',
    DIMENSIONS = 'dimensions',
    SHADOW = 'shadow';

module.exports = {
    // Color properties
    color: COLOR,
    backgroundColor: COLOR,
    borderColor: COLOR,
    borderTopColor: COLOR,
    borderRightColor: COLOR,
    borderBottomColor: COLOR,
    borderLeftColor: COLOR,
    outlineColor: COLOR,
    fill: COLOR,
    stroke: COLOR,

    // Dimensions
    margin: DIMENSIONS,
    padding: DIMENSIONS,

    // Positions
    backgroundPosition: POSITIONS,
    perspectiveOrigin: POSITIONS,
    transformOrigin: POSITIONS,
    
    // Shadows
    textShadow: SHADOW,
    boxShadow: SHADOW
};