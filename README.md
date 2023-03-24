# Drum Kit Project
 
This code is responsible for creating an application that plays different sounds when specific keys on the keyboard or buttons on the page are pressed.

The **sons** object contains a map of keys to sounds that are stored in a **'sounds'** directory. The **divCreate** function is responsible for creating a div that corresponds to each of the keys in sons.

The **show** function uses the **divCreate** function to create all the divs and add them to the page.

The **playSounds, effectAdd, and effectRemove** functions are responsible for playing the sound associated with the key, adding an active class to the corresponding div, and then removing the active class after a brief interval of time.

Finally, the **divActive** function is responsible for detecting when a key is pressed or a button is clicked, and it calls the **playSounds, effectAdd, and effectRemove** functions in response. The click event is added to the div created in the **divCreate** function, while the key event is added to the entire window.