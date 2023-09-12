function iniciarJogo(){
    const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const score = document.querySelector('.score')
const floor = document.querySelector('.floor')
const floor2 = document.querySelector('.floor2')
const clouds = document.querySelector('.clouds')
const clouds2 = document.querySelector('.clouds2')
const clouds3 = document.querySelector('.clouds3')
const clouds4 = document.querySelector('.clouds4')
let count = 0


/*================= Jump =================*/
const jump = () => {
    mario.classList.add('jump')
    setTimeout(()=>{
        mario.classList.remove('jump')
    }, 500)
}

document.addEventListener('keydown', (event) => {
    if (event.key === ' ' || event.key === 'ArrowUp') {
      jump();
    }
  })

/*================= Score =================*/
const scorepoint = setInterval(() => {
    
    count++
    score.innerHTML = `SCORE: ${count}`
}, 100)

/*================= Death =================*/
const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft
    const marioPosition = window.getComputedStyle(mario).bottom.replace('px', '')
     
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        floor.style.animationPlayState = 'paused'
        floor2.style.animationPlayState = 'paused'

        clouds.style.animationPlayState = 'paused'
        clouds2.style.animationPlayState = 'paused'
        clouds3.style.animationPlayState = 'paused'
        clouds4.style.animationPlayState = 'paused'

        mario.src = 'images/game-over.png'
        mario.style.width = '130px'
        
        /* mario.style.marginLeft = '10px' */

        clearInterval(loop)
        clearInterval(scorepoint)
        exibirUltimaPontuacao()
   }
}, 10);



}

document.addEventListener("keydown", function(event) {
    if(event.keyCode === 32 || event.keyCode == 38 ) {
        iniciarJogo()
    }   
})