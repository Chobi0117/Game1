#pragma strict

var posx : float;
var speed : float = 0.1;
var max : float = 4;
var min : float = 12;

function Start () {

}

function Update () {
	posx  = posx + speed ;
	if( posx > max ){
		speed = -speed;		
	}
	if( posx < min ){
		speed = -speed;
	}
	transform.localPosition.x = posx;
}