let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = " ";
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button test is ',buttonText);
        if(buttonText=='X'){
            buttonText = '*';
            screenValue +=buttonText;
            screen.value = screenValue;
        }
        else if(buttonText=='C'){            
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText=='='){
            screen.value = eval(screenValue);
        }   
        else if (buttonText === 'rad') {
            screen.value = screen.value * (Math.PI / 180);
        }
        else if (buttonText === 'log') {
            screen.value = Math.log10(screen.value);
        }
        else if (buttonText === 'ln') {
            screen.value = Math.log(screen.value);
        } 
        else if (buttonText === '√') {
            screen.value = Math.sqrt(screen.value);
        }
        else if (buttonText === '%') {
            screen.value = screen.value/100;
        }
        else{
            screenValue +=buttonText;
            screen.value = screenValue;
        }        
    })
}
