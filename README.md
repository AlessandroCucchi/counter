
 <p align="center">
  <img src="https://i.imgur.com/i8ZXSXx_d.png?maxwidth=520&shape=thumb&fidelity=high" alt="logo">
</p>

<h1 align="center">ClickCounter</h1>

---

<h4 align="center">A simple counter app with buttons to + (increment), - (decrement), Auto (automated), and Reset to easily control and track the displayed number.</h4>

<p align="center">
  <img src="https://img.shields.io/badge/HTML-orange" alt="HTML">
  <img src="https://img.shields.io/badge/CSS-blue" alt="CSS">
  <img src="https://img.shields.io/badge/JavaScript-yellow" alt="JavaScript">
</p>

#### Functionalities:

- Use the **'+'** button to increase the counter by one.
- Use the **'-'** button to decrease the counter by one.
- Use the **'Reset'** button to reset the score to zero.
- Use the **'Auto'** button to increment the score by one every half second. Press it again to stop the auto increment.

#### Hidden functionalities:

- Press the **'+'** button for more than one second to increment the score by one every 10 milliseconds.
- Press the **'-'** button for more than one second to decrement the score by one every 10 milliseconds.

![](/assets/Untitled%20video%20-%20Made%20with%20Clipchamp%20(2).gif)

##### A preview of the code that I've used to achieve these functions:

**Click event for the add button:**

```js
document.querySelector('.btn-add')
  .addEventListener('pointerdown', () => {
    pressTimer = setTimeout(() => {
      intervalId = setInterval(() => {
        num++;
        updateNumber();
      }, 10);
    }, 1000);
  });
```
Slightly different code for the subtract button, implementing an if statement to check if the current number is greater than zero every time the number is subtracted:
```JS
document.querySelector('.btn-subtract')
  .addEventListener('pointerdown', () => {
    pressTimer = setTimeout(() => {
      if (num > 0) {
        intervalId = setInterval(() => {
          if (num > 0) {
            num--;
            updateNumber();
          } else {
            clearInterval(intervalId); 
          }
        }, 10);
      }
    }, 1000);
  });
```
During the development, I encountered the following problem: when I was triggering the "pointerdown" event and moving the cursor away from the button without untriggering the event, the counter would continue running indefinitely.
To solve this problem, I chose to use the pointerleave event in combination with the pointerup event. Here's a quick preview:
```JS
let pressTimer;
let intervalId = null;

document.querySelector('.btn-add')
  .addEventListener('pointerleave', () => {
    document.querySelector('.front-add').innerHTML = '+';
    clearTimeout(pressTimer);
    clearInterval(intervalId);
  });

document.querySelector('.btn-add')
  .addEventListener('pointerup', () => {
    clearTimeout(pressTimer);
    clearInterval(intervalId);
    intervalId = null;
  });
  ```
---
Thank You!

Thank you for checking out ClickCounter! This project was built to help practice JavaScript event handling and UI interactions. If you have any questions, feedback, or suggestions for improvements, feel free to open an issue or reach out!
