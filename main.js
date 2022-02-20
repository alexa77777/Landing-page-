const yab = document.getElementById("Design"); // Получение элема на который кляцаем
const adaptDesign = document.getElementById("adaptDesign");
const deskDesign = document.getElementById("deskDesign");
const userInter = document.getElementById("userInter");
const microUx = document.getElementById("microUx");

yab.onclick = () =>{ //Задаем клик
    const yab2 = document.getElementById("point1");//Получаем скрытый элем
    if(yab2.style.display == '' || yab2.style.display == 'none'){
        yab2.style.display = 'block';
   }
   else {
        yab2.style.display = 'none';
   }
}

adaptDesign.onclick = () =>{
    const yab2 = document.getElementById("point2");

    if(yab2.style.display == '' || yab2.style.display == 'none'){
        yab2.style.display = 'block';
   }
   else {
        yab2.style.display = 'none';
   }
}

deskDesign.onclick = () =>{
    const yab2 = document.getElementById("point3");

    if(yab2.style.display == '' || yab2.style.display == 'none'){
        yab2.style.display = 'block';
   }
   else {
        yab2.style.display = 'none';
   }
}

userInter.onclick = () =>{
    const yab2 = document.getElementById("point4");

    if(yab2.style.display == '' || yab2.style.display == 'none'){
        yab2.style.display = 'block';
   }
   else {
        yab2.style.display = 'none';
   }
}

microUx.onclick = () =>{
    const yab2 = document.getElementById("point5");

    if(yab2.style.display == '' || yab2.style.display == 'none'){
        yab2.style.display = 'block';
   }
   else {
        yab2.style.display = 'none';
   }
}
new Swiper('.contentEbychegoSlidera');