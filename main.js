function preload(){
    classificador=ml5.imageClassifier("DoodleNet");
};
function setup(){
    canvas=createCanvas(500,500);
    canvas.center();
    background("white");
}
 function apagar(){
    background("white");
 }
 function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY,mouseX,mouseY)
    }
 }
 function tirarFoto(){
    save("MeuCanvas.png")
 }