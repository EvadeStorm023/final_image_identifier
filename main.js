Webcam.set({
    width: 350,
    height :300,
    image_format: "png",
    png_quality: 90
});

camera = document.getElementById("camera");
 
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("photo").innerHTML = "<img src ="+data_uri+" id='cap_pic'>"
    });
}

console.log('ml5 version is', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Dfpohx-RN/model.json', modelLoaded);

function modelLoaded(){
    console.log('model has been loaded');
}

function identify(){
    img = document.getElementById('cap_pic');
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error)
}
else{
console.log(result);
document.getElementById("item1").innerHTML = results[0].label;
document.getElementById("acc").innerHTML = results[0].confidence.toFixed(2);
}
}
