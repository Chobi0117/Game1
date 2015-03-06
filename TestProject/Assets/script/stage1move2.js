#pragma strict

public var needle1 : Transform;
public var needle2 : Transform;
private var bCollision : boolean;

function Start () {
	bCollision = false;
}

function FixedUpdate () {
	if(bCollision){
	needle1.position.y += 1.0;
	needle2.position.y += 1.0;
	}
}

function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.layer == 8)
	{
		Debug.Log("Move2");
		bCollision = true;
	}
}