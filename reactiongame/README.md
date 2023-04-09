In this coding challenge you’re asked to write a small web game that tests the user’s reaction time. The game will initially display a red box, the goal is to click on the box as soon the box changes color from red to green. The game should display the reaction time in ms.

You should write all of your game logic in the ReactionTest component. By default, it should display a button with the text “Start Game”. This button will be used to start the game.

Once the button is pressed, your app should display a red box for anywhere between 1 and 6s.

If the users click on the red box, they failed the game and you should display You clicked too early! message and end the game immediately.

If the users click on the green box, they finished the game successfully and you should display You took <time>ms! the message, where time indicates the time it took them to react in milliseconds.