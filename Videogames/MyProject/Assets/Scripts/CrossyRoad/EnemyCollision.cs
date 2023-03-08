using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EnemyCollision : MonoBehaviour
{
    [SerializeField] TMPro.TextMeshProUGUI scoreText;
    [SerializeField] int maxScore;
    public int score = 0;
    // Origin Vector
    Vector3 origin = new Vector3(0, -6, 0);

    void Update()
    {
        if (score >= maxScore)
        {
            scoreText.text = "You Win!";
            Time.timeScale = 0;
        }
    }

    private void OnTriggerEnter2D(Collider2D other)
    {
        if (other.gameObject.tag == "Enemy")
        {
            Debug.Log("Collision with enemy");
            // Score Text to Game Over
            score = 0;
            scoreText.text = "Score: " + score;

            // reset the player to the start
            gameObject.transform.position = origin;
        }
        if (other.gameObject.tag == "Finish")
        {
            score++;
            scoreText.text = "Score: " + score;
            // reset the player to the start
            gameObject.transform.position = origin;
        }
    }
}