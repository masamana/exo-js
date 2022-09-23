chiffre = 1

while(chiffre < 100)
{
    if(chiffre%15 == 0)
        console.log("FizzBuzz")

    else if(chiffre%3 == 0)
        console.log("Fizz")

    else if (chiffre%5 == 0)
        console.log("Buzz")
    
    else if(chiffre%7 == 0)
        console.log("Tapioca")
    
    else if(chiffre%13 == 0)
        console.log("Formica")

    else 
        console.log(chiffre)

    chiffre = chiffre + 1   
}