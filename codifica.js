const btn = document.querySelector('#big')
const btn2 = document.querySelector('#big2')
let resultado = ""   
const convertArray = (frase) => {
    const espaco = /\s/gi
    return Array.prototype.slice.call(frase.replace(espaco,' ').split(','))
}
const result = document.getElementById('TD')
btn.addEventListener("click",cifrar,false)
btn2.addEventListener("click",limpar)

function cifrar() {   
    let entrada = document.querySelector("#TC").value.toUpperCase()        
    let alfabeto = new Array("a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z")            
    let chave = document.querySelector("#chave").valueAsNumber            
    let frase = convertArray(entrada).toString().replace(/\s/gi,' ')
    console.log("Frase Criptografada: " + frase)
    // console.log("Essa é a frase: " + frase)
    for(let i = 0; i < frase.length; i++){        
        // Verifico a posição da letra dentro do array alfabeto
        let posLetra = frase.charCodeAt(i) - 64                
        let letraComDesl = (posLetra - 1) + (chave)
        console.log(posLetra)
        // Testo o valor das chaves               
        if(chave < 0){                
            // Se a posição da letra for negativa  eu somo o valor do array do alfabeto
            if(letraComDesl < 0){
                letraComDesl = letraComDesl + 26                              
            }                                 
        }                        
        if(chave > 0){
            // Se a posição da letra for maior que o valor total do array eu subtraio o valor do array do alfabeto
            if(letraComDesl > 25){
                letraComDesl = letraComDesl - 26
            }
        }        
        
        // Verifico se o deslocamento é maior que a quantidade de letras no array.
        // Caso seja maior eu reinicio subtraindo a quantidade do array
        // letraComDesl = letraComDesl > alfabeto.length ? letraComDesl = letraComDesl + alfabeto.length - 1 : letraComDesl        
        // Jogo o valor da letra deslocada ao array do alfabeto em seguida adiciono a
        // variável resultado        
        resultado += alfabeto[letraComDesl]                                                      
        result.value = resultado.replace(/undefined/gi,' ').toUpperCase()        
    }
}  
function limpar(){
    window.location.reload();    
    result.value = ""       
}
    
    
    
          



