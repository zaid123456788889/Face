Prediction = 0;

Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
})

camera = document.getElementById("camera");
Webcam.attach("#camera");



  
function Snapshot ()
{    Webcam.snap(function(data_uri){

        document.getElementById("results").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version:", ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4vnqLQoC3/",modelLoaded)


function modelLoaded(){
    console.log("model loaded!")
}

function check (){
    img = document.getElementById("captured_image");
    classifier.classify(img , gotResults)
}

function gotResults (error , results){
    if (error){
        console.error(error);       
    }
else {
    console.log(results);
    document.getElementById("name").innerHTML = results[0].label;
   Prediction = results[0].label;
   toSpeak = "";
   if(Prediction == "Oldest")
   {toSpeak = "This is Zaid"; document.getElementById("icon"); }
   else if(Prediction == "Middle")
   {toSpeak = "This is Yahya"; document.getElementById("icon");}

   speak(); }}

function speak(){
    var synth = window.speechSynthesis;
speak_data = toSpeak;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}