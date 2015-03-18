#pragma strict

var posx : float;
var posy : float;
var JumpCount : int;
public var JumpSound : AudioClip;
public var DeathSound : AudioClip;
private var deathTime : float;
private var bDeath : boolean;

function Start () {

	posx = -50;
	posy = 0;
	
	JumpCount = 0;
	bDeath = false;

}
function FixedUpdate () {
	if(!bDeath){
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
				if(JumpSound != null)
				{
					gameObject.audio.PlayOneShot(JumpSound);
				}
			}
		}

		posy = 0;
		if(transform.position.y < -15)
		{
			deathTime = Time.time;	
			bDeath = true;
			rigidbody2D.velocity = Vector2.zero;
			if(DeathSound != null)
			{ 
				gameObject.audio.PlayOneShot(DeathSound);
			}
		}
	}
	
	if(Time.time-deathTime > 0.5f&&bDeath == true){
		Application.LoadLevel("NewTitle");
	}
}


function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.layer == 9 || coll.gameObject.layer == 12)
	{
		if(DeathSound != null)
		{
			gameObject.audio.PlayOneShot(DeathSound);
		} 
		bDeath = true;
		deathTime = Time.time;
		rigidbody2D.velocity = Vector2.zero;
	}
 	
 	if(coll.gameObject.layer == 10)
	{
		JumpCount = 0;
	}
}