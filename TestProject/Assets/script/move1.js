#pragma strict

function Start () {

}

function Update () {
	if(Input.GetKeyDown(KeyCode.RightArrow))
	{
		transform.position.y = -30;
	}
}