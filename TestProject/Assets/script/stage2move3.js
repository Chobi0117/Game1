#pragma strict

public var player : Transform;
function Start () {
}

function Update () {
if(player.position.x > 3)
	{
		transform.position.x +=0.15;
	}
}