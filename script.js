 const nome= document.getElementById('nome');
 const altura= document.getElementById('altura');
 const peso= document.getElementById('peso');
 const calcular=document.getElementById('calcular'); 
 const resultado= document.getElementById('resultado');



 function imc(){
   if(nome.value!==''&& altura.value!==''&& peso.value!==''){
    
    const valorImc= (peso.value/(altura.value*altura.value) ).toFixed(1);
   
    let classificacao='';
    
    
    if ( valorImc<18.5){
         classificacao=' e está abaixo do peso';

   }
   else if(valorImc<25){
     classificacao=' e está com o peso ideal, parabens !';

   }
   else if(valorImc<35){
     classificacao=', estando levemente acima do peso';

   }
   else if(valorImc<40){
     classificacao=',estando com indícios de obesidade , procure um médico!';

   }
   
    resultado.textContent=`${nome.value}, seu IMC é de ${valorImc} ${classificacao}`;

   }
   else{
   resultado.textContent="Preencha todos os campos";
   }

 }



 calcular.addEventListener("click",imc);
