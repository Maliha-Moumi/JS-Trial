// the hello world program
alert("Welcome to my JS example");
// Time and date 
function dateTime(){
document.getElementById('date').innerHTML= "22June,2022";
}
// Paragraph
function Paragraph(){
document.getElementById('para').innerHTML= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni repellat ratione totam voluptate assumenda architecto ullam excepturi tempora accusamus dolores tempore eum saepe, non aspernatur! Doloribus nam autem nisi unde."
}
//Chnage Text
function textChange(){
document.getElementById('text').innerHTML= "Fuga repellendus quae ipsum molestiae, ratione ea facilis quis possimus fugit id!"
 }
// Change css 
function cssChange(){
document.getElementById('demo').style.fontSize="35px";
}
// Apply border
function Border(){
document.getElementById('demo1').style.border="2px solid blue";
}
// Apply border
function textHide(){
document.getElementById('demo3').style.display="none";
}  
//Replace word
function textReplace(){
let text = document.getElementById('replace').innerHTML;
document.getElementById('replace').innerHTML=text.replace("hate","love");
}  
//Text uppercase
function textUppercase(){
let text = document.getElementById('uppercase').innerHTML;
document.getElementById('uppercase').innerHTML =
text.toUpperCase();
 }  
//Text lowercase
function textLowercase(){
let text = document.getElementById('lowercase').innerHTML;
document.getElementById('lowercase').innerHTML =
text.toLowerCase();
}  
      






