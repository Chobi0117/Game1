#pragma strict

var bCollition : boolean;
function Start () {
	bCollition = false;
}

function Update () {
	if(bCollition == true)
	{
		transform.position.y -= 0.1;	
	}
}

function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.layer == 8)
	{
		bCollition = true;
	}
}