#pragma strict

public var downfloor2 : Transform;
private var bCollision : boolean;
function Start () {
	bCollision = false;
}

function Update () {
	if(bCollision)
	{
		downfloor2.position.y -= 0.2;
	}
}

function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.layer == 8)
	{
		bCollision = true;
	}
}