monNom = "Marina"

for(x=0; x<=100; x++)
{
    message = "Je m'appelle : " + monNom + x++
    console.log(message)


}
//meme chose qu'au dessus avec fonction 

jeMp(5, "Marina") ;
jeMp(10, "Robert")

function jeMp(nIteration, nom)
{
    for(i=0; i<=nIteration; i++)
    {
        message = "Je m'appelle " + nom + testMultiple(i) ;
        console.log(message)
    }
}

function testMultiple(i)
{
    newMessage = "" ;
        if(i % 3 == 0)
            newMessage += "Fizz" ;
        if(i % 5 == 0)
            newMessage += "Buzz" ;
        if(newMessage == "")
            newMessage += i ;
        return newMessage ;
        

}

