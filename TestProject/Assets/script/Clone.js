#pragma strict

private var timeCount : float;
public var target: GameObject;
private  var originalPos: Vector3;
private var originalRot: Quaternion;

function Start () {
	timeCount = Time.time ;
	originalPos =  target.transform.position;
	originalRot = target.transform.rotation;
}

function Update () {
	if(Time.time -  timeCount >  1.5){ 
		Instantiate(target, originalPos, originalRot);
		timeCount =  Time.time;
	} 
} 