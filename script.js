function addValue(){
    let input = document.getElementById("textArea");
    localStorage.setItem("valore",input.value);
}

function removeValue(){
    let newInput = document.getElementById("textArea");
    localStorage.removeItem("valore",newInput.value);
}

let storageContent = localStorage.getItem("valore");
document.getElementById("storageContent").innerHTML = storageContent;

