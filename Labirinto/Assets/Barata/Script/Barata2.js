#pragma strict

var controle : boolean; 
var esquerda : float;
var direita : float;
var posicaox : float;


function Start () 
{
	controle = false;
	esquerda = -51.2;
	direita = -53.1;
}

function Update () 
{
	posicaox = this.transform.position.x;

	if (controle==true)
	{
		if( posicaox <= esquerda)
		{
			transform.Translate(0, 0, 0.02f);
			//transform.Rotate(0, 2*Time.deltaTime,0);
		}
		else
		{
			controle=false;
		}
	}
	
	if(controle==false)
	{
		if( posicaox >= direita)
		{
			transform.Translate(0, 0, -0.02f);
			//transform.Rotate(0, 2*Time.deltaTime,0);
		}
		else 
		{
			controle=true;
		}
	}
	
}