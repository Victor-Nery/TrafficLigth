const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0

const trafficLigth = (event) => {
   turnOn[event.target.id]()
   
}

const nextIndex = ()=>{

   //colorIndex = colorIndex > 2 ? ++colorIndex : 0

   if(colorIndex < 2){
      colorIndex++
   }else{
      colorIndex = 0
   }
}


const changeColor = ()=>{

   const colors = ['red', 'yellow','green']
   const color = colors[colorIndex]
   turnOn[color]()
   nextIndex()
}


const turnOn = {
   'red': () => img.src ='styles/vermelho.png',
   'yellow': () => img.src ='styles/amarelo.png',
   'green': () => img.src ='styles/verde.png',
   'automatic': () => setInterval(changeColor, 1000) 
}


buttons.addEventListener('click', trafficLigth)