'use strict';

var color1 = '#c159b0',
    color2 = '#6dbc99',
    color3 = '#f4a86e',
    pos = { row1: '35%',
  row2: '65%',
  col1: '20%',
  col2: '40%',
  col3: '60%',
  col4: '80%' };

var zigzag = new mojs.Shape({
  shape: 'zigzag',
  points: 7,
  radius: 25,
  radiusY: 50,
  top: pos.row1,
  left: pos.col1,
  fill: 'none',
  stroke: color1,
  isShowStart: true
});

var cross = new mojs.Shape({
  shape: 'cross',
  radius: 20,
  radiusY: 30,
  top: pos.row1,
  left: pos.col2,
  stroke: color2, //no fill for this one
  isShowStart: true,
  y: -25
});

var equal = new mojs.Shape({
  shape: 'equal',
  radius: 25,
  radiusY: 15,
  top: pos.row1,
  left: pos.col3,
  stroke: color3, //no fill for this one
  isShowStart: true,
  y: -25
});

var curve = new mojs.Shape({
  shape: 'curve',
  radius: 25,
  radiusY: 50,
  top: pos.row1,
  left: pos.col4,
  fill: 'none',
  stroke: color2,
  isShowStart: true
});

// second row //

var rect = new mojs.Shape({
  shape: 'rect',
  radius: 10,
  radiusX: 30, // explicit radiusX
  left: pos.col1,
  top: pos.row2,
  fill: color3,
  isShowStart: true
});

var circle = new mojs.Shape({
  shape: 'circle',
  radius: 30,
  radiusX: 20, // explicit radiusX
  top: pos.row2,
  left: pos.col3,
  fill: 'none',
  stroke: color2,
  isShowStart: true
});

var polygon1 = new mojs.Shape({
  shape: 'polygon',
  radius: 20,
  radiusY: 30, // explicit radiusY
  left: '75%',
  stroke: '#7db4d8',
  top: pos.row2,
  left: pos.col2,
  fill: 'none',
  isShowStart: true
});

var polygon2 = new mojs.Shape({
  shape: 'polygon',
  points: 8, //explicit points
  radius: 25,
  left: '75%',
  top: pos.row2,
  left: pos.col4,
  fill: color3,
  isShowStart: true
});