using UnityEngine;
using System.Collections;

public class SceneSelector : MonoBehaviour
{
		private bool loadLevel = false;

		// Use this for initialization
		void Start ()
		{
			
		}
	
		// Update is called once per frame
		void Update ()
		{
				if (loadLevel && !gameObject.GetComponent<AudioSource> ().isPlaying) {
						Application.LoadLevel (transform.name);
				}
		}

		public void onTapButton ()
		{
				Debug.Log ("ボタンをタップ!");
		}

		public void OnClick ()
		{
				loadLevel = true;
//				Application.LoadLevel (transform.name);
				gameObject.GetComponent<AudioSource> ().Play ();
			
		}
}
 