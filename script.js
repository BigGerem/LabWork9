let user = prompt("Please enter your name", "User");
while((user==null) ||(user=="")){
	user = prompt("You haven`t entered your name. Please enter your name again", "User");
}
let body = document.querySelector('body');
let content = document.querySelector('#content');
let userField = document.querySelector('#userField');
let userName = document.querySelector('#userName');
let divUserPoints = document.querySelector('#divUserPoints');
let userPoints = document.querySelector('#userPoints');
let userCard = document.querySelector('#userCard');
let computerField = document.querySelector('#computerField');
let computerName = document.querySelector('#computerName');
let divComputerPoints = document.querySelector('#divComputerPoints');
let computerPoints = document.querySelector('#computerPoints');
let computerCard = document.querySelector('#computerCard');
let divOptions = document.querySelector('#divOptions');
let partyResult = document.querySelector('#partyResult');
let btnGenerate = document.querySelector('#btnGenerate');
let btnReturn = document.querySelector('#btnReturn');
btnGenerate.setAttribute('type', 'button');
btnReturn.setAttribute('type', 'button');
btnGenerate.setAttribute ('value', 'Generate');
btnReturn.setAttribute ('value', 'New Game');
userCard.setAttribute ('alt', 'Ваша карта');
computerCard.setAttribute ('alt', 'Карта Сomputer');
var wWidth = window.innerWidth;
console.log(wWidth);
if (wWidth >= 480) {
	body.setAttribute('style', 'width: 100%; height: 99%; margin: 0;');
	content.setAttribute('style', 'display: flex; width: 50%; margin: 0 auto; align-items: center; justify-content: space-between; height: 100%;');
	userField.setAttribute('style', 'width: 33%; display: flex; align-items: center; flex-direction: column; margin: 0; height:340px;');
	divOptions.setAttribute('style', 'width: 33%; display: flex; align-items: center; flex-direction: column; margin: 0; height: 340px;');
	computerField.setAttribute('style', 'width: 33%; display: flex; align-items: center; flex-direction: column; margin: 0; height: 340px;');
	userName.setAttribute('style', 'margin: 0 auto; font-size: 32px; font-family: Calibri; font-weight: 600;');
	computerName.setAttribute('style', 'margin: 0 auto; font-size: 32px; font-family: Calibri; font-weight: 600;');
	divUserPoints.setAttribute('style', ' margin: 20px auto; display: flex; width: 80%; background: #45b3d1; height: 40px; border-radius: 10px; align-items: center; justify-content: center;');
	divComputerPoints.setAttribute('style', ' margin: 20px auto; display: flex; width: 80%; background: #45b3d1; height: 40px; border-radius: 10px; align-items: center; justify-content: center;');
	userPoints.setAttribute('style', 'margin: 0; font-size: 30px; font-family: Calibri; font-weight: 600;');
	computerPoints.setAttribute('style', 'margin: 0; font-size: 30px; font-family: Calibri; font-weight: 600;');
	computerCard.setAttribute('style', 'width: 90%; display: flex; margin: 0 auto;  align-items: center;');
	userCard.setAttribute('style', 'width: 90%; display: flex; margin: 0 auto; align-items: center;');
	partyResult.setAttribute('style', 'margin-top: 70px;font-size: 14px;font-family: Calibri;font-weight: 600; margin-bottom: 90px;');
	btnGenerate.setAttribute('style', 'width: 90%;margin: 20px auto;font-size: 28px;font-family: Calibri;font-weight: 600;border-radius: 10px;padding: 10px auto;background: #00ff40;border: none;');
	btnReturn.setAttribute('style', 'margin: 20px auto;width: 90%;font-size: 28px;font-family: Calibri;font-weight: 600;border-radius: 10px;padding: 10px auto;background: #00ff40;border: none;');
}
else{
	body.setAttribute('style', 'width: 100%; height: 98%; margin: 15px 0;');
	content.setAttribute('style', 'display: flex; width: 80%; height:100%; margin: 0 auto; flex-direction: column;');
	userField.setAttribute('style', 'width: 100%;display: flex;align-items: center;flex-direction: column;height: 41%;margin: 0;');
	divOptions.setAttribute('style', 'width: 100%;display: flex;align-items: center;flex-direction: column;height: 18%;margin: 0;');
	computerField.setAttribute('style', 'width: 100%;display: flex;align-items: center;flex-direction: column;height: 41%;margin: 0;');
	userName.setAttribute('style', 'margin: 0 auto; font-size: 80px; font-family: Calibri; font-weight: 600;');
	computerName.setAttribute('style', 'margin: 0 auto; font-size: 80px; font-family: Calibri; font-weight: 600;');
	divUserPoints.setAttribute('style', 'display: flex;width: 50%;background: #45b3d1;height: 100px;border-radius: 30px;align-items: center;justify-content: center;margin: 20px 0;');
	divComputerPoints.setAttribute('style', 'display: flex;width: 50%;background: #45b3d1;height: 100px;border-radius: 30px;align-items: center;justify-content: center;margin: 20px 0;');
	userPoints.setAttribute('style', 'margin: 0; font-size: 60px; font-family: Calibri; font-weight: 600;');
	computerPoints.setAttribute('style', 'margin: 0; font-size: 60px; font-family: Calibri; font-weight: 600;');
	computerCard.setAttribute('style', 'width: 50%; display: flex; margin: 0 auto; align-items: center;');
	userCard.setAttribute('style', 'width: 50%; display: flex; margin: 0 auto; align-items: center;');
	partyResult.setAttribute('style', 'margin-top: 70px;font-size: 40;font-family: Calibri;font-weight: 600;margin-bottom: 30px;');
	btnGenerate.setAttribute('style', ' margin: 10px auto;font-size: 50px;font-family: Calibri;font-weight: 600;border-radius: 10px;background: #00ff40;border: none;width: 40%;');
	btnReturn.setAttribute('style', 'margin: 10px auto;font-size: 50px;font-family: Calibri;font-weight: 600;border-radius: 10px;padding: 10px auto;background: #00ff40;border: none;width: 40%;');
}
userName.innerHTML=user;
computerName.innerHTML="Computer";
var count;
var userCardPoint;
var computerCardPoint;
var userCardPointNow;
var computerCardPointNow;
var cards = new Array(6,7,8,9,10,2,3,4,11);
NewGame();
btnGenerate.onclick = () => {
	if(count<3){
		count++;
		partyResult.innerHTML = "This is " + count + " attempt out of 3" ;
		userCardPointNow = cards[Math.floor(Math.random()*9)];
		userCardPoint+=userCardPointNow;
		userPoints.innerHTML=userCardPoint;
		computerCardPointNow = cards[Math.floor(Math.random()*9)];
		computerCardPoint+=computerCardPointNow;
		computerPoints.innerHTML=computerCardPoint;
		CardDefinition(userCardPointNow,0);
		CardDefinition(computerCardPointNow,1);
		
	}
	else{
		if((userCardPoint==computerCardPoint)&&(count==3)){
			gameResult = "Draw. Do you want to play again?";
			if (confirm(gameResult)==true){
				NewGame();
			}
		}
		if((userCardPoint<computerCardPoint)&&(count==3)){
			gameResult = "Computer won. Do you want to play again?";
			if (confirm(gameResult)==true){
				NewGame();
			}
		}
		if((userCardPoint>computerCardPoint)&&(count==3)){
			gameResult = user + " won. Do you want to play again?";
			if (confirm(gameResult)==true){
				NewGame();
			}
		}
	}
}
btnReturn.onclick = () => {
	NewGame();
}
function NewGame(){
	partyResult.innerHTML="New game started!";
	count=0;
	userCardPointNow=0;
	computerCardPointNow=0;
	userPoints.innerHTML=0;
	computerPoints.innerHTML=0;
	userCard.setAttribute ('src','img/zero.png');
	computerCard.setAttribute ('src','img/zero.png');
	userCardPoint=0;
	computerCardPoint=0;
}
function CardDefinition(cardPointNow, card){
	if(card==0){
		if(cardPointNow==2){
			userCard.setAttribute ('src','img/user2valet.png');
		}
		if(cardPointNow==3){
			userCard.setAttribute ('src','img/user3dama.png');
		}
		if(cardPointNow==4){
			userCard.setAttribute ('src','img/user4korol.png');
		}
		if(cardPointNow==6){
			userCard.setAttribute ('src','img/user6.png');
		}
		if(cardPointNow==7){
			userCard.setAttribute ('src','img/user7.png');
		}
		if(cardPointNow==8){
			userCard.setAttribute ('src','img/user8.png');
		}
		if(cardPointNow==9){
			userCard.setAttribute ('src','img/user9.png');
		}
		if(cardPointNow==10){
			userCard.setAttribute ('src','img/user10.png');
		}
		if(cardPointNow==11){
			userCard.setAttribute ('src','img/user11tuth.png');
		}
	}
	else{
		if(cardPointNow==2){
			computerCard.setAttribute ('src','img/computer2valet.png');
		}
		if(cardPointNow==3){
			computerCard.setAttribute ('src','img/computer3dama.png');
		}
		if(cardPointNow==4){
			computerCard.setAttribute ('src','img/computer4korol.png');
		}
		if(cardPointNow==6){
			computerCard.setAttribute ('src','img/computer6.png');
		}
		if(cardPointNow==7){
			computerCard.setAttribute ('src','img/computer7.png');
		}
		if(cardPointNow==8){
			computerCard.setAttribute ('src','img/computer8.png');
		}
		if(cardPointNow==9){
			computerCard.setAttribute ('src','img/computer9.png');
		}
		if(cardPointNow==10){
			computerCard.setAttribute ('src','img/computer10.png');
		}
		if(cardPointNow==11){
			computerCard.setAttribute ('src','img/computer11tuth.png');
		}
	}
}