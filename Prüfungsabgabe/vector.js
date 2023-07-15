"use strict";
var IceShop;
(function (IceShop) {
    class Vector {
        x;
        y;
        _radiusX;
        _radiusY;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
            return (new Vector(this.x, this.y));
        }
        subtract(_sub) {
            this.x -= _sub.x;
            this.y -= _sub.y;
        }
        randomize(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    IceShop.Vector = Vector;
})(IceShop || (IceShop = {}));
//# sourceMappingURL=vector.js.map