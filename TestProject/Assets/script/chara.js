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
		GetComponent.<Rigidbody2D>().velocity.x = 0;
		
		if(Input.GetKey( KeyCode.RightArrow))
		{
			//rigidbody2D.AddForce(Vector2(100,0));
			GetComponent.<Rigidbody2D>().velocity.x = 5;
		}
		
		if(Input.GetKey(KeyCode.LeftArrow))
		{
			//rigidbody2D.AddForce(Vector2(-100,0));
			GetComponent.<Rigidbody2D>().velocity.x = -5;
		}
		if(JumpCount == 0){
			if(Input.GetKeyDown(KeyCode.Space))
			{
				GetComponent.<Rigidbody2D>().velocity.y = 0;
				GetComponent.<Rigidbody2D>().AddForce(Vector2(0,1000));
				JumpCount = 1;
				if(JumpSound != null)
				{
					gameObject.GetComponent.<AudioSource>().PlayOneShot(JumpSound);
				}
			}
		}

		posy = 0;
		if(transform.position.y < -15)
		{
			deathTime = Time.time;	
			bDeath = true; 
			GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
			if(DeathSound != null)
			{ 
				gameObject.GetComponent.<AudioSource>().PlayOneShot(DeathSound);
			}
		}
	}else{
		GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
    } 
    if(Time.time-deathTime > 0.1f&&bDeath == true){
		Application.LoadLevel("NewTitle");
	}
}
	
function OnCollisionEnter2D(coll: Collision2D) {
	if(coll.gameObject.layer == 9 || coll.gameObject.layer == 12)
	{
		if(DeathSound != null)
		{
			gameObject.GetComponent.<AudioSource>().PlayOneShot(DeathSound);
		} 
		bDeath = true;
		deathTime = Time.time;
		GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
	}
 	
 	if(coll.gameObject.layer == 10)
	{
		JumpCount = 0;
	}
}