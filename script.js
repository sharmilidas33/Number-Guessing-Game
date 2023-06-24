let btn= document.getElementById('btn');
let output= document.getElementById('output');
let number= Math.floor(Math.random()* 100);

btn.addEventListener('click', function button(){
    let input= parseInt(document.getElementById("userInput").value);
    if(input === number){
        output.innerHTML= `Your guess is absolutely right. The number was ${number}`
    } 
    else if(input<number){
        output.innerHTML="Oops! You guessed too low";
    }
    else if(input>number){
        output.innerHTML="Oops! You guessed too high";
    }
    document.getElementById("userInput").value="";
});