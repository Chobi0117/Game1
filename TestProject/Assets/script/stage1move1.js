#pragma strict

public var player : Transform;
private var right : boolean;

function Start () {

}

function Update () {
	if(player.position.x > -14){
		right = true;
	}
	if(right == true)
	{
		transform.position.y -= 0.8;
	}
}