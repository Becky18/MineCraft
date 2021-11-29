var canvas= new fabric.Canvas('myCanvas');
var player_x=10
var player_y=10
var block_width=30
var block_height=30
var block_object=""
var player_object=""
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) 
    {
        player_object=Img;
        player_object.scaleToWidth(150)
        player_object.scaleToWidth(140)
        player_object.set(
            {
                top:player_y,
                left:player_x
            }
        )
        canvas.add(player_object)
    }
    );
    
}
function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) 
    {
        block_object=Img;
        block_object.scaleToWidth(block_width)
        block_object.scaleToWidth(block_height)
        block_object.set(
            {
                top:player_y,
                left:player_x
            }
        )
        canvas.add(block_object)
    }
    );
    
}
window.addEventListener("keydown",keyDown)
function keyDown(e){
    keyPress=e.keyCode;
    console.log(keyPress);
if(e.shiftKey==true && keyPress==80){
    console.log("p and shift pressed together");
    block_width=block_width+10;
    block_height=block_height+10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(e.shiftKey==true && keyPress==77){
    console.log("m and shift pressed together");
    block_width=block_width-10;
    block_height=block_height-10;
    document.getElementById("current_width").innerHTML=block_width;
    document.getElementById("current_height").innerHTML=block_height;
}
if(keyPress==37){
    left()
    console.log("left")
}
if(keyPress==38){
    up()
    console.log("up")
}
if(keyPress==39){
    right()
    console.log("right")
}
if(keyPress==40){
    down()
    console.log("down")
}
if(keyPress==67){
    new_image("cloud.jpg")
    console.log("cloud")
}
if(keyPress== 68){
    new_image("dark_green.png")
    console.log("dark_green")
}
if(keyPress==71){
    new_image("ground.png")
    console.log("ground")
}
if(keyPress==76){
    new_image("light_green.png")
    console.log("light_green")
}
if(keyPress==82){
    new_image("roof.jpg")
    console.log("roof")
}
if(keyPress==84){
    new_image("trunk.jpg")
    console.log("trunk")
}
if(keyPress==87){
    new_image("wall.jpg")
    console.log("wall")
}
if(keyPress==89){
    new_image("yellow_wall.png")
    console.log("yellow_wall")
}
if(keyPress==85){
    new_image("unique.png")
    console.log("unique")
}
}
function up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block height ="+ block_height);
        console.log("X position of player ="+player_x +"and Y positon of player ="+player_y);
        canvas.remove(player_object);
        player_update()
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("block height ="+ block_height);
        console.log("X position of player ="+player_x +"and Y positon of player ="+player_y);
        canvas.remove(player_object);
        player_update()
    }
}
function left(){
    if(player_x>=0){
        player_x=player_x-block_height;
        console.log("block height ="+ block_height);
        console.log("X position of player ="+player_x +"and Y positon of player ="+player_y);
        canvas.remove(player_object);
        player_update()
    }
}
function right(){
    if(player_x<=900){
        player_x=player_x+block_height;
        console.log("block height ="+ block_height);
        console.log("X position of player ="+player_x +"and Y positon of player ="+player_y);
        canvas.remove(player_object);
        player_update()
    }
}