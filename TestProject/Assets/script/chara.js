#pragma strict

var posx : float;
var posy : float;

var  JumpCount : int;

function Start () {

	posx = -50;
	posy = 0;
	
	JumpCount = 0;

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
	if(JumpCount == 0){
		if(Input.GetKeyDown(KeyCode.Space))
	{
		rigidbody2D.velocity.y = 0;
		rigidbody2D.AddForce(Vector2(0,1000));
		JumpCount = 1;
		}
	}

	posy = 0;
	if(transform.position.y < -15)
	{
		Application.LoadLevel("NewTitle");	
	}
}


function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.layer == 9)
	{
		Application.LoadLevel("NewTitle");
	}
 	
 	if(coll.gameObject.layer == 10)
	{
		JumpCount = 0;
	}
}