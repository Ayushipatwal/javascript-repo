// let letters="0123456789ABCDEF";
// let color="#";
function randomgen() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random()* 16);
        color += letters[random];
    }
     document.body.style.backgroundColor = color;
}

// for(let i=0;i<6;i++){
//     let random= Math.floor(Math.random()*16);
//     color+=letters[random];
// }
// document.body.style.backgroundColor = color

// const btn= document.getElementsByTagName("button");
// btn.addEventListener("click", randomgen);
const btn = document.querySelector("button");
btn.addEventListener("click", randomgen);
