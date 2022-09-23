var taille = 0, caractere = "", i = 0, j = 0;
taille = proglab.inputNumber("Entrez taille");
caractere = proglab.input("Entrez caractere");

for (j = 1; j <= taille; j++) 
{
	for (i = 1; i <= taille / 2; i++) 
    {
		if (j % 2 == 0) 
        {
			proglab.print(caractere + " ");
		} else 
            {
                proglab.print(" " + caractere);
            }
	}
	proglab.println("");
}