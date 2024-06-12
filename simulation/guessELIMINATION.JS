let equation1 = document.querySelector("#input1")

let equation2 = document.querySelector("#input2")
let equation3 = document.querySelector("#input3")

let calculateBtn=document.querySelector("#btn")
let box =document.querySelector("#answerAppend")

function questionAppend(eq1,eq2)
{
if(eq1)
{

 let h4 = document.createElement("h3")
 let markup = 
 ` 
  solve Equations ${eq1},${eq2}using Gauss-Elimination Method
  
 `
h4.innerHTML=markup;

box.append(h4)
box.style.position="absolute";
 box.style.top="340px";
 box.style.left="400px"
 box.style.border="1px solid black"
 box.style.width="500px"
 box.style.height="700px"
}
}

 function solution(a,b)
{
 
 if(a && b)
{
 let p =document.createElement("p");

 let markup1=`solution:<br>
   <br>
   ${b} =>(1)<br>
   <br>
   ${a} =>(2)<br>
   <br>
 Converting given equations into matrix from<br>
  


 `

p.innerHTML=markup1;
 p.style.marginLeft="20px";
 p.style.marginTop="10px"
p.style.fontSize="20px"
let arr2 =a
let arr1 =b


 box.append(p)

var c1 =document.createElement("p");
var c2 =document.createElement("p");
var c3 =document.createElement("p");
var c4 =document.createElement("p");
var c5=document.createElement("p");
var c6=document.createElement("p");
c1.innerHTML=arr1[0]; 
c2.innerHTML=arr1[3]; 
c3.innerHTML=arr2[0]; 
c4.innerHTML=arr2[3]; 
 
c1.style.position="relative";
c1.style.left="50"
c1.style.top="180"
c2.style.position="relative";
c2.style.left="100"
c2.style.top="162"
c3.style.position="relative";
c3.style.left="50"
c3.style.top="170"
c4.style.position="relative";
c4.style.left="100"
c4.style.top="154"
if((arr1.slice(3,4) == 3) || (arr1.slice(3,4) == 4))
{

 if(arr1.includes("x") && arr1.includes("y")) 
{
 
  var t1 = arr2[0]/arr1[0];
 var t2 = arr1
var t3= t2.replace("x","")
var t4= t3.replace("y","")
 console.log(t4)


}
}
let r1 = arr2[0]/arr1[0];
console.log(typeof r1,r1)
let obj2=new makeMatrix(c1,c2,c3,c4,c5,c6,"100","2","absolute","40","170","10","44","164","44","264","150","170","146","265","145","165","200","120","black")
obj2.matrixAppend()

if(arr1.includes("x") && arr1.includes("y"))
{
var h= arr1.replace("x","");

var h2=h.replace("y","");

var h3= -r1*h2[0]
var h4= -r1*h2[2]

var j = h2[0]=h3;
var j1 = h2[2]=h4;

if(arr1[0] && arr1[2])
{
arr1[2]=0

var j3 = arr1.replace(arr1[0],j);

var j4 = j3.replace(arr1.slice(2,4),j1)


}

}

 var g= arr2.slice(6,8);

var g2= arr1.slice(6,8);
console.log(g,g2)
var rs1=g-r1*g2;

var g3=arr2.slice(3,4);
var g4=j4.slice(4,5);

var z=eval(g3-g4)
var res1=rs1/z

let p1 =document.createElement("p");
let markup2= 
 `
r1=>${r1}<br>
put the value r1 =><br>
 ${arr2.slice(0,5)}-${r1}(${arr1.slice(0,5)})=>${arr2.slice(6,8)}-${r1}(${arr1.slice(6,8)})<br>
 ${arr2.slice(0,5)}${j4.slice(0,6)}=>${arr2.slice(6,8)}-${r1}(${arr1.slice(6,8)})<br>
 ${arr2.slice(3,5)}${j4.slice(3,6)}=>${arr2.slice(6,8)}-${r1}(${arr1.slice(6,8)})<br>
${z}y=>${rs1}<br>

 y=${res1}<br>

 y=${res1} => put the value in any equation(1) and equation(2)<br>
 y=${res1} => ${arr2}
  
`


var z1=arr2.slice(3,4)*res1

var z2=arr2.replace(arr2.slice(3,5),z1.toFixed(2))


var z4=z2.slice(10,13)
var z3=z2.slice(4,6)
var z13 =z2.slice(4,7)


var z10 = Number(z3)
var z11 = Number(z4)

var z12 = eval(z10+z11)
var z6 = z2.slice(0,1)
var z7 =z2.slice(1,2)
var z8 =z2.slice(0,2)
 var z9 = eval(z12/z6)

let p3 =document.createElement("p")
let markup3=
  `
 ${z2}<br>
 ${z8}=>${z4}+(${z3})<br>
 ${z8}=>${z12}<br>
 ${z7}=>${z12}/${z6}<br>
${z7}=>${z9}

<br>
x=${z9.toFixed(2)} And y=${res1.toFixed(3)}
 
 `
p1.innerHTML=markup2
p1.style.position="relative";
 p1.style.top="130";
 p1.style.left="30px"
p1.style.fontSize="20"
p3.innerHTML=markup3
p3.style.position="relative";
 p3.style.top="130";
 p3.style.left="30px"
p3.style.fontSize="20"
box.appendChild(p1)
box.append(p3)




}
}

// 2x+3y=10
// 3x+7y=12	
// 5x+9y=18	

 // oop matrix

 class makeMatrix 
{
 constructor(c1,c2,c3,c4,c5,c6,height1,width1,position,left1,top1,height2,left2,top2,left3,top3,left4,top4,left5,top5,left6,top6,color)
{
// first div ke liye 
 this.height1=height1;
 this.width1=width1;
 this.position=position;
 this.left1=left1;
 this.top1=top1;

// secound div ke liye
this.height2=height2; 
this.left2=left2;
this.top2=top2;
// third div ke liye
this.left3=left3;
this.top3=top3;

// fourth div ke liye
this.left4=left4;
this.top4=top4;
// five div ke liye
this.left5=left5;
this.top5=top5;

// six div ke liye
this.left6=left6;
this.top6=top6;
this.color=color;

this.c1=c1;
this.c2=c2;
this.c3=c3;
this.c4=c4;
this.c5=c5;
this.c6=c6;

 this.div=document.createElement("div") ;

}
 matrixAppend()
{
 // line1 div ki property
  this.div1=document.createElement("div")
 this.div1.style.height=this.height1
this.div1.style.width=this.width1
this.div1.style.position=this.position
this.div1.style.left=this.left1;
this.div1.style.top=this.top1;
this.div1.style.backgroundColor = this.color;
 // small1 line div ki property
 this.div2=document.createElement("div")
this.div2.style.height =this.height2
this.div2.style.width =this.width1;
this.div2.style.position=this.position 
this.div2.style.left=this.left2;
this.div2.style.top=this.top2;
this.div2.style.transform="rotate(90deg)"
this.div2.style.backgroundColor = this.color;
// small2 line div ki property
this.div3=document.createElement("div")
this.div3.style.height =this.height2
this.div3.style.width =this.width1;
this.div3.style.position=this.position 
this.div3.style.left=this.left3;
this.div3.style.top=this.top3;
this.div3.style.transform="rotate(90deg)"
this.div3.style.backgroundColor = this.color;
 // line2 div ki property
 this.div4=document.createElement("div") 
 this.div4.style.height=this.height1
this.div4.style.width=this.width1
this.div4.style.position=this.position
this.div4.style.left=this.left4;
this.div4.style.top=this.top4;
this.div4.style.backgroundColor = this.color;
// small3 div
 this.div5=document.createElement("div") 
 this.div5.style.height=this.height2
this.div5.style.width=this.width1
this.div5.style.position=this.position
this.div5.style.left=this.left5;
this.div5.style.top=this.top5;
this.div5.style.transform="rotate(90deg)"
this.div5.style.backgroundColor = this.color;
// small 4 div
 this.div6=document.createElement("div") 
 this.div6.style.height=this.height2
this.div6.style.width=this.width1
this.div6.style.position=this.position
this.div6.style.left=this.left6;
this.div6.style.top=this.top6;
this.div6.style.transform="rotate(90deg)"
this.div6.style.backgroundColor = this.color;
this.div.append(this.div1)
this.div.append(this.div2)
this.div.append(this.div3)
this.div.append(this.div4)
this.div.append(this.div5)
this.div.append(this.div6)
this.div.style.position="absolute";
 this.div.style.top="70"

this.div.append(this.c1)
this.div.append(this.c2)
this.div.append(this.c3)
this.div.append(this.c4)
this.div.append(this.c5)
this.div.append(this.c6)

box.append(this.div)

}


}



calculateBtn.addEventListener("click",()=>{
box.innerHTML=""
questionAppend(equation1.value,equation2.value)
solution(equation1.value,equation2.value)

 })