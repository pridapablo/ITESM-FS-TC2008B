/*
This script is used to detect when the player collides with an enemy or a finish line.
It also updates (and keeps) the global player score using TextMeshPro.

It was decided to keep the score in this script because in future implementations more than one player could be playing at the same time and scores would be different.

Pablo Banzo Prida
Gabriel Rodríguez De Los Reyes
2023-03-08
*/
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EnemyCollision : MonoBehaviour
{
    [SerializeField] TMPro.TextMeshProUGUI scoreText; // TextMeshProUGUI to show the score
    [SerializeField] int maxScore; // maximum score to win the game
    public int score = 0; // score of the player (initially 0)
    // Origin Vector
    Vector3 origin = new Vector3(0, -6, 0); // origin of the player (spawn point)

    void Update()
    {
        if (score >= maxScore) // if the score is equal or greater than the maximum score
        {
            scoreText.text = "You Win!"; // show the text "You Win!"
            Time.timeScale = 0; // stop the game
        }
    }

    private void OnTriggerEnter2D(Collider2D other) // when the player collides with another object (trigger)
    {
        if (other.gameObject.tag == "Enemy") // if the player collides with an enemy
        {
            Debug.Log("Collision with enemy"); // show a message in the console
            score = 0; // reset the score
            scoreText.text = "Score: " + score; // update the score text
            gameObject.transform.position = origin; // reset the player to the spawn point
        }
        if (other.gameObject.tag == "Finish") // if the player collides with a finish line
        {
            score++; // increase the score
            scoreText.text = "Score: " + score; // update the score text
            gameObject.transform.position = origin; // reset the player to the spawn point
        }
    }
}