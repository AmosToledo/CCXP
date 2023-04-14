const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')


const lancamento = "14 april 2024"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor (segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor (segTotal / 60 / 60)% 24;
    const finalMinutos = Math.floor (segTotal / 60)% 60;
    const finalSegundos = Math.floor (segTotal)% 60;

    dia.innerHTML = formatoTempo (finalDias) + "D"
    hora.innerHTML = formatoTempo (finalHoras) + "H"
    minuto.innerHTML = formatoTempo (finalMinutos) + "M"
    segundo.innerHTML = formatoTempo (finalSegundos) + "S"
    
}
function formatoTempo ( tempo ){
    return tempo < 10? `0${tempo}` : tempo; 
}
countDown();
setInterval(countDown, 1000)

//change with Keyboard

function highlightCards(selector){
    

let element = document.querySelector(selector);
element.classList.toggle("card-highlight");

}
// change with Keyboard

function addKeyboardEventListerners(){
    document.addEventListener('keydown', (event) =>{

        
        let ingresso1 = document.querySelector('#quinta')
        let ingresso2 = document.querySelector('#sexta')
        let ingresso3 = document.querySelector('#sabado')
        let ingresso4 = document.querySelector('#domingo')

        let code = event.code;

        if ( code == "Digit1"){
            ingresso1.classList.toggle("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
            ingresso2.classList.toggle("card-off")
            ingresso3.classList.toggle("card-off")
            ingresso4.classList.toggle("card-off")
        }
        if ( code == "Digit2"){
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.toggle("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.remove("card-highlight")
          
        }
        if ( code == "Digit3"){
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.toggle("card-highlight")
            ingresso4.classList.remove("card-highlight")
           
        }
        if ( code == "Digit4"){
            ingresso1.classList.remove("card-highlight")
            ingresso2.classList.remove("card-highlight")
            ingresso3.classList.remove("card-highlight")
            ingresso4.classList.toggle("card-highlight")
            
        }       
} ,false);
}


const ingressos = []

function selectCard(selector){
    let element = document.querySelector(selector);
    element.classList.toggle('card-selector');
    if(ingressos.includes(selector)) ingressos.pop(selector);
    else ingressos.push(selector);
}


addKeyboardEventListerners()
