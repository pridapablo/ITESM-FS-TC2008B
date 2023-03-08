using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyCollision : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {

    }

    // when the ball enters the hoop collider, trigger the "Score" function
    private void OnTriggerEnter2D(Collider2D collision)
    {
        Debug.Log("Slay");
        if (collision.gameObject.tag == "Enemy")
        {
            Debug.Log("Collision with enemy");
        }
    }
}
