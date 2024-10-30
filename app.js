// toglogchiin eeljiig hadgalah huvisagch, 1 dugeer toglogchiig 0, 2dugaar toglogchiig 1 gej temdegley

var activePlayer = 0;

// toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores = [0,0];
//toglogchiin eeljindee tsugluulsan onoog hadgalah huvisagch
var roundScore = 0;
//shoonii ali talaaraa buusniig hadgalah huvisagch, 1-6gesen utgiig ene huvisagchind sanamsarguigeer uusgej ugnu

// <div class="player-score" id="score-0">43</div> js-eer domruu handaj utgiig n uurchlj bn. textcontent gedeg ugugdulruun handaj bn yrunhiiduu 49gesen ug
//window.document.querySelector('#score-0').textContent = dice;
//document.querySelector("#score-1").innerHTML="<em›Yes!<em>";| textContentnd html bichij bolku html bichey gevel innerhtml

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
var diceDOM = document.querySelector('.dice');
//shoog shideh eventlistener. negl udaa negl gazar bichij bga bolhoor anonymous function bichiv. 
document.querySelector('.btn-roll').addEventListener('click', function (){
    //1-6 dotorh random 1 too gargaj avna
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //shoonii zurgiig web deer gargaj irne
    diceDOM.style.display='block';
    //uussen random toond hargalzah shoonii zurag
    diceDOM.src='dice-'+diceNumber+'.png';
    // Буусан тоо нь 1 ээс ялгаатай бол идэвхтэй тоглогчийн ээлжийн оноог нэмэгдуулнэ.
    if(diceNumber !== 1){
        //1-ees ylgaatai too buulaa. buusan toog toglogchid nemj ugnu
        roundScore = roundScore + diceNumber;
        document.getElementById('current-' + activePlayer).textContent = roundScore;
    }else{
        //1 buusan tul toglogchiin eeljiig end nemj ugnu

        //ene toglogchiin eeljindee tsugluulsan onoog 0 bolgo
        roundScore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;
        // hervee idevhtei toglogch n 0 baival idevhtei toglogchiig 1 bolgo
        //ugui bol idevhtei toglogchiing 0 bolgo
        /*if(activePlayer === 0){
            activePlayer === 1;
        }else{
            activePlayer === 0;
        }*/
        /*var obj = {
            name : 'john',
            job : 'programmist',
            address : {
                location : 'ub'
            }
        }
        obj.address.location()*/


        // gurvalsam operation. (uur neg bichiglel ghde deed taliin bichsentei yg adil)
        activePlayer === 0? (activePlayer = 1) : (activePlayer = 0);
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector(".player-1-panel").classList.toggle("active");
         // shoog eelj soligdoh uyd alga bolgono
         diceDOM.style.display='none';
        

        

        
    }
}
);
