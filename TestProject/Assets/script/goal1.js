#pragma strict

public var player : Transform;

function Start () {

}

function Update () {
	if(player.position.x > transform.position.x)
	{
		Application.LoadLevel("Stage2");
	}	
}