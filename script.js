            
         let n1 = prompt('digite um número');
            n1 = parseFloat(n1);
       
        escreve();
            
            function escreve(){
                var output = document.querySelector('#output');
                output.innerHTML = n1;
            }
             
           			
			function calcular(simbolo){
				var n = prompt('digite outro número');
                n = parseFloat(n);
				
				switch(simbolo){
					case '+':
					n1 += n;
					break;
					case '-':
					n1 -= n;
					break;
					case '*':
					n1 *= n;
					break;
					case '/':
					n1 /= n;
					break;
				}
				
				escreve();
			}