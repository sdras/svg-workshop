'use strict';

var _ReactMotion = ReactMotion;
var StaggeredMotion = _ReactMotion.StaggeredMotion;
var spring = _ReactMotion.spring;

var Demo = React.createClass({
  displayName: 'Demo',
  getInitialState: function getInitialState() {
    return { x: 250, y: 300, rotate: 0 };
  },
  componentDidMount: function componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('touchmove', this.handleTouchMove);
  },

  //we're setting the state to be equal to the position
  handleMouseMove: function handleMouseMove(_ref) {
    var x = _ref.pageX;
    var y = _ref.pageY;

    this.setState({ x: x, y: y });
  },
  handleTouchMove: function handleTouchMove(_ref2) {
    var touches = _ref2.touches;

    this.handleMouseMove(touches[0]);
  },
  getStyles: function getStyles(prevStyles) {
    var _this = this;

    // we're using the previous style to update the next ones placement
    var endValue = prevStyles.map(function (_, i) {
      var stiff = 200,
          damp = 15;
      return i === 0 ? _this.state : {
        x: spring(prevStyles[i - 1].x, { stiffness: stiff, damping: damp }),
        y: spring(prevStyles[i - 1].y, { stiffness: stiff, damping: damp }),
        rotate: spring(i * 10, { stiffness: stiff, damping: damp })
      };
    });
    return endValue;
  },
  render: function render() {
    var arr = [],
        amtHalf = 175;
    for (var i = 0; i < 50; i++) {
      arr.push({ x: 0, y: 0, rotate: 0 });
    }
    return React.createElement(
      'div',
      null,
      React.createElement(
        StaggeredMotion,
        {
          defaultStyles: arr,
          styles: this.getStyles },
        function (lines) {
          return React.createElement(
            'div',
            { className: 'demo' },
            lines.map(function (_ref3, i) {
              var x = _ref3.x;
              var y = _ref3.y;
              var rotate = _ref3.rotate;
              return React.createElement('div', {
                key: i,
                className: 'playthings s' + i
                // we have to subtract half the amount of $amt in the CSS panel so that the mouse stays in the center of the object we're creating
                , style: {
                  WebkitTransform: 'translate3d(' + (x - amtHalf) + 'px, ' + (y - amtHalf) + 'px, 0) rotate(' + rotate + 'deg)',
                  transform: 'translate3d(' + (x - amtHalf) + 'px, ' + (y - amtHalf) + 'px, 0) rotate(' + rotate + 'deg)'
                } });
            })
          );
        }
      )
    );
  }
});

React.render(React.createElement(Demo, null), document.querySelector('#app'));