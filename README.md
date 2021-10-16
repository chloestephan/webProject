# How to setup

Download the github depositery and put the code where you want and then open the powershell window on that folder.
Then, in the powershell window :

# Install

`npm install`

# Run

`npm start`

# See the project

Once all theses steps are done, the project is on the following link : http://localhost:3000/#/

# Properties

You have a header that links to the main page and to the basket.
- The main page allows the user to see what is being sold. You can add each article to your basket and once it is add, you can remove that article from your basket. You choose the quantity you want to buy in the basket once you add the article in it. That main page can be changed in the hard code to allow some sort of "admin" to change an article, delete that article of add an article. Theses functions are in the Home.vue file : the buttons allowing the changing and the deleting of articles are commented on the lines 34 and 35. The little div to add an article is commented on the lines 57 to 67. You can remove the comments to test the functions and then add them again (or not, as you please). 


- the basket shows what articles where added in it and then allows to change the amount of elements bought, up to 10. You can then buy that basket, enter your adress and if it is valid then a popup appears, letting you know that the basket was bought. You are then still on the site, but your purchase was taken into consideration. You are free to leave or buy something else :)
