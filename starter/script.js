var scores,activeplayer,roundscore,gameplay;
init();

//console.log(Math.floor(Math.random()*6)+1);
//dice=(Math.floor(Math.random()*6)+1);
//console.log(dice);
//document.querySelector('#current--'+activeplayer).textContent=dice;
//document.querySelector('#current--'+activeplayer).innerHTML='<em>'+dice+'</em>';
document.querySelector('.dice').style.display='none';
//console.log(x);

/*document.querySelector('.btn--roll').addEventListener('click',function () {

  var dice=(Math.floor(Math.random()*6)+1);
  var diceDOM=document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src='dice-'+dice+'.png';

});*/


document.querySelector('.btn--roll').addEventListener('click',function () {
/*  var dice=(Math.floor(Math.random()*6)+1);
  var diceDOM=document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src='dice-'+dice+'.png';
  if (dice!==1) {
    roundscore+=dice;
    document.querySelector('#current--'+activeplayer).textContent=roundscore;
  }else {
    activeplayer===0 ? activeplayer=1 : activeplayer=0;
    roundscore=0;
    document.getElementById('current--0').textContent='0';
    document.getElementById('current--1').textContent='0';

    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
    document.querySelector('.dice').style.display='none';
    //document.querySelector('.player--0').classList.remove('player--active');
    //document.querySelector('.player--1').classList.add('player--active');

  }  */
  if (gameplay) {


  var dice=(Math.floor(Math.random()*6)+1);
  var diceDOM=document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src='dice-'+dice+'.png';
  if (dice!==1) {
    roundscore+=dice;
  document.querySelector('#current--'+activeplayer).textContent=roundscore;
}else {
  changeplayer();
}
}
});

function changeplayer() {
  activeplayer===0 ? activeplayer=1:activeplayer=0;
  roundscore=0;
  document.getElementById('current--0').textContent='0';
  document.getElementById('current--1').textContent='0';
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
  document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn--hold').addEventListener('click',function () {
  if (gameplay) {


  scores[activeplayer]+=roundscore;
   document.querySelector('#score--'+activeplayer).textContent=scores[activeplayer];
//  document.querySelector('#score--'+activeplayer).textContent=roundscore;

  if (scores[activeplayer]>=10) {
    document.querySelector('#name--'+activeplayer).textContent='Winner!';
    document.querySelector('.dice').style.display='none';
    document.querySelector('.player--'+activeplayer).classList.add('.player--winner');
    document.querySelector('.player--'+activeplayer).classList.remove('.player--active');
    gameplay=false;


  }
  else {
    changeplayer();
  }
    }

});

function init() {
  scores=[0,0];
  activeplayer=0;
  roundscore=0;
  document.getElementById('score--0').textContent='0';
  document.getElementById('score--1').textContent='0';
  document.getElementById('current--0').textContent='0';
  document.getElementById('current--1').textContent='0';
    document.querySelector('#name--0').textContent='player1';
    document.querySelector('#name--1').textContent='player2';
      document.querySelector('.player--0').classList.add('.player--active');
      document.querySelector('.dice').style.display='none';
      gameplay=true;

}

document.querySelector('.btn--new').addEventListener('click',init);
