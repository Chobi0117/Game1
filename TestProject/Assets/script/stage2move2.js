#pragma strict

public var player : Transform;
var posy : float;

function Start () {

}

function Update () {
	if(player.position.x > -10)
	{
		transform.position.y -= 0.8;
	}
}