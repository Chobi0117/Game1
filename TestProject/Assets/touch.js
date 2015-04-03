#pragma strict

private  var tapx: float;
function Start () {

}

function Update () { 
	for (var touch : Touch in Input.touches) {
    	if (touch.phase == TouchPhase.Began) {
  			tapx = touch.position.x;      
        }
   	    if (touch.phase == TouchPhase.Moved) {
   	    	Debug.Log(touch.position.x);
    		if(touch.position.x-tapx>1){
    			transform.position.x += 0.1;
    		}
    		if(touch.position.x-tapx<1){
    			transform.position.x -= 0.1;
    		}
    	}
    }
}