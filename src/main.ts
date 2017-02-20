window.onload = () => {
    var canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
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

interface Drawable{
    draw(context:CanvasRenderingContext2D);
}

class DisplayObject implements Drawable{

    x = 0;

    alpha = 1;

    draw(context:CanvasRenderingContext2D){

    }
}

class DisplayObjectContainer implements Drawable{

    x : number = 0;
    y : number = 0;
    canvasarray : Drawable[] = [];

    addchild(newContext:DisplayObjectContainer){
        this.canvasarray.push(newContext);
    }

    draw(context:CanvasRenderingContext2D){
        for(let stage of this.canvasarray){
            stage.draw(context);
        }
    }
}

class TextField extends DisplayObjectContainer{
    text:string;
    x:number = 0;
    y:number = 0;
    draw(context:CanvasRenderingContext2D){
        context.fillText(this.text,this.x,this.y,100);
    }

}

class Bitmap extends DisplayObjectContainer{
    img = new Image();
    x : number = 0;
    y : number = 0;
    draw(context:CanvasRenderingContext2D){
        
        this.img.onload = () => {
        setInterval(()=>{
            //context.clearRect(0,0,500,500);
            context.drawImage(this.img,this.x,this.y);
        },30)
    }
    }
}