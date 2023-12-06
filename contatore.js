let i = 0;
function contatore (){
    i=i + 1; //incremento ogni volta che la funzione viene richiamata
    document.getElementById("counter").innerText = i; //intercetto il tag nel dom
    sessionStorage.setItem("value",i); //salvo l'incremento i
}

setInterval(contatore,1000);