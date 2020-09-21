function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }

const a = getRandomInt(1, 100);
const b = getRandomInt(1, 100);


let numA ;
let numB;


(a > b) ? (numA = a) && (numB = b) : (numB = a) && (numA = b) 


const correctAnswer = getRandomInt(numB, numA);


console.log(correctAnswer);


document.getElementById('num1').innerText = numB;
document.getElementById('num2').innerText = numA;
document.getElementById('correct-answer').innerText = correctAnswer;


document.getElementById('play-game').addEventListener('click', () => {
    let y = 0;
    document.getElementById('correct-statement').style.display = 'block';
    document.getElementById('play-game').style.display = 'none';
    for(let i = 0; i <3 ; i++) {
        let x = parseFloat(prompt('What Is the number : '));
        if(x === correctAnswer ){
            document.getElementById('win-container').style.display = 'block';
            break;
        } else{
            (x > correctAnswer) ?  alert("Correct answer is smaller") : alert("Correct answer is bigger")
             y = y + 1; 
             (y == 3) && (document.getElementById('lost-container').style.display = 'block')
                
        }
        
    }
    
})

