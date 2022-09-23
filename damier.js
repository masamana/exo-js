var taille = 5, caractere = "N", i = 0, j = 0;

for (j = 1; j <= taille; j++) 
{
	for (i = 1; i <= taille / 2; i++) 
    {
		if (j % 2 == 0) 
        {
			console.log(caractere + " ");
		} else 
            {
                console.log(" " + caractere);
            }
	}
	console.log("");
}