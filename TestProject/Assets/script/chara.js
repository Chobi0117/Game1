#pragma strict

var posx : float;
var posy : float;

function Start () {

	posx = -50;
	posy = 0;

}

function Update () {
	if(Input.GetKey( KeyCode.RightArrow))
	{
		posx = posx+0.2;
	}
	
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		posx = posx-0.2;
	}
	
	if(Input.GetKeyDown(KeyCode.Space))
	{
		rigidbody2D.AddForce(Vector2(0,1300));
	}
	transform.position.x = posx;
	transform.position.y += posy;
	posy = 0;
}