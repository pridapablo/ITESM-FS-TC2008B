/*
Move a GameObject horrizontaly using the arrow keys or AD

Pablo Banzo Prida
2023-03-01
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MoveObjectArrowKeys : MonoBehaviour
{
    [SerializeField] float speed;
    [SerializeField] float limit;
    Vector3 move; 
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        move.x = Input.GetAxis("Horizontal");
        // Debug.Log("X motion:" + move.x);
        // Limit the motion to a specific range of coordinates
        if (transform.position.x < -limit && move.x < 0)
        {
            move.x = 0;
        }
        else if (transform.position.x > limit && move.x > 0)
        {
            move.x = 0;
        }
        transform.Translate(move*speed*Time.deltaTime); // move the object horrizontaly (speed*time = velocity)

    }

}
