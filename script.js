
    function calcularBhaskara (){
        a= document.getElementById('a').value
        b= document.getElementById('b').value
        c= document.getElementById('c').value
        a= Number(a)
        b= Number(b)
        c= Number(c)
        d = Math.pow (b,2) - (4*a*c)
        if(d>0){
            x1= (-b - Math.sqrt(d,2))/(2*a)
            x2= (-b + Math.sqrt(d,2))/(2*a)
            document.getElementById('resultado').innerHTML = "as raízes são: " +x1 + " e: " +x2
        } 
        else if (d==0){
            x3= (-b)/2*a
            document.getElementById('resultado').innerHTML = "há duas raízes reais e iguais a:" + x3
        } 
        if (d<0) {
                document.getElementById('resultado').innerHTML = "não há raízes reais."
            }
        }
    
                    
