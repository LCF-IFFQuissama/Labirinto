#pragma strict

var alturamin : float;
var alturamax : float;
var altura : float;
var controle : boolean; 

function Start () 
{
	controle = true; //se verdadeiro subir, se falso descer
	alturamin = 2.3;
	alturamax = 4;
	//alturamax = -0. b 2452749;	
}

function Update () 
{
	altura = this.transform.position.y;

	if (controle==true)
	{
		if( altura <= alturamax)  //sobe os espinhos
		{
			transform.Translate(0, 0, -0.03f);
		}
		else
		{
			controle=false;
		}
	}
	
	if(controle==false)
	{
		if( altura >= alturamin) //desce os espinhos
		{
			transform.Translate(0, 0, 0.02f);
		}
		else 
		{
			controle=true;
		}
	}
}