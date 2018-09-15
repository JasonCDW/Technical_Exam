let devArray = [];
let elForm = document.getElementById('dev-form');
let elDevList = document.getElementById('dev-list');
let elStartOver = document.getElementById('startOverButton');

let Dev = function(Name, CodingSchool, ProgLang) {
    this.name = Name;
    this.code = CodingSchool;
    this.pLang = ProgLang;
};

if (localStorage.length > 0){
    let getDevs = localStorage.getItem('storageDevArray');
    devArray = JSON.parse(getDevs);
}else{
    let Jason = new Dev('Jason Durlewanger', 'Code Partners MD', ['Javascript', ' CSS', ' HTML']);
    devArray.push (Jason);
};

for(let i = 0; i < devArray.length; i++){
    let elDev = document.createElement('h3');
    elDevList.appendChild(elDev);
    elDev.innerHTML = devArray[i].name;
    let elDevSch = document.createElement('li');
    elDev.appendChild(elDevSch);
    elDevSch.innerHTML = devArray[i].code;
    let elDevExp = document.createElement('li');
    elDev.appendChild(elDevExp)
    elDevExp.innerHTML = devArray[i].pLang;
};

let elNewDev = elForm.devName;
let elDevSchool = elForm.codingSchool;
let elDevProgLang = elForm.programLang;

function submit(event) {
     event.preventDefault();
     let newDev = new Dev(elNewDev.value, elDevSchool.value ,elDevProgLang.value);
     devArray.push(newDev);
    let elDev = document.createElement('h3');
    elDevList.appendChild(elDev);
    elDev.innerHTML = elNewDev.value;
    let elDevSch = document.createElement('li');
    elDev.appendChild(elDevSch);
    elDevSch.innerHTML = elDevSchool.value;
    let elDevExp = document.createElement('li');
    elDev.appendChild(elDevExp)
    elDevExp.innerHTML = elDevProgLang.value;
    localStorage.setItem('storageDevArray', JSON.stringify(devArray));
}
elForm.addEventListener('submit', submit);

function startOver(){
    localStorage.clear();
    location.reload();
}

elStartOver.addEventListener('click', startOver);
