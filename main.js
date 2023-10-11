difference=0;
leftWristX=0;
rightWristX=0;

function setup(){


    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);

}

function draw(){
background('#808080');
textSize(difference);
fill('#F90093');
text('Nandan Saladi', 70, 90);


}

function modelLoaded()
{
console.log('PoseNet Is Initialized');
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    leftWristX=results[0].pose.nose.x;
    rightWristX=results[0].pose.nose.x;
    difference=floor(leftWristX-rightWristX);

}
}