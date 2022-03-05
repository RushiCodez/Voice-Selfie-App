var speechRecognition= window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
 { document.getElementById("textbox").innerHTML = "";
  recognition.start(); }
   recognition.onresult = function(event) { 
      console.log(event); 
    var Content = event.results[0][0].transcript;
     document.getElementById("textbox").innerHTML = Content; 
     console.log(Content);
      if(Content =="take my selfie") 
      { console.log("taking selfie --- ");
      speak();
    }

   function speak(){
     var synth= window.speechSynthesis;
     speak_data = "Taking your selfie in 5 seconds";
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis);
Webcam.attatch (camera);
setTimeout(function()
takesnapshot();
save();
   }, 5000);




   }

   camera = document.getElementById("camera"); 
   function takesnapshot(){
   Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML = '<img id= "selfie_image" src = "'+data_uri+'">';
   

   });
   
   }
   Webcam.set({
    width: 361,
    height:249,
   image_format : 'png',
  png_quality : 91

   });

   function save(){
   link = document.getElementById("link");
   image = document.getElementById("selfie_image").src;
   link.href = image;
   link.click();
   }
