#pragma strict

var guiskin : GUISkin;

function OnGUI () {
	GUI.skin = guiskin;
	GUI.TextField(Rect(Screen.width/2-100,200,200,30),"GAME OVER", "textfield");
	if(GUI.Button(Rect(Screen.width/2-100,300,200,30),"Title"))
	{
		Application.LoadLevel("Title");		
	}

}

function Update () {

}