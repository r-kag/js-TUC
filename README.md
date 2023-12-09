# Senior-CAPSTONE
This is a senior project in which I will be designing a web application version of the game TUC.

The Narrative 

This will be a local web app game. Players will play with each other in a "hot-seat fashion". This implementation will have players physically present with each other, play their turn on whatever device is in use (Phone, Laptop, or Desktop) and then hand it to the next player. There will be no less than 2 players for a game and no more than 4 players. Players can still play in groups. There are no specific sign-ins or character names. User will have to select a color (in real time) and stick with it for the rest of the game. The cards are always automatically dealt left to right RED, GREEN, BLUE, YELLOW  for the first round of cards. It then cycles through starting with green and so on until the game is over. The remaining two cards are up to the dealers discretion. Depending on the number of people playing, the rounds and card dealings will defer as stated in the rule book. The game is played from a top-down 2D view. There are no ranking systems. 


Functional requirements:

Users must be able to select the number of players (2-4) 
Users must only see their cards/control their pieces during their turn  
Users must see all other player's movements and positions on the board  
Must keep track of each color's (players) cards and position on the board 
Must begin each game with RED as the dealer and then cycle through each color 
Must activate the appropriate areas on the board corresponding to the number of players  
Players should be able to select which ever piece they wish to play on the board corresponding to their cards.  
Players must select their card and then select their piece twice to grant movement on the board  
Cards must drop when player has no more playable cards  
Game must have a pause button 
Game must pause and request to resume with a different set of cards when completing turns from one player to another  
Pause button must indicate who's turn it is (color's turn) 
Must Declare a winner at the end 
