# How to setup

Download the github depositery and put the code where you want and then open the powershell window on that folder.
Then, in the powershell window :

# Install

`npm install`

# Run

`npm start`

# See the project

The project is then found on the following link : http://localhost:3000/#/

# Properties

You have a header that links to the main page and to the basket.
- The main page allows the user to see what is being sold. You can add each article to your basket and once it is added, you can remove that article from your basket. You choose the quantity you want to buy in the basket once you add the article in it.

- the basket shows what articles where added in it and then allows to change the amount of elements bought, up to 10. You can then buy that basket, enter your adress and if it is valid then a popup appears, letting you know that the basket was bought. You are then still on the site, but your purchase was taken into consideration. You are free to leave or buy something else :)


# Implementations asked and the ones added

"Build a web application to book, rent or buy something of your choice, like:

- A product shop. The application displays the catalogue ✔️, allows both sorting and filtering by various criteria ✔️. Each product has a dedicated presentation ✔️. Additionally, the customer may fill a cart ✔️ and provide its delivery address.✔️"
- We also implemented that one can delete a product or modify it. The modification can be validated or can be cancelled if in the mean time you suddenly wish to not modify anything anymore. The implementation doesn't fully modify anything in the hard code, which means that if we stop and restart the project, the original data will show but the changes are still taken into consideration during the visit when the change happened.
