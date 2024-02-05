const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const sccisor = document.querySelector("#sccisor")
const display = document.querySelector(".computer-sec")

const result = document.querySelector(".result")

let value;

const chickWinSccisor = ()=>{
  if (value == 2 && comValue == 0) {
    playerLose()
    // displayRock()
  } else if (value == 2 && comValue == 1) {
    playerWin()
    // displayPaper()
  }
  
  else {
    draw()
    // displaySccisor()
  }
}

const chickWinPaper = ()=>{
  
  if (value == 1 && comValue == 2) {
    playerLose()
    // displaySccisor();
  } else if (value == 1 && comValue == 0) {
    playerWin()
    // displayRock()
  }
  
  else {
    draw();
    // displayPaper()
  }
}

const chickWinRock = () => {
  if (value == 0 && comValue == 1) {

    setInterval(playerLose(), 500)
    // displayPaper();
  } else if (value == 0 && comValue == 2) {

    setInterval(playerWin(), 500)
    // displaySccisor();
  }

  else {

    setInterval(draw(), 500)
    // displayRock();
  }
}

const loading = () => {
  result.innerHTML = `<h3>Loading...</h3>`;
}

// const displayRock = () => {
//   if (display.classList.contains('paper')) {
//     display.classList.remove('paper');
//     display.classList.add('rock');
//   }

//   else if (display.classList.contains('sccisor')) {
//     display.classList.remove('sccisor')
//     display.classList.add('rock')
//   }

//   else if (display.classList.contains('computer') && !display.classList.contains('rock') || !display.classList.contains('paper') || !display.classList.contains('sccisor')) {
//     display.classList.add('rock');
//   }

//   else {
//     alert("an error comes plzz contect with devoloper")
//   }
// }

// const displayPaper = () => {
//   if (display.classList.contains('rock')) {
//     display.classList.remove('rock');
//     display.classList.add('paper');
//   }

//   else if (display.classList.contains('sccisor')) {
//     display.classList.remove('sccisor')
//     display.classList.add('paper')
//   }

//   else if (display.classList.contains('computer') && !display.classList.contains('rock') || !display.classList.contains('paper') || !display.classList.contains('sccisor')) {
//     display.classList.add('paper');
//   }

//   else {
//     alert("an error comes plzz contect with devoloper")
//   }
// }

// const displaySccisor = () => {
//   if (display.classList.contains('paper')) {
//     display.classList.remove('paper');
//     display.classList.add('sccisor');
//   }

//   else if (display.classList.contains('rock')) {
//     display.classList.remove('rock')
//     display.classList.add('sccisor')
//   }

//   else if (display.classList.contains('computer') && !display.classList.contains('rock') || !display.classList.contains('paper') || !display.classList.contains('sccisor')) {
//     display.classList.add('sccisor');
//   }

//   else {
//     alert("an error comes plzz contect with devoloper")
//   }
// }

const computerInputFunc = () => {
  for (i = 0; i <= 10; i++) {
    const computerInput = Math.floor((Math.random() * 10) % 3)
    return (computerInput)
  }
  return (computerInput);
}

const playerWin = () => {
  result.innerHTML = `<h3>ah! You Win congratulations</h3>`;
  // result.style.background = `linear-gradient(to bottom, transparent 70%, var(--win));`;
  // display.style.background = `var(--winDisplay);`
  
  if (result.classList.contains("result-lose")) {
    result.classList.remove('result-lose');
    result.classList.add('result-win');
    display.classList.remove('lose-display');
    display.classList.add('win-display')
  }
  else if (result.classList.contains('result-draw')) {
    result.classList.remove('result-draw')
    result.classList.add('result-win');
    display.classList.remove('tie-display')
    display.classList.add('win-display')
  }

  else if (result.classList.contains('result') && !result.classList.contains('result-win') || !result.classList.contains('result-lose') || !result.classList.contains('result-draw')) {
    result.classList.add('result-win')
    display.classList.add('win-display')
  }

  else {
    alert('an error comes plzz contect to devoloper sorry')
  }
}

const playerLose = () => {
  result.innerHTML = `<h4>ah! You Lose Better Luck Next Time</h4>`;
  if (result.classList.contains("result-win")) {
    result.classList.remove('result-win');
    result.classList.add('result-lose');
    display.classList.remove('win-display')
    display.classList.add('lose-display')
  }
  else if (result.classList.contains('result-draw')) {
    result.classList.remove('result-draw')
    result.classList.add('result-lose');
    display.classList.remove('tie-display')
    display.classList.add('lose-display')
  }

  else if (result.classList.contains('result') && !result.classList.contains('result-win') || !result.classList.contains('result-lose') || !result.classList.contains('result-draw')) {
    result.classList.add('result-lose')
    display.classList.add('lose-display')
  }

  else {
    alert('an error comes plzz contect to devoloper sorry')
  }
}

const draw = () => {
  result.innerHTML = `<h3>ah! It's a Tie</h3>`;
  // result.style.background = `linear-gradient(to bottom, transparent 70%, var(--draw));`;
  if (result.classList.contains("result-win")) {
    result.classList.remove('result-win');
    result.classList.add('result-draw');
    display.classList.remove('win-display')
    display.classList.add('tie-display')
  }
  else if (result.classList.contains('result-lose')) {
    result.classList.remove('result-lose')
    result.classList.add('result-draw');
    display.classList.remove('lose-display')
    display.classList.add('tie-display')
  }

  else if (result.classList.contains('result') && !result.classList.contains('result-win') || !result.classList.contains('result-lose') || !result.classList.contains('result-draw')) {
    result.classList.add('result-draw')
    display.classList.add('tie-display')
  }

  else {
    alert('an error comes plzz contect to devoloper sorry')
  }
}




rock.addEventListener('click', () => {
  //comValue = 0
  loading()

  comValue = computerInputFunc();

  value = 0;
  setTimeout(chickWinRock, 500)
  // chickWinRock();
})

paper.addEventListener('click', () => {
  loading()
   comValue = computerInputFunc();
  value = 1;
  
  setTimeout(chickWinPaper, 500)
})

sccisor.addEventListener('click', () => {
  loading()
   comValue = computerInputFunc();
  value = 2;
  
  setTimeout(chickWinSccisor, 500)
})


window.addEventListener('load', function() {
  const body = document.querySelector('body');

  // Simulate a delay (e.g., 3 seconds) for demonstration
  setTimeout(function() {
    body.classList.remove('load');
    // body.addEventListener('transitionend', function() {
    //   loadingScreen.style.display = 'none';
    // });


  }, 3000); // Change the time as needed
});

