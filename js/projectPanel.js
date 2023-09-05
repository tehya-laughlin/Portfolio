const left = document.getElementById('left');
const right = document.getElementById('right');

const p1 = document.getElementById('panel1');
const p2 = document.getElementById('panel2');
const p3 = document.getElementById('panel6');
const p4 = document.getElementById('panel4');
const p5 = document.getElementById('panel5');
const p6 = document.getElementById('panel3');
const p7 = document.getElementById('panel7');
const last = p7;

const lp1 = document.getElementById('form');
const lp3 = document.getElementById('designfoundations');
const lp5 = document.getElementById('appm3170');
const lp6 = document.getElementById('cmdgame');
const lp4 = document.getElementById('image');
const lp2 = document.getElementById('atls2200');
const lp7 = document.getElementById('graphicDesign');

let arrP = [p1, p2, p3, p4, p5, p6, p7];

let indexLast = 6;
let num = 0;
let active = arrP[num];

function leftArrowClicked(){
  //deactivate active
  activate(active);
  //set active to new active panel
  if(num === 0){
    num = indexLast;
  } else {
    num --;
  }
  active = arrP[num];
  //activate new one
  activate(active);

}

function rightArrowClicked(){
  //deactivate active
  activate(active);
  //set active to new active panel
  if(num === indexLast){
    num = 0;
  } else {
    num++;
  }
  active = arrP[num];
  //activate new one
  activate(active);
}

function activate(p){
  p.classList.toggle("panelHidden");
}

function goToPanel(p){
  console.log('In goToPanel');
  //deactivate active
  activate(active);
  //set active to new active panel
  num = p;
  active = arrP[num];
  //activate new one
  activate(active);
}

left.addEventListener('click', leftArrowClicked);
right.addEventListener('click', rightArrowClicked);

lp1.addEventListener('click', (evt) => goToPanel(0));
lp2.addEventListener('click', (evt) => goToPanel(1));
lp3.addEventListener('click', (evt) => goToPanel(2));
lp4.addEventListener('click', (evt) => goToPanel(3));
lp5.addEventListener('click', (evt) => goToPanel(4));
lp6.addEventListener('click', (evt) => goToPanel(5));
lp7.addEventListener('click', (evt) => goToPanel(6));
