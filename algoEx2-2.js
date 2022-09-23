monNombre = -5
message = ""
 
if(monNombre <= 0)
{ 
    for(x=monNombre ; x <= monNombre ; x--)
    {
        message += x++
    }
   
}
else
{
    for(x = monNombre ; x>= monNombre ; x++)
    {
        message += x--
    }
}

console.log(message)
    
 
