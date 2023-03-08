/*
This script moves the object in a sine wave.

Pablo Banzo Prida
2023-08-01
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SineMovement : MonoBehaviour
{
    [SerializeField] float speed; // speed of the sine wave
    [SerializeField] float amplitude; // amplitude of the sine wave
    Vector3 offset; // offset from the initial position
    Vector3 initialPosition; // initial position of the object
    float angle;

    // Start is called before the first frame update
    void Start()
    {
        initialPosition = transform.position; // get the initial position
    }

    // Update is called once per frame
    void Update()
    {
        angle += speed * Time.deltaTime; // increase the angle
        offset = new Vector3(Mathf.Sin(angle) * amplitude, 0, 0); // calculate the offset
        transform.position = initialPosition + offset;  // set the new position
    }
}
