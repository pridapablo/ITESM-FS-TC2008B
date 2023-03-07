/*
Script to keep track of the score of the player

Pablo Banzo Prida
2023-03-01
*/

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class Score : MonoBehaviour
{
    [SerializeField] TMP_Text tmpObj; // text object to display the score
    [SerializeField] int maxScore;
    [SerializeField] Script1 creator;

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
        tmpObj.text = "Score: " + score; // update the text of the score
        Debug.Log("New Score: " + score);

        if (score >= maxScore) // if the score is 100 or more, the player wins
        {
            Finish();
        }
    }
    void Finish()
    {
        creator.StopBalls();
    }
}

