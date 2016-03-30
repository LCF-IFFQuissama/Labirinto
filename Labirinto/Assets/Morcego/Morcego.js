var Distance : float;
var Player : Transform;
var PercepcaoDoInimigo = 25;
var DistanciaSeguir = 10;
var DistanciaAtaque = 2.5;
var Velocidade = 3;
var Rotacao = 3;
var TempoAtaque = 500;
var Visivel : boolean;
private var TempoDeAtaque : float;
var Controle : CharacterController;
var gravity : float = 20.0;
private var DirecaoMover : Vector3 = Vector3.zero;


function Start ()
{
	TempoAtaque = Time.time;
	Visivel = false;
}

function OnBecameVisible()
{
	Visivel = true;
}

function OnBecameInvisible()
{
    Visivel = false;     
}

function Update ()
{
	Distance = Vector3.Distance(Player.position, transform.position);
	if (Distance < PercepcaoDoInimigo)
	{
		if(Visivel==true)
		{
			lookAt();
		}
	}

	if (Distance < DistanciaAtaque)
	{
		if(Visivel==true)
		{
			Ataque();
		}
	}
	else if (Distance < DistanciaSeguir)
	{
		if(Visivel==true)
		{
			chase ();
		}
	}
}

function lookAt ()
{
	var rotation = Quaternion.LookRotation(Player.position - transform.position);
	transform.rotation = Quaternion.Slerp(transform.rotation, rotation, Time.deltaTime * Rotacao);
}
 
function chase ()
{
	DirecaoMover = transform.forward;
	DirecaoMover *= Velocidade;
	DirecaoMover.y -= gravity * Time.deltaTime;
	Controle.Move(DirecaoMover * Time.deltaTime);
}

function Ataque ()
{
	if (Time.time > TempoDeAtaque)
	{
		Debug.Log("O inimigo atacou");
		TempoDeAtaque = Time.time + TempoAtaque;
		transform.Rotate(0,0,0);
	}
}

function ApplyDammage ()
{
	DistanciaSeguir += 30;
	Velocidade += 2;
	PercepcaoDoInimigo += 40;
}