
let btnnombre = document.querySelector("#btnnombre");
let inputform = document.querySelector("#inputform");
let copybtn = document.querySelector("#inputbtn");
let btn = document.querySelector('#btngenerate');
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");


const minuscule = "azertyuiopqsdfghjklmwxcvbn";
const majuscule = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const number = "0123456789"
const special = "&(-_ç)=-/:@$^{}][|~#.!,;§%µ*ù^²àç<>";
let motdepass 


// fonction pour generer le mdp 

function generatepassword() {
    let characterefinal =""
    if (btn1.checked==true) {
        characterefinal=characterefinal+majuscule
        
    }
    if (btn2.checked==true){
        characterefinal=characterefinal+minuscule
        
    }
    if (btn3.checked==true){
        characterefinal=characterefinal+number
        
    }
   if (btn4.checked==true){
        characterefinal=characterefinal+special
        
    }
    if ((btn1.checked==false) && (btn2.checked==false) && (btn3.checked==false) && (btn4.checked==false)){
        alert("plz chose length and minimum one V")
        // inputform.value ="plz chose length and minimum one V"
        // console.log(inputform.value);

    }
    motdepass ="";
    for (let index = 0; index < btnnombre.value; index++) {
        let indexcaract = Math.floor(Math.random()* characterefinal.length);
        motdepass += characterefinal[indexcaract];
    }
    
    inputform.value = motdepass
    console.log(motdepass);
}

// fonction pour copier l input dans le press papier

function copy() {
    inputform.select();
document.execCommand("copy");
  }

// trigger du btn generate password et copie dans le press papier 

copybtn.addEventListener("click", copy);  
btn.addEventListener('click', generatepassword)