#pragma strict

public var player : Transform;
private var right : boolean;

function Start () {
	right = false;
}

function Update () {
	if(player.position.x > -10)
	{
		right = true;
	}
	if(right == true)
	{
		transform.position.y -= 0.8;
	}
}