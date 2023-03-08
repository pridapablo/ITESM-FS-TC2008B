/*
Move a GameObject horrizontaly using the arrow keys or AD

Pablo Banzo Prida
2023-03-01
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class VerticalMove : MonoBehaviour
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
        move.y = Input.GetAxis("Vertical");
        // Debug.Log("X motion:" + move.x);
        // Limit the motion to a specific range of coordinates
        if (transform.position.y < -limit && move.y < 0)
        {
            move.y = 0;
        }
        else if (transform.position.y > limit && move.y > 0)
        {
            move.y = 0;
        }
        transform.Translate(move * speed * Time.deltaTime); // move the object horrizontaly (speed*time = velocity)

    }

}
