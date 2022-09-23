monNom = "Marina" 

for(x = 0; x <=100; x++ )
{

    message = "Je m'appelle : " + monNom + x + " " ; 

    if(x%2 == 0)
    {
        message += "Comment vous appelez-vous ? "
    }
    else
    {
        message += "Où sont les toiletts ?"
    }

    if(x%3 == 0)
    {
        message += "Je ne parle pas binaire"
    }

    if( x==0 || x==1)
    {
        message += "Est ce que le micro fonctionne"
    }


    console.log(message) ; 
        
        
}

