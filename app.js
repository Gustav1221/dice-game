// toglogchiin eeljiig hadgalah huvisagch, 1 dugeer toglogchiig 0, 2dugaar toglogchiig 1 gej temdegley

var activePlayer = 1;

// toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0,0];
//toglogchiin eeljindee tsugluulsan onoog hadgalah huvisagch
var roundScore = 2;
//shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6gesen utgiig ene huvisagchind sanamsarguigeer uusgej ugnu

// <div class="player-score" id="score-0">43</div> js-eer domruu handaj utgiig n uurchlj bn. textcontent gedeg ugugdulruun handaj bn yrunhiiduu 49gesen ug
//window.document.querySelector('#score-0').textContent = dice;
//document.querySelector("#score-1").innerHTML="<em›Yes!<em>";| textContentnd html bichij bolku html bichey gevel innerhtml

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
var diceDOM = document.querySelector('.dice');
//negl udaa negl gazar bichij bga bolhoor anonymous function bichiv
document.querySelector('.btn-roll').addEventListener('click', function (){
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    diceDOM.style.display='block';
    diceDOM.src='dice-'+diceNumber+'.png';
}
);
