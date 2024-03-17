



const kiIras = document.getElementById("kifejezes");
const eredmeny = document.getElementById("eredmeny");




export function gombGeneralas(){

    const MuvJelELEM = document.getElementsByClassName("szamok")[0]
    let gombok = ``;

    for (let i = 9; i >= 0; i--) {
        gombok += `<button class="szam" id="szam${i}">${i}</button>`;
    }
    gombok += ``
    MuvJelELEM.innerHTML += gombok;
}









export function Kattintas(){

    function Masolas(event){
        const szam = event.target;

        if(szam.textContent === "x"){
            kiIras.innerHTML += "*";
        } else if(szam.textContent === "÷"){
            kiIras.innerHTML += "/";
        } else {
            kiIras.innerHTML += szam.textContent;
        }


        function tartalmazSzamot(tartalom) {
            const regex = /[0-9]/;
            return regex.test(tartalom);
        }

        
        const tartalom = kiIras.textContent;
        
        if (tartalmazSzamot(tartalom)) {
            for (let i = 0; i < muveletek.length; i++) {
                muveletek[i].addEventListener("click", Masolas);
            }
            console.log("Helyes, van szám");
        } else {
            for (let i = 0; i < muveletek.length; i++) {
                muveletek[i].removeEventListener("click", Masolas);
            }
            console.log("Kell számot is írni");
        }
    }

    const szamok = document.querySelectorAll(".szam");
    const muveletek = document.querySelectorAll(".muvelet");

    for (let i = 0; i < szamok.length; i++) {
        szamok[i].addEventListener("click", Masolas);
    }
}









export function Elojel(){
    const elojel = document.getElementById("elojel");
    let jel = "+";
    
    elojel.addEventListener("click", function(){
        if (jel === "+") {
            kiIras.textContent = "-" + kiIras.textContent;
            jel = "-";
        } else {
            kiIras.textContent = kiIras.textContent.replace("-", "");
            jel = "+";
        }
    });
}







export function Torles(){
    const torles = document.getElementById("torles");
    torles.addEventListener("click", function() {
        kiIras.textContent = "";
        eredmeny.textContent = "";
    });
}







export function Szamitas(){
    const egyenlo = document.getElementById("egyenlo");
    egyenlo.addEventListener("click", function(){
        let kiSzamit = eval(kiIras.textContent);
        kiIras.textContent = "";
        eredmeny.textContent = "";
        eredmeny.innerHTML = kiSzamit;
        console.log("Egyenlet: " + kiIras.textContent + " Eredmény: " + kiSzamit)
    });
}























