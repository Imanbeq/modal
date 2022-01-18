const btn = document.querySelector("#input-button");
const inpt = document.querySelector("#inp");
const cls = document.querySelector("#close");

function hideInput(){
    inpt.style.display = 'block';
};

function openInput(){
    inpt.style.display = 'none';
}

btn.addEventListener('click', hideInput);
cls.addEventListener('click', openInput);
