using UnityEngine;
using System.Collections;

public class SceneSelector : MonoBehaviour
{

		// Use this for initialization
		void Start ()
		{

		}
	
		// Update is called once per frame
		void Update ()
		{
	
		}

		public void onTapButton ()
		{
				Debug.Log ("ボタンをタップ!");
		}

		public void OnClick ()
		{
				Application.LoadLevel (transform.name);
			
		}
}
 