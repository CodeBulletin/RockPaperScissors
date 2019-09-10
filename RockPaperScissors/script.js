let userscore = 0;
let compscore = 0;
const userscore_div = document.getElementById('userScore');
const compscore_div = document.getElementById('compScore');
const message1_div = document.querySelector('.Message1 > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const gameopt = ['r', 's', 'p'];

let converttoword = function(word){
  if(word === 'r')
    return 'rock';
  else if(word === 'p')
    return 'paper';
  else
    return 'Scissor';
}

let computer = function(){
  let randval = Math.floor(Math.random()*3);
  return gameopt[randval];
}

let win = function(userOpt, compOpt){
  userscore++;
  userscore_div.innerHTML = userscore;
  smalluser = '(user)'.fontsize(3).sub();
  smallcomp = '(comp)'.fontsize(3).sub();
  message1_div.innerHTML = `${converttoword(userOpt)}${smalluser} beats ${converttoword(compOpt)}${smallcomp}. You won!`;
  document.getElementById(userOpt).classList.add('green-glow');
  setTimeout(() => document.getElementById(userOpt).classList.remove('green-glow'), 300);
}

let lose = function(userOpt, compOpt){
  compscore++;
  compscore_div.innerHTML = compscore;
  smalluser = '(user)'.fontsize(3).sub();
  smallcomp = '(comp)'.fontsize(3).sub();
  message1_div.innerHTML = `${converttoword(userOpt)}${smalluser} loses by ${converttoword(compOpt)}${smallcomp}. You Lose...`;
  document.getElementById(userOpt).classList.add('red-glow');
  setTimeout(() => document.getElementById(userOpt).classList.remove('red-glow'), 300);
}

let draw = function(userOpt, compOpt){
  smalluser = '(user)'.fontsize(3).sub();
  smallcomp = '(comp)'.fontsize(3).sub();
  message1_div.innerHTML = `${converttoword(userOpt)}${smalluser} draws by ${converttoword(compOpt)}${smallcomp}. Its a draw`;
  document.getElementById(userOpt).classList.add('gray-glow');
  setTimeout(() => document.getElementById(userOpt).classList.remove('gray-glow'), 300);
}

let game = function(userChoosen){
  compChoosen = computer();
  switch (userChoosen + compChoosen) {
    case 'rs':
    case 'pr':
    case 'sp':
      win(userChoosen, compChoosen);
      break;
    case 'ps':
    case 'rp':
    case 'sr':
      lose(userChoosen, compChoosen);
      break;
    default:
      draw(userChoosen, compChoosen);
      break;
  }
}

let main = function(){
  rock_div.addEventListener("click", () => game('r'));

  paper_div.addEventListener("click", () => game('p'));

  scissor_div.addEventListener("click", () => game('s'));
}

main();
