const favChap = document.querySelector("#favchap");
const  addBtn = document.querySelector("#add-btn");
const chapList = document.querySelector("#list");

addBtn.addEventListener("click", function(){
    if (favChap.value !== "") {
    const newElement = document.createElement('li');
    const newXBtn = document.createElement('button');

    newElement.textContent = favChap.value;
    newXBtn.textContent = "\u274C";

    newElement.appendChild(newXBtn);
    chapList.appendChild(newElement);

    favChap.value = "";
    favChap.focus();

    newXBtn.addEventListener("click", function(){
        chapList.removeChild(newElement);
        favChap.focus();
    });
    };
});
