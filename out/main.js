var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
window.onload = function () {
    var canvas = document.getElementById("myCanvas");
    var context2D = canvas.getContext("2d");
    var stage = new DisplayObjectContainer();
    stage.x = 500;
    stage.y = 500;
    var te = new TextField();
    te.text = "Here we go!";
    te.x = 10;
    te.y = 10;
    //te.draw(context2D); 
    var shrimp = new Bitmap();
    shrimp.img.src = "shrimp.jpeg";
    shrimp.x = 200;
    shrimp.y = 200;
    //shrimp.draw(context2D);
    stage.addchild(te);
    stage.addchild(shrimp);
    stage.draw(context2D);
};
var DisplayObject = (function () {
    function DisplayObject() {
        this.x = 0;
        this.alpha = 1;
    }
    DisplayObject.prototype.draw = function (context) {
    };
    return DisplayObject;
}());
var DisplayObjectContainer = (function () {
    function DisplayObjectContainer() {
        this.x = 0;
        this.y = 0;
        this.canvasarray = [];
    }
    DisplayObjectContainer.prototype.addchild = function (newContext) {
        this.canvasarray.push(newContext);
    };
    DisplayObjectContainer.prototype.draw = function (context) {
        for (var _i = 0, _a = this.canvasarray; _i < _a.length; _i++) {
            var stage = _a[_i];
            stage.draw(context);
        }
    };
    return DisplayObjectContainer;
}());
var TextField = (function (_super) {
    __extends(TextField, _super);
    function TextField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.x = 0;
        _this.y = 0;
        return _this;
    }
    TextField.prototype.draw = function (context) {
        context.fillText(this.text, this.x, this.y, 100);
    };
    return TextField;
}(DisplayObjectContainer));
var Bitmap = (function (_super) {
    __extends(Bitmap, _super);
    function Bitmap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.img = new Image();
        _this.x = 0;
        _this.y = 0;
        return _this;
    }
    Bitmap.prototype.draw = function (context) {
        var _this = this;
        this.img.onload = function () {
            setInterval(function () {
                //context.clearRect(0,0,500,500);
                context.drawImage(_this.img, _this.x, _this.y);
            }, 30);
        };
    };
    return Bitmap;
}(DisplayObjectContainer));
//# sourceMappingURL=main.js.map