const pattern = [
"00111100111100",
"01111111111110",
"11111111111111",
"11111111111111",
"01111111111110",
"00111111111100",
"00011111111000",
"00001111110000",
"00000111100000",
"00000011000000"
];

const heart = document.getElementById("heart");

pattern.forEach((row,y)=>{
[...row].forEach((col,x)=>{
if(col==="1"){
let d=document.createElement("div");
d.className="block";
d.style.left=x*20+"px";
d.style.top=y*20+"px";
heart.appendChild(d);
}
});
});

// floating hearts

setInterval(()=>{
let h=document.createElement("div");
h.className="float";
h.innerHTML="❤️";
h.style.left=Math.random()*window.innerWidth+"px";
h.style.fontSize=Math.random()*20+15+"px";
document.body.appendChild(h);

setTimeout(()=>h.remove(),6000);
},300);