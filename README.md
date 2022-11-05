# Know Ya Countries

This website aims to provide a convenient place to learn, and test a user's knowledge of, facts about countries. I enjoy learning capital cities, but I have never found a website that would both let me learn more and test my knowledge in an efficient, fun way. 

The existing wesbites I found tended to either give you a small selection of multiple choice options, which made it too easy to guess with a process of elimination, or made you spell out the entire country without any autocomplete assistance, which is too onerous, or if you guessed wrong, it didn't give you the correct answer straight after that question, instead leaving the feedback to the end, which I found less memorable. This website addresses all those issues.

The target audience for this site would be anyone who has an interest in knowing keys facts about countries. It could be used by a child in school or a enthusiastic quizzer with aspirations of playing the UK TV quiz show circuit. The site currently only has a capital test on offer, but could in future include things like a US president quiz, a quiz that tests the user's knowledge of the shape of a country etc.

View the live site [here.](https://adammkeane.github.io/know-ya-countries/)

![Mockup](docs/readme-images/mockup.PNG)

## Features

### Site wide
* Navigation Menu
    * Contains links to the Home page (by clicking on either the site name or the home symbol) and a quesiton mark button to show the How To Play modal, no matter what page their on. It will be responsive on all devices.
    * This will allow users to easily navigate between the pages within the site on any size device. 
    * Flex grid used to have the wesbite title centred, and the other icons aligned to the right.
    * Uses simple black and white color palette, which matches the rest of the site. Reasoning behind this was to give the website a clean, simple and efficient feel.

Nav Menu
![Nav Menu](docs/readme-images/nav-menu.PNG)

* Footer
    * This will contain icons as links to social media websites that will open in new tabs. 
    * Icons will be accessible to the visually impaired who may be using a screen reader, by the use of aria labels.
    * This will allow users to a way follow our social media content and stay up to date with our porjects.

![Footer](docs/readme-images/footer.PNG)

* Favicon
    * A site wide favicon has been implemented with a custom emblem.
    * This will provide an image in the the tabs header to allow the user to easily identify the website if they have multiple tabs open.

![Favicon](docs/readme-images/favicon.PNG)

### Home Page
* Game Selection
    * Provides users a selection of games to play.
    * Wanted to keep this design simple, so that users can quickly see the games on offer and jump in.

![Game Selection](docs/readme-images/games.PNG)

* How To Play Modal
    * Provides user with instructions how to play the game if they would like. 
    * Doesn't force user to read before playing the game, as this may annoy repeat visiters who know the rules and just want to jump straight into learning.
    * Simple, clear 'How To Play' button to active the modal. The same modal can be accessed on any web page through the nav bar's question mark symbol.
    * Hopefully strikes a nice balance between giving all the information a user needs, and not being too verbose or complex.
    * Greyed out the rest of web page while modal active to keep user's attention on the modal, while still letting them know they can easily get back to the home page when ready.
    * Modal created with code adapted from this [W3 tutorial.](https://www.w3schools.com/howto/howto_css_modals.asp)

![How To Play Button](docs/readme-images/how-to-play-btn.PNG)
![How To Play Modal](docs/readme-images/modal.PNG)

### Capital Cities of Asia Quiz Page
* Country Box.
    * At start of game, a country is randomly from all possible countries of Asia. 
    * After each country question, that previous country is removed from the list of potential options for the game going forward, and the random selection begins again. This is done in order to make sure every will show up over the course of the quiz, and that no country will ever show up twice.
    * This also ensures that no two quizes are the same. Users wont get bored by the same questions at the same place in each game.

![Country](docs/readme-images/country.PNG)

* Capital Box/Dropdown List
    * Dropdown list provides user a quick, autocomplete method of getting their capital guesses into the input box.
    * Users can either start typing their guess, and the dropdown list will appear with all the potential Asian captials that start with what the user has entered so far, or they can click the down arrow icon to the right of the input box in order to see all the potential guess options. This arrow changes directon, depending on the state of the dropdown list, to hint to users of its functionaliy.
    * This allows users who know the answer to quickly start typing the first letter or two of their guess and then easily select it from the list.
    * It also allows users who have no idea what the answer is, and would just like to see all the potential options to get their scope focused, a way to see all the options at once.
    * All options were included so as not to make the game too easy with some process of elimination. 
    * Once a user selects a dropdown list item, it will quickly appear in the input box, ready to be submit for feedback.
    * Code from droplist was taken and modified from [here.](https://codingartistweb.com/2021/12/autocomplete-suggestions-on-input-field-with-javascript/)

![Dropdown](docs/readme-images/dropdown.PNG)

* Game Buttons/User Feedback
    * Provide user with way to check their guesses and/or move onto the next question.
    * The check answer button does different things, depending on what the user's guess is.
    * It will check if the user's guess matches the key/value pairing of country/captial object structure. 
    * If it matches, the user will be given a message in text below the buttons saying so, as well as a green background added to the input box and text feedback.
    * If user makes a valid selection of one of the dropdown options, but it is not correct, text and background color will generate to say so. This time the color will be red. The text will include what the correct answer is in bold, to allow the user to learn while the question is still fresh in their mind.
    * Finally, if a user creates an input that does not match one of the dropdown options (an invalid guess), text and background color will generate to say so. This time the color will be yellow. The text will explain what is needed for a valid guess.
    * All background colors were chose to allow the foreground text to be legible, and also to represent the colors of a traffic light.
    * The next button allows user to skip to the next question. User doesn't have to make a guess on each question. They can simply skip without answering. This will allow users who are happy that they know a particular capital to just click next until they find one they're not sure about. As they learn more capitals, they'll be able to quickly skip through and target the ones they're weak on. This caters for users who aren't too concerned with their score and are instead just interested in learning all the capitals.
    * Controlling focus, clearing user input and disabling inputs are all important for these buttons. The aim with this sort of manipulation is make the game as quick, simple and intuitive as possible, eg when a user makes a a guess, the focus is always taken away from the input field (even disabled for correct/incorrect guesses), so that on mobile devices, the keyboard disappears and the user can more clearly see the feedback text.

![Game Buttons](docs/readme-images/game-buttons.PNG)  
![Correct](docs/readme-images/correct.PNG)  
![Incorrect](docs/readme-images/incorrect.PNG)  
![Invalid](docs/readme-images/invalid.PNG)  

* Score & Question Number Tracker
    * Provides the user a visual represtation of how well they're doing and and how many questions they've answered/have yet to answer.
    * For users who are more interested in getting a high score, this is a simple way to bring a potentially competitive game aspect to it.

![Score](docs/readme-images/score.PNG) 

### Features Left to Implement

* The ability to navigate the dropdown list options with the up and down arrows on the keyboard.
* The ability for a user to type in the full capital guess in all lower case and for that to deemed correct. Currently and this is case sensitive.
* Include a streak tracking in the game, so that users can see what's the mosr correct answers in a row they got.
* The Capital Cities of the Caribbean game mentioned on the home page.

## Technologies

* HTML
    * The structure of the Website was developed using HTML as the main language.
* CSS
    * The site was styled using custom CSS in an external file.
* Javascript
    * The site was given interactivity using a mixture of custom and adapted JS in two external files.
* GitHub
    * Source code is hosted on GitHub and delpoyed using Git Pages.
* Git 
    * Used to commit and push code during the development opf the Website
* Font Awesome
    * Icons obtained from https://fontawesome.com/ were used as the Social media links in the footer section. 
* TinypNG
    * https://tinypng.com/ was used to reduce the size of the images used throughout the website
* Favicon.io
    * favicon files were created at https://favicon.io/

## Testing 

### Responsiveness

All pages were tested to ensure responsiveness on screen sizes from 320px x 634px and upwards as defined in [WCAG 2.1 Reflow criteria for responsive design](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html) on Chrome, Edge, Firefox and Opera browsers.

Steps to test:

1. Open browser and navigate to [Know Ya Countries](https://adammkeane.github.io/know-ya-countries/)
2. Open the developer tools (right click and inspect)
3. Set to responsive and decrease width to 320px and height to 634px.
4. Set the zoom to 50%
5. Click and drag the responsive window to maximum width

Expected:

Website is responsive on all screen sizes and no images are pixelated or stretched.
No horizontal scroll is present.
No elements overlap.

Actual:

The score and question number section on the quiz page went onto 2 lines on the small screen sizes. To fix this, media queries were used to made that text smaller on smaller screens.

Website was also opened on the following devices and no responsive issues were seen:

- Google Pixel 3a
- Dell XPS 15
- iPhone Mini


### Accessibility

[Wave Accessibility](https://wave.webaim.org/) tool was used throughout development and for final testing of the deployed website to check for any aid accessibility testing.

Testing was focused to ensure the following criteria were met:

- All forms have associated labels or aria-labels so that this is read out on a screen reader to users who tab to form inputs
- Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- Heading levels are not missed or skipped to ensure the importance of content is relayed correctly to the end user
- All content is contained within landmarks to ensure ease of use for assistive technology, allowing the user to navigate by page regions
- All not textual content had alternative text or titles so descriptions are read out to screen readers
- HTML page lang attribute has been set
- Aria properties have been implemented correctly
- WCAG 2.1 Coding best practices being followed

### Functional Testing

**Navigation Links**
Testing was performed to ensure all navigation links on the respective pages, navigated to the correct pages as per design. This was done by clicking on the navigation links on each page.

| Navigation Link | Page to Load    |
| --------------- | --------------- |
| Know Ya Countries text and Home icon in navigtion bar | index.html      |
| Capital Cities of Asia Quiz on home page | asia-capitals.html |

Links on all pages navigated to the correct pages as exptected.

**Game Testing**
| Test Case # | Description                                                                                                                                                               | Steps                                                                                                                                                                                                                                            | Expected                                                                                                                                                                                                                                                                                         | Actual      | Pass/Fail |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- | --------- |
| 1           | Test correct answer feedback functioning correctly                                                                                                                        | 1\. Start game.<br>2\. Answer question correctly.                                                                                                                                                                                                | 1.Green background color added to input field and text feedback.<br>2\. Text feedback appears saying that we were correct.<br>3\. Input field, dropdown arrow and check answer button disabled.<br>4\. Focus taken away from the input field.                                                    | As expected | Pass      |
| 2           | Test inccorrect answer feedback functioning correctly                                                                                                                     | 1\. Start game.<br>2\. Answer question incorrectly.                                                                                                                                                                                              | 1\. Red background color added to input field and text feedback.<br>2\. Text feedback appears saying that we were incorrect.<br>3\. Input field, dropdown arrow and check answer button disabled.<br>4\. Focus taken away from the input field.                                                  | As expected | Pass      |
| 3           | Test invalid answer feedback functioning correctly                                                                                                                        | 1\. Start game.<br>2\. Answer question invalidly (not exactly matching a dropdown list option).                                                                                                                                                  | 1.Yellow background color added to input field and text feedback.<br>2\. Text feedback appears saying that we had invalid guess.<br>3\. Check answer button disabled.<br>4\. All other fields/buttons remained active.<br>5\. Input field emptied.<br>6\. Focus taken away from the input field. | As expected | Pass      |
| 4           | Test is all countries appeared in the quiz and not double ups.                                                                                                            | 1\. Start game.<br>2\. Answer every question.<br>3\. console.log the country object half way through and before last question of the quiz.                                                                                                       | 1\. Each country that we've already answered is being removed from the countries object.<br>2\. By last question, the console.log should should just one option for the last renaming country.                                                                                                   | As expected | Pass      |
| 5           | Test score and question number were being updated correctly.                                                                                                              | 1\. Start game.<br>2\. Play full quiz,during which I answering 3 random questions correctly.                                                                                                                                                     | 1\. My score at the end should be 3.<br>2\. The question number at the end should be 50/50.                                                                                                                                                                                                      | As expected | Pass      |
| 6           | Test Jerusalem didn't appear twice in the dropdown options list, and that the one option was deemed correct for both Israel and Palestine (More details in bugs section). | 1\. Start game.<br>2\. Click dropdown arrow to see all options. If we see only one instance of Jerusalem, move on to step 3.<br>3\. Skip ahead until we see both Israel and Palestine. For both, select the sole Jerusalem option as the answer. | 1\. Jerusalem only appears once in the dropdown list.<br>2\. When its selected as the answer for both Israel and Palestine, we get the correct answer feedback, as mentioned in Test Case #1.                                                                                                    | As expected | Pass      |
| 7           | Test modal functioning correctly on both home page and capitals of Asia quiz page.                                                                                        | 1\. Load home page.<br>2\. Click how to play button. Close modal if it opens.<br>3\. Click on question mark in the nav bar. Close modal if it opens.<br>1\. Start game.<br>2\. Click on question mark in the nav bar. Close modal if it opens.   | 1\. Modal opens when either the how to button or the question mark is clicked on both pages.<br>2\. Modal can be closed by clicking on the gray out background or the X button at the top right of the modal.                                                                                    | As expected | Pass      |
| 8           | Test end of quiz functionality.                                                                                                                                           | 1\. Start game.<br>2\. Click next until you reach the end.<br>3\. Click replay button.                                                                                                                                                           | 1.Pink background color added to input field and text feedback.<br>2\. Input field, dropdown arrow, check answer button and next button disabled.<br>3\. Replay button appears. When clicked, it reloads the page and the quiz start again.                                                      | As expected | Pass      |

**Footer Social Media Icons / Links**
Testing was performed on the Font Awesome Social Media icons in the footer to ensure that each one opened in a new tab and that each one had a hover affect of the orange branding color.

Each item opened a new tab when clicked as expected and correct hover color was present.

### Validator Testing 

- HTML
  - No errors were found when passing through the official [W3C validator](https://validator.w3.org)

![Index HTML Test](docs/readme-images/index-w3-html-test.PNG)

![Asia Quiz HTML Test](docs/readme-images/asia-quiz-w3-html-test.PNG)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/)

![CSS Test](docs/readme-images/w3c-css1.PNG)
![CSS Test2](docs/readme-images/w3c-css2.PNG)

- JS
  - No major errors were found when passing through the [JSHint](https://jshint.com/)
  - The displayNames variable is actually a function that is being called on an onclick attribute, as opposed to a variable. 
  - I couldn't figue out the warning about the for in loop.

![Javascript Test](docs/readme-images/jshint.PNG)

### Bugs
- Flavicon emblem was not showing up on deployed site, but it was showing up on the site generated from the GitPod workspace. From searching online, after being pointed in the right direction by my very helpful mentor, I found that this was caused by using absolute files paths, instead of relative files paths, for my Flavicon images. When changed to relative files paths, the Flavicon emblems did show up when using the deployed site.

- On mobile devices, when I delete the last character in the guess input field, the check answer button doesn't get disabled. I need to click backspace one extra time, when inout field is already empty, for the check answer button to disable. Couldn't find a fix for this. I experimented with using touchend event as well as the keyup event, but I couldn't get this to work. This problem does not exist on desktop version of the site.

- By playing through a full game, I noticed that options in the dropdown list were getting deleted when the already answered countries were being removed from the games. To fix this, I made the dropdown list options reference a separate data source for its content, an array containing all the captials.

- After adding the score and question number tracking feature, I found that correct answere were being taken away from the total questions. If i get 2 correct scores, I only end up with 48 questions. It turns out I was deleting object keys within the check answer function, as well as in the next function. Removed the deleing from the check answer function and that solved the problem.

- Jerusalem is argued to be the capital of both Israel and Palestine. This meant that two Jerusalem options were showing up in the dropdown list and only one was correct when either Israel or Palestine is asked. To fix this, I added a continue for Palestine in the loop that generated the dropdown list and added a condition to accept any answer with the Jerusalem text as the correct answer for Palestine.

- Found it was annoying having to keep selecting the guess input field with each new question, so used the run game function, triggered by the next button, to control focus and put the focus back to the guess input field with every new question.

- Question number was increasing 1 beyond total number of questions at end of quiz before user inputs disabled. To fix, I had to create a new check in the next function to not increase the question number when it got down to the last country in the country list object.


## Deployment

### Version Control

The site was created using the Visual Studio code editor and pushed to github to the remote repository ‘tacos-travels’.

The following git commands were used throughout development to push code to the remote repo:

```git add .``` - This command was used to add the file(s) to the staging area before they are committed.

```git commit -m 'commit message'``` - This command was used to commit changes to the local repository queue ready for the final step.

```git push``` - This command was used to push all committed code to the remote repository on github.

### Deployment to Github Pages

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the menu on left select 'Pages'
  - From the source section drop-down menu, select the Branch: main
  - Click 'Save'
  - A live link will be displayed in a green banner when published successfully. 

The live link can be found here - https://adammkeane.github.io/know-ya-countries/index.html

### Clone the Repository Code Locally

Navigate to the GitHub Repository you want to clone to use locally:

- Click on the code drop down button
- Click on HTTPS
- Copy the repository link to the clipboard
- Open your IDE of choice (git must be installed for the next steps)
- Type git clone copied-git-url into the IDE terminal

The project will now of been cloned on your local machine for use.

## Credits 
Thanks to mentor Daisy McGirr for her help with the project.







