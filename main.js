function setup(){
    canvas = createCanvas(700,450);
    canvas.position(500,100);
    video = createCapture(VIDEO);
    video.size(500,300);
    posenet = ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);

}

function draw(){
    background('lightgray');
    
}

function modelloaded(){
    console.log("poseNet is initialised")
    
}

function gotposes(results){
    if(results.length>0){
        console.log(results);

    }
}