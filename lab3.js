p = document.querySelector(".result");
if(p){
p.addEventListener("click", function(){
if (d==1) {alert (x+y);}
if (d==2) {alert (x-y);}
if (d==3) {alert (x*y);}
if (d==4) {alert (x/y);}
else {alert ("Вы ввели неверное действие");}
});
}