# Save The Enterprise! - (http://save-the-enterprise.bitballoon.com/)

## About this game:

This game was inspired by the Star Trek series created by Gene Roddenberry.

https://en.wikipedia.org/wiki/Star_Trek:_The_Original_Series
https://en.wikipedia.org/wiki/Gene_Roddenberry

 "Save The Enterprise!" is a basic learning tool meant to help a beginning developer or player remember what C.R.U.D. stands for. It utilizes functions, password forms, a setTimeout interval that can be overridden and css that, as the user navigates, will take them through a narrative via click and submit handlers. The player can win by entering the correct serial combination of the four words that C.R.U.D. stands for. This game is meant to be an immersive experience and, although played in a browser, should feel like you are playing a game on your computer. Because a cursor is required, the image was changed to make it feel more game-like and the audio sets the atmosphere.

See and play the published game at (http://save-the-enterprise.bitballoon.com/)!

## Technologies Used

<li> HTML </li>
<li> CSS </li>
<li> JavaScript </li>
<li> jQuery </li>

## Code I'm Proud Of

This particular code took a bit of hunting and debugging to discover that when you focus to the input to a form, the default action included is for the browser to scroll to that form. Since my form was already at the top it would seem to reload the page and break the immersive nature of the experience. My goal was to prevent this so that the user's experience was not interrupted.

passOne.onfocus = function () {
window.scrollTo(0, 0);
document.body.scrollTop = 0;
}

### Screen Shots

This is the page on load:

![image](https://cloud.githubusercontent.com/assets/22309434/21105217/4899dcdc-c03e-11e6-88a5-13653f3a6107.png)

The Red Alert password challenge:

![image](https://cloud.githubusercontent.com/assets/22309434/21105350/bf9f2e04-c03e-11e6-8834-d07819c68b8f.png)

The page if the ship explodes (a lose result):

![image](https://cloud.githubusercontent.com/assets/22309434/21105363/cd4b850c-c03e-11e6-80e5-31772e4e3122.png)

The page if you get another day, another mission (a win result):

![image](https://cloud.githubusercontent.com/assets/22309434/21105426/029bd0ea-c03f-11e6-8200-347fab73082e.png)

---

### Timeline

* **Assigned:** Thursday, December 8th
* **Due:** Monday, December 12th at 9:00AM

---

### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Include logic for winning** & **visually display which player won**
* **Include separate HTML, CSS, and JavaScript files**
* Use **native Javascript or jQuery** for **DOM manipulation**
* Be **deployed publicly online**, where the rest of the world can access it (using a github pages project page or bitballoon)
* Use **semantic markup** for HTML and CSS (adhere to best practices)
* Include **custom styling** to convey the state of the game visually (and differentiate your project from any CSS libraries used)
* Demonstrate attention to code quality with a **DRY (Don't Repeat Yourself)** codebase that is **"clean" (well-indented, appropriately commented, organized)** and **readable.** Actually ask somebody else in the class to read your code and see if they can understand it!

---

### Deliverables


* A **working game, built by you**, hosted somewhere on the internet.
* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A `readme.md` file** with a short description of the project, a list of which technologies you used for which parts of the app, an explanation of your approach (share some part of the code), and optionally a list of unsolved problems,  screenshots, etc.  See the [example readme](https://github.com/sf-wdi-34/readme-example).
* A **link to your hosted working game** in your game's Github repo.
* A **link to your hosted working game** in the "my work" section of your personal website.
* **[Fill out this spreadsheet](https://docs.google.com/spreadsheets/d/1vzxkkVwX2zU40BZArMknoHMYlu_5bVmyNYAEBMJXH5E/edit?usp=sharing)** with your project links.

---
