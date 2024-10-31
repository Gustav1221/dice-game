//togloomiin buh gazar ashiglagdah global huvisagchid
//togloom duussan esehiig hadgalah tulviin huvisagch
var isNewGame = true;
// toglogchiin eeljiig hadgalah huvisagch, 1 dugeer toglogchiig 0, 2dugaar toglogchiig 1 gej temdegley
var activePlayer;
// toglogchdiin tsugluulsan onoog hadgalah huvisagch
var scores;
//toglogchiin eeljindee tsugluulsan onoog hadgalah huvisagch
var roundScore;
//shoonii zurgiig uzuuleh elementiig domoos haij olood end hadggalya
var diceDOM = document.querySelector('.dice');
//togloomiig shineer ehlehed beltgene
function initGame(){
    activePlayer = 0;
    scores = [0,0];
    roundScore = 0;
    //togloom ehlelee gedeg tuluvt oruulna
    isNewGame = true;
    //document.querySelector("#score-1").innerHTML="<em›Yes!<em>";| textContentnd html bichij bolku html bichey gevel innerhtml

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //toglogchdiin neriig butsaaj gargah
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    //dahin ehleh uyd winner bolson toglogchiin ungiig butsaan heviin bolgoh
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');

    diceDOM.style.display='none';

}
initGame();

//SHOOG SHIDEH EVENTLISTENER. negl udaa negl gazar bichij bga bolhoor anonymous function bichiv. 
document.querySelector('.btn-roll').addEventListener('click', function (){
    if(isNewGame)
{
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
        switchToNextPlayer();
    }
}else{
    alert('Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү');
}
});
//hold buttonii event listener
document.querySelector(".btn-hold").addEventListener('click', function(){
    if(isNewGame){
        //ug toglogchiin tsugluulsan eeljnii onoog global onoon deer nemj ugnu
    scores[activePlayer]= scores[activePlayer] + roundScore;
    //Ug toglogch hojson esehiig (onoo n 100-s ih) shalgah
    //delgets deer onoog uurchilnu
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    if(scores[activePlayer] >= 10){
        isNewGame = false;
        document.getElementById('name-' +activePlayer).textContent = 'WINNNER!!!';
        document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
        document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
    }else{
    //toglogchiin eeljiig solino
    switchToNextPlayer();
    }
}else{
    alert('Тоглоом дууссан байна. NEW GAME товчийг дарж шинээр эхлэнэ үү');
}
});
//ene function n togloh eeljiig daraachiin toglogchruu shiljuuldeg. DONT REPEAT YOURSELF(DRY)
function switchToNextPlayer(){
    roundScore = 0;
    document.getElementById('current-' + activePlayer).textContent = 0;
    // hervee idevhtei toglogch n 0 baival idevhtei toglogchiig 1 bolgo
    //ugui bol idevhtei toglogchiing 0 bolgo
    // gurvalsam operation. (uur neg bichiglel ghde deed taliin bichsentei yg adil)
    activePlayer === 0? (activePlayer = 1) : (activePlayer = 0);
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector(".player-1-panel").classList.toggle("active");
     // shoog eelj soligdoh uyd alga bolgono
    diceDOM.style.display='none';
}
//shine game ehluuleh buttonii eventlistener
document.querySelector('.btn-new').addEventListener('click', initGame);
