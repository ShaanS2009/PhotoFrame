function preload()
{
}
function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video,0, 0, 500, 500);
    circle(25, 25, 50);
    fill(165, 42, 42);
    rect(50, 5, 395, 40);
    circle(470, 25, 50);
    rect(50, 460, 395, 40);
    circle(25, 480, 50);
    circle(470, 480, 50);
    rect(5, 49, 40, 405);
    rect(450, 49, 40, 405);
}
function take_snapshot()
{
    save('myPic.png');
}
