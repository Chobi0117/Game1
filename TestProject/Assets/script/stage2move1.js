#pragma strict

var posy : float;
var speed : float = 0.05;
var max : float = 0;
var min : float = -6;

function Start () {

}

function Update () {
	posy  = posy + speed ;
	if( posy > max ){
		speed = -speed;		
	}
	if( posy < min ){
		speed = -speed;
	}
	transform.localPosition.y = posy;
}