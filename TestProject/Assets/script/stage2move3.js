#pragma strict

public var player : Transform;
function Start () {

}

function Update () {
if(player.position.x > 0)
	{
		transform.position.x += 0.16;
	}
}