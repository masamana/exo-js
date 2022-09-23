
for (chiffre = 1 ; chiffre < 100 ; chiffre++)
{
    var fizzy = "" ;
    if (chiffre%3 == 0)
    {
        fizzy += "Fizz" ;
    }
        
    if (chiffre%5 == 0)
    {
        fizzy += "Buzz" ;
    }
    
    if (chiffre%7 == 0)
    {
        fizzy += "Tapioca" ;
    }

    if (chiffre%13 == 0)
    {
        fizzy += "Formica" ;
    }
    
    if(fizzy)
        console.log(fizzy) ; 
    else 
        console.log(chiffre) ;
}