/*
Drop balls from the top of the screen at random positions

Pablo Banzo Prida
2023-03-01
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Script1 : MonoBehaviour
{
    // Class variable to be changed from the Inspector window in Unity
    [SerializeField] GameObject ball; // Class names and methods are capitalized
    [SerializeField] float delay;

    // Start is called before the first frame update
    void Start()
    {
        // Call the "DropBall" function after 0.5 seconds
        // and repeat every set time
        InvokeRepeating("DropBall", 0.5f, delay);
    }

    // Update is called once per frame
    void Update()
    {

    }

    void DropBall()
    {
        // Generate a new random position
        Vector3 pos = new Vector3(Random.Range(-10.0f, 10.0f), 6, 0);
        // Create a copy of the prefab at the new position
        GameObject obj = Instantiate(ball, pos, Quaternion.identity);
        // Destroy the object after 5 seconds
        // Destroy(obj, 5);
    }
    public void StopBalls()
    {
        // Cancel the "DropBall" function
        CancelInvoke("DropBall");
    }
}

