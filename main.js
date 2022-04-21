sound=""
leftwristy=""
leftwristx=""
rightwristy=""
rightwristx=""
function preload() {
    sound=loadSound("music.mp3");
}
function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
posenet=ml5.poseNet(video,modeloaded);
posenet.on("pose",getposes);
}
function modeloaded() {
  console.log("model is loaded");
}
function getposes(results){
    if(results.length>0){
        console.log(results)
        leftwristx=results[0].pose.leftWrist.x
        leftwristy=results[0].pose.leftWrist.y
        rightwristx=results[0].pose.rightWrist.x
        rightwristy=results[0].pose.rightWrist.y
        console.log(leftwristy)
        console.log(leftwristx)
        console.log(rightwristy)
        console.log(rightwristx)
    }
}
function draw() {
image(video,0,0,500,500);
}
function play() {
    sound.play();
    sound.setVolume(1);
    sound.rate(1);
}
function stop() {
    sound.stop();
}