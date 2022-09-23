pointDeDepartX = 5
pointDeDepartY = 7
grandeurX = 10
grandeurY = 11

tresorPosX = 10 ;
tresorPosY = 11 ;

asFoundTresor = false ;

for(y = 0; y <= grandeurY; y++)
{
    for(x = 0; x <= grandeurX; x++)
    {
        currentPointX = x + pointDeDepartX ;
        currentPointY = y + pointDeDepartY ; 
        console.log("Je visite : " + currentPointX + " / " + currentPointY) ;

        if(currentPointX == tresorPosX && currentPointY == tresorPosY)
        {
            console.log("J'ai trouvé le trésor !") ;
            asFoundTresor = true ;
            break ;
        }
     }
        if(asFoundTresor)
        {
            break ;
        }


    
}