sound=""
leftwristy=""
leftwristx=""
rightwristy=""
rightwristx=""
leftwristscore=""
function preload() {
    sound=loadSound("music.mp3");
}
function setup(){
canvas=createCanvas(500,500);
canvas.center();
video=createCapture(VIDEO);
video.size(500,500)
video.hide();
posenet=ml5.poseNet(video,modeloaded);
posenet.on("pose",getposes);
}
function modeloaded() {
  console.log("model is loaded");
}
function getposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log(leftwristy)
        console.log(leftwristx);
        console.log(rightwristy);
        console.log(rightwristx);
        leftwristscore=results[0].pose.keypoints[9].score;
        console.log("leftwristscore"+leftwristscore)
    }
}
function draw() {
image(video,0,0,500,500);
fill("red");
stroke("blue");
if (leftwristscore>0.2) {
    circle(leftwristx,leftwristy,20);
    leftwristy_no=Number(leftwristy);
    removedecimals=floor(leftwristy_no)
    volume=removedecimals/500
    sound.setVolume(volume)
    document.getElementById("volume").innerHTML="volume:"+volume
}
}
function play() {
    sound.play();
    sound.setVolume(1);
    sound.rate(1);
}
function stop() {
    sound.stop();
}