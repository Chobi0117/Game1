#pragma strict

var posx : float;
var posy : float;

function Start () {

	posx = -50;
	posy = 0;

}
function FixedUpdate () {
	
	rigidbody2D.velocity.x = 0;
	
	if(Input.GetKey( KeyCode.RightArrow))
	{
		//rigidbody2D.AddForce(Vector2(100,0));
		rigidbody2D.velocity.x = 5;
	}
	
	if(Input.GetKey(KeyCode.LeftArrow))
	{
		//rigidbody2D.AddForce(Vector2(-100,0));
		rigidbody2D.velocity.x = -5;
	}
	
	if(Input.GetKeyDown(KeyCode.Space))
	{
		rigidbody2D.velocity.y = 0;
		rigidbody2D.AddForce(Vector2(0,1000));
	}
//	transform.position.x = posx;
//	transform.position.y += posy;
	posy = 0;
}

function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.layer == 9)
	{
		Application.LoadLevel("GameOver");
	}
 	Debug.Log("hit Object  COLLISION");
}