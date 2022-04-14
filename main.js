song_1 = "";
song_2 = "";

leftWristX = 0;
rightWristX = 0;

leftWristY = 0;
rightWristY = 0;

function preload() {
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("Left Wrist X = " + leftWristX + ", Right Wrist X = " + rightWristX);

        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Left Wrist Y = " + leftWristY + ", Right Wrist Y = " + rightWristY); 
    }
}