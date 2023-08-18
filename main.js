
noseX = 0;
noseY = 0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550);

    canvas = createCanvas(600, 600);
    canvas.position(550, 160);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    document.getElementById("Width+Height").innerHTML = "Width and Height of the square is - "+difference+"px";
    background('#969A97');
    fill("8A2CEC");
    stroke("#FFFFFF");
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log("PoseNet is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0 )
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX ="+noseX+"noseY"+noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        difference = (leftwristX- rightwristX).toFixed(0);

        console.log("leftwristX"+leftwristX+"rightwristY"+rightwristX+"difference"+difference);
    }
}

