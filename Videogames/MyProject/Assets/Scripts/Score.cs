/*
Script to keep track of the score of the player

Pablo Banzo Prida
2023-03-01
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Score : MonoBehaviour
{
    int score;
    // Start is called before the first frame update
    void Start()
    {
        score = 0;
    }

    // Update is called once per frame
    public void AddPoints(int amount) // public method to add x amount of points to the score
    {
        score += amount;
        Debug.Log("New Score: " + score);
    }
}
