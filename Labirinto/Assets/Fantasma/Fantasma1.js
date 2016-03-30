#pragma strict

var controle : boolean; 
var esquerda : float;
var direita : float;
var posicaoz : float;


function Start () 
{
	controle = true;
	esquerda = -32;
	direita = -38;
}

function Update () 
{
	posicaoz = this.transform.position.z;

	if (controle==true)
	{
		if( posicaoz <= esquerda)
		{
			transform.Translate(0, 0, 0.02f);
		}
		else
		{
			controle=false;
		}
	}
	
	if(controle==false)
	{
		if( posicaoz >= direita)
		{
			transform.Translate(0, 0, -0.02f);
		}
		else 
		{
			controle=true;
		}
	}
	
}