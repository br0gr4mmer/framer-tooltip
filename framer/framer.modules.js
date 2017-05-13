require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ToolTip":[function(require,module,exports){
var ToolTip,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

ToolTip = (function(superClass) {
  extend(ToolTip, superClass);

  function ToolTip(options) {
    var arrow, arrowPosition, arrowSize, posBottom, posLeft, posRight, posTop, timer;
    if (options == null) {
      options = {};
    }
    this.arrow = options.arrow;
    this.target = options.target;
    this.timeOut = options.timeOut;
    if (options.fontSize == null) {
      options.fontSize = 28;
    }
    if (options.color == null) {
      options.color = 'white';
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = 'red';
    }
    options.borderRadius = 5;
    options.padding = [12, 20, 16, 20];
    if (options.x == null) {
      options.x = 0;
    }
    if (options.y == null) {
      options.y = 0;
    }
    if (options.timeOut == null) {
      options.timeOut = 3;
    }
    ToolTip.__super__.constructor.call(this, options);
    arrowSize = 18;
    posTop = [(this.width - arrowSize) / 2, -arrowSize / 2];
    posBottom = [(this.width - arrowSize) / 2, this.height - arrowSize / 2];
    posLeft = [-arrowSize / 2, (this.height - arrowSize) / 2];
    posRight = [this.width - arrowSize / 2, (this.height - arrowSize) / 2];
    arrowPosition = posTop;
    if (this.arrow === 'top') {
      this.x = (this.target.x - this.width / 2) + this.target.width / 2;
      this.y = this.target.y + this.target.height;
    }
    if (this.arrow === 'bottom') {
      arrowPosition = posBottom;
      this.x = (this.target.x - this.width / 2) + this.target.width / 2 + this.x;
      this.y = this.target.y - this.height + this.y;
    }
    arrow = new Layer({
      parent: this,
      x: arrowPosition[0],
      y: arrowPosition[1],
      backgroundColor: this.backgroundColor,
      rotation: 45,
      width: arrowSize,
      height: arrowSize
    });
    timer = new Layer({
      parent: this,
      backgroundColor: 'transparent'
    });
    timer.states = {
      timeOut: {
        opacity: 0,
        options: {
          time: this.timeOut
        }
      }
    };
    timer.animate('timeOut');
    this.states = {
      "default": {
        opacity: 1
      },
      hidden: {
        opacity: 0
      }
    };
    this.stateSwitch('hidden');
    this.animate('default');
    timer.onAnimationEnd(function() {
      return this.parent.animate('hidden', {
        time: 1
      });
    });
  }

  return ToolTip;

})(TextLayer);

exports.ToolTip = ToolTip;


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJhbWVyLm1vZHVsZXMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL1VzZXJzL3RpbS5sYW5nZS9Ecm9wYm94L0ZyYW1lci9tb2R1bGVzL3Rvb2x0aXAuZnJhbWVyL21vZHVsZXMvVG9vbFRpcC5jb2ZmZWUiLCJub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvb2xUaXAgZXh0ZW5kcyBUZXh0TGF5ZXJcblx0Y29uc3RydWN0b3I6IChvcHRpb25zID0ge30pIC0+XG5cdFx0QGFycm93ID0gb3B0aW9ucy5hcnJvd1xuXHRcdEB0YXJnZXQgPSBvcHRpb25zLnRhcmdldFxuXHRcdEB0aW1lT3V0ID0gb3B0aW9ucy50aW1lT3V0XG5cdFx0b3B0aW9ucy5mb250U2l6ZSA/PSAyOFxuXHRcdG9wdGlvbnMuY29sb3IgPz0gJ3doaXRlJ1xuXHRcdG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89ICdyZWQnXG5cdFx0b3B0aW9ucy5ib3JkZXJSYWRpdXMgPSA1XG5cdFx0b3B0aW9ucy5wYWRkaW5nID0gWzEyLCAyMCwgMTYsIDIwXVxuXHRcdG9wdGlvbnMueCA/PSAwXG5cdFx0b3B0aW9ucy55ID89IDBcblx0XHRvcHRpb25zLnRpbWVPdXQgPz0gM1xuXHRcdHN1cGVyKG9wdGlvbnMpXG5cblx0XHRhcnJvd1NpemUgPSAxOFxuXG5cdFx0cG9zVG9wID0gWyhAd2lkdGggLSBhcnJvd1NpemUpLzIsIC1hcnJvd1NpemUvMl1cblx0XHRwb3NCb3R0b20gPSBbKEB3aWR0aCAtIGFycm93U2l6ZSkvMiwgQGhlaWdodC1hcnJvd1NpemUvMl1cblx0XHRwb3NMZWZ0ID0gWy1hcnJvd1NpemUvMiwgKEBoZWlnaHQgLSBhcnJvd1NpemUpLzJdXG5cdFx0cG9zUmlnaHQgPSBbQHdpZHRoLWFycm93U2l6ZS8yLCAoQGhlaWdodCAtIGFycm93U2l6ZSkvMl1cblx0XHRhcnJvd1Bvc2l0aW9uID0gcG9zVG9wXG5cdFx0aWYgQGFycm93IGlzICd0b3AnXG5cdFx0XHRALnggPSAoQHRhcmdldC54IC0gQHdpZHRoLzIpICsgQHRhcmdldC53aWR0aC8yXG5cdFx0XHRALnkgPSBAdGFyZ2V0LnkgKyBAdGFyZ2V0LmhlaWdodFxuXHRcdGlmIEBhcnJvdyBpcyAnYm90dG9tJ1xuXHRcdFx0YXJyb3dQb3NpdGlvbiA9IHBvc0JvdHRvbVxuXHRcdFx0QC54ID0gKEB0YXJnZXQueCAtIEB3aWR0aC8yKSArIEB0YXJnZXQud2lkdGgvMiArIEAueFxuXHRcdFx0QC55ID0gQHRhcmdldC55IC0gQGhlaWdodCArIEAueVxuXG5cdFx0YXJyb3cgPSBuZXcgTGF5ZXJcblx0XHRcdHBhcmVudDogdGhpc1xuXHRcdFx0eDogYXJyb3dQb3NpdGlvblswXVxuXHRcdFx0eTogYXJyb3dQb3NpdGlvblsxXVxuXHRcdFx0YmFja2dyb3VuZENvbG9yOiBALmJhY2tncm91bmRDb2xvclxuXHRcdFx0cm90YXRpb246IDQ1XG5cdFx0XHR3aWR0aDogYXJyb3dTaXplXG5cdFx0XHRoZWlnaHQ6IGFycm93U2l6ZVxuXG5cdFx0dGltZXIgPSBuZXcgTGF5ZXJcblx0XHRcdHBhcmVudDogdGhpc1xuXHRcdFx0YmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG5cblx0XHR0aW1lci5zdGF0ZXMgPVxuXHRcdFx0dGltZU91dDpcblx0XHRcdFx0XHRvcGFjaXR5OiAwXG5cdFx0XHRcdFx0b3B0aW9uczpcblx0XHRcdFx0XHRcdHRpbWU6IEB0aW1lT3V0XG5cblx0XHR0aW1lci5hbmltYXRlICd0aW1lT3V0J1xuXG5cdFx0dGhpcy5zdGF0ZXMgPVxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0b3BhY2l0eTogMVxuXHRcdFx0aGlkZGVuOlxuXHRcdFx0XHRvcGFjaXR5OiAwXG5cblx0XHRALnN0YXRlU3dpdGNoICdoaWRkZW4nXG5cdFx0QC5hbmltYXRlICdkZWZhdWx0J1xuXG5cdFx0dGltZXIub25BbmltYXRpb25FbmQgLT5cblx0XHRcdHRoaXMucGFyZW50LmFuaW1hdGUgJ2hpZGRlbicsIHRpbWU6IDFcblxuZXhwb3J0cy5Ub29sVGlwID0gVG9vbFRpcFxuIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFDQUE7QURBQSxJQUFBLE9BQUE7RUFBQTs7O0FBQU07OztFQUNRLGlCQUFDLE9BQUQ7QUFDWixRQUFBOztNQURhLFVBQVU7O0lBQ3ZCLElBQUMsQ0FBQSxLQUFELEdBQVMsT0FBTyxDQUFDO0lBQ2pCLElBQUMsQ0FBQSxNQUFELEdBQVUsT0FBTyxDQUFDO0lBQ2xCLElBQUMsQ0FBQSxPQUFELEdBQVcsT0FBTyxDQUFDOztNQUNuQixPQUFPLENBQUMsV0FBWTs7O01BQ3BCLE9BQU8sQ0FBQyxRQUFTOzs7TUFDakIsT0FBTyxDQUFDLGtCQUFtQjs7SUFDM0IsT0FBTyxDQUFDLFlBQVIsR0FBdUI7SUFDdkIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEVBQVQsRUFBYSxFQUFiOztNQUNsQixPQUFPLENB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
