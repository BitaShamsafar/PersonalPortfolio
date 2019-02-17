
var x="DESIGNER"
var me=x.split('')
var i=0;
function onebyone(txt){

    if(i>txt.length-1){
        document.getElementById('txtdisplay').innerHTML="";
        return i=0;
          }
        document.getElementById('txtdisplay').append(txt[i]);
        return i++;
}


setInterval(onebyone,300,me)

var c = document.getElementById("crcl");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="#FFF";
ctx.lineWidth=1;
ctx.arc(675, 400,350, 0, 2*Math.PI,true);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#FFF";
ctx.lineWidth=1;
ctx.arc(675, 400,280, 0, 2*Math.PI,true);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#FFF";
ctx.lineWidth=1;
ctx.arc(675, 400,190, 0, 2*Math.PI,true);
ctx.stroke();


document.getElementById('menu-btn').addEventListener('click',function(){
  document.getElementById('menu').style.width='40%'; 
  document.getElementById('close').style.display='block'
})


document.getElementById('close').addEventListener("click",function(){
    document.getElementById('menu').style.width='0px';
     document.getElementById('close').style.display='none'
})


window.onscroll=function(){

    if(document.documentElement.scrollTop > document.getElementsByClassName('home-banner')[0].clientHeight) {
        for(var i=0;i<=3;i++){
            document.getElementsByClassName('progressbar')[i].style.width= document.getElementsByClassName('progressbar')[i].attributes[1].value+'%';
        }
    }


    if(document.documentElement.scrollTop>50){
        document.getElementById('topnav').classList.remove('stay');
        document.getElementById('topnav').classList.add('moving');
        document.getElementById('menu-btn').style.boxShadow="none";
        document.getElementsByClassName('R-btn')[0].style.boxShadow="none";
    }


    if(document.documentElement.scrollTop<50){
        document.getElementById('topnav').classList.add('stay');
        document.getElementById('topnav').classList.remove('moving');   
        document.getElementById('menu-btn').style.boxShadow="-6px 6px rgba(100, 100, 100, 0.2)";
        document.getElementsByClassName('R-btn')[0].style.boxShadow="6px 6px rgba(100, 100, 100, 0.2)"
    }

}

var j=document.getElementsByClassName('portfolio').length;
var iP=0;

for(var k=0;k<j;k++){
 document.getElementsByClassName('portfolio')[k].style.display="none";
}


for (iP;iP<=2;iP++){
 document.getElementsByClassName('portfolio')[iP].style.display="block";
}


function next(){

 for(var k=0;k<j;k++){
 document.getElementsByClassName('portfolio')[k].style.display="none";
}
if(iP==-1){
    iP=3;
}
 var LP=iP+2;

 if(iP==j-1){
 var OP=0;
   
     while(OP<3){
     
     document.getElementsByClassName('portfolio')[iP].style.display="block";
     iP--;OP++;
     }

     document.getElementById('next').setAttribute('disabled', 'disabled');
     return iP=j-1;
}

if(iP<j-1){
 
     var OP=0;
     iP=iP-2;
     while(OP<3){

     document.getElementsByClassName('portfolio')[iP].style.display="block";

     iP++;OP++;
   }
}

}

function prev(){ 
 document.getElementById('next').removeAttribute('disabled', 'disabled');
 for(var k=0;k<j;k++){
 document.getElementsByClassName('portfolio')[k].style.display="none";
}

if(iP <= 4){
     for (iP=0;iP<=2;iP++){
 document.getElementsByClassName('portfolio')[iP].style.display="block";
}
 return iP=3;
   
}
var limit=iP-4;
for(iP=iP-2;iP>=limit;iP--){
     document.getElementsByClassName('portfolio')[iP].style.display="block";
    
    } 
   
   
}

var blogs=[
    {
        title : "Top 10 web services provider",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image : 'blog-1.jpg',
        date : 'Oct 25, 2019'
    },
    {
        title : "Upcoming website trends",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image : 'blog-2.jpg',
        date : 'April 25, 2019'
    },
    {
        title : "Upcoming technologies",
        content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image : 'blog-3.jpg',
        date : 'May 16, 2019'
    }
];

function Blogs(){
    for(var i=0;i<blogs.length;i++){

        var blogNode=document.createElement('div')
        blogNode.setAttribute('class','post')
        

        var date=document.createElement('div')
        var dateTxt=document.createTextNode(blogs[i].date)
        date.appendChild(dateTxt);
        date.setAttribute('class','date')
        blogNode.appendChild(date);
        
        var imgWrapp=document.createElement('div')
        imgWrapp.setAttribute('class','imgWrapp')
        blogNode.appendChild(imgWrapp);
        
        blogNode.appendChild(date); 
        var image=document.createElement('img')
        image.setAttribute('src',blogs[i].image)
        imgWrapp.appendChild(image);

        var title=document.createElement('p');
        var titleTxt=document.createTextNode(blogs[i].title)
        title.appendChild(titleTxt);
        blogNode.appendChild(title);

        var title=document.createElement('p');
        var titleTxt=document.createTextNode(blogs[i].content)
        title.appendChild(titleTxt);
        blogNode.appendChild(title);

        var btn=document.createElement('button');
        var btnTxt=document.createTextNode('More ')
        btn.appendChild(btnTxt);
        blogNode.appendChild(btn);




        document.getElementById('blogList').appendChild(blogNode);
    }
}Blogs()