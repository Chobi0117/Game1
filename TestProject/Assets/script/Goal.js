#pragma strict

public var player : Transform;
public var nextStage: String;

function Start () {

}

function Update () {
	if(player.position.x > transform.position.x)
	{
		Application.LoadLevel(nextStage);
	}	
}