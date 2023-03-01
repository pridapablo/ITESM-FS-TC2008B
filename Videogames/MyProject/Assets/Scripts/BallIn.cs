using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class BallIn : MonoBehaviour
{
    [SerializeField] Score scoreObj; // Public variable to hold the Score script

    // Start is called before the first frame update
    void Start()
    {
        
    }

    // when the ball enters the hoop collider, trigger the "Score" function
    void OnTriggerEnter2D()
    {
        scoreObj.AddPoints(1); // Reference the Score script and call the AddPoints function
    }
}
