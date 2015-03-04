#pragma strict

function OnGUI () {

	if(GUI.Button(Rect(Screen.width/2-100,300,
	200,30),"GAME STRAT" ))
	{
		Application.LoadLevel("Stage1");
	}
}

function Update () {

}