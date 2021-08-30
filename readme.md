Time spent: 45+60+60+120+65+60+40+60+30+60+60+60+20+80+90+30+30+30+45+45+30 mins
=> Total time spent: 18 hours 30mins



Commit#1 - JS Drumkit


Commit details:
1. Working on the JS Drumkit project
2. Added background image 
3. Added the div keys and div key 
4. Wrote css to make it look like the same in the project



Commit#2 - JS Drumkit - Completed


Things learnt :
(i) classList.add('className') , classList.remove('className')
(ii) document.querySelector('className') , document.querySelectorAll('className')
(iii) .addEventListener


Commit#3 - CSS + JS clock completed && Playing with CSS variables using Javascript at runtime completed


Things learnt :
(i)document.documentElement.style.setProperty
(ii) addEventListener('change') , mousemove
(iii) <input type="range"
(iv) <input type="color"
(v) <label for="component-name">
(vi) https://picsum.photos/800/500 to get a random image from unsplash
(vii)  create css variables using 'var' and '--propertyname'
:root
{
	--base: #ffc600;
	--spacing: 10px;
	--blur: 10px;

}


Commit #4 - Array Cardio Day 1

Things learnt
1. array.filter()
2. array.map()
3. array.sort()
4. array.reduce()


Commit #5 - Ajax Type Ahead

1. Built a search box which shows an ajax like feature found in google autosuggest to suggest data from a database(we've used a json here and fills in the result as and when we type text)

Commit #6 - Array Cardio Day 2

Things learnt

1.Array.some()
2.Array.every()
3. Array.find()
4. Array.findIndex()


Commit#7- Fun with HTML Canvas


Things learnt

1. learn how to use hsl command for hue,saturation,lightness
2. learnt how to render a canvas in 2d mode
3. learnt how to draw lines on canvas.


Commit#8 - Must Know Dev Tools

Things learnt

1. lots of console. variations
like
console.log()
2. console.dir()
3. console.info, console.warn, console.error, console.assert
4. console.group, console.groupCollapsed, console.groupEnd
5. console.time used with a promise and console.timeEnd
6. console.table


Commit#9 - Hold down shift to check multiple checkboxes

Things learnt
1. Learnt how to check if shift key is pressed while an event happens.


Commit#10 - Learnt how  to create a custom HTML5 video player 

Things learnt
1. Learnt how  to create a custom HTML5 video player with
(i) Skip 25 seconds ahead
(ii) Skip 10 seconds previous
(iii) play, pause video
(iv) progress bar seeking(scrubbing)
(v) handle volume bar seeking
(vi) handle playback speed changing.
(vii) show correct play/pause button depending upon video playing or pausing.

Commit#11  - Key Event Detection (Konami Code)

Things learnt
1. Learnt how to activate a key sequence to enable cheat code type settings in the browser
2. Accomplished a childhood dream of creating a cheatcode sequence that sounded super cool
Now , when you press r f r then Shift+Enter Key then Ctrl+Alt+L, a secret code activation takes place
then after that when you type in v i s h n u, the cheat code gets activated and shows you 'welcome to the portal Mr Vishnu Ajit' in the console! Uber Cool !!

Commit#12  - Day 13 - Slide In to Scroll

Things learnt
1. Learnt how to use a debounce function
2. Learnt how to detect if the image on screen is actually visible in the window
3. Learnt how to dynamically add a css class on an html element
4. Learnt how to dynamically remove a css class on an html element



Commit #13 - Day 14 - Objects and Arrays : References Vs Copy

1. Learnt how to reference an array and copy an array
2. Learn how to reference and Object and copy an object.


Commit#14 - Day 15- Local Storage and Event Delegation

1. Learnt how to store objects and their values using  json string in the LocalStorage of the Browser so the values persist even if the file is closed and opened later on
2. Learnt Event Delgation. If an html element on the page is dynamically created and it has event listeners, the better way to add listeners to it is to add listeners to the parent element. And inside the listener function check if the e.target.matches('input') means if the event has been raised by our required element . in our case 'inputs' . if not just return the function. so the advantage is , no matter if the children of the parent element are being created, modified or deleted dynamically. As long as the parent of the children exist, the parent has the responsibility of invoking the reqd function when the situation demands it.

Commit#15 - Day 16 - CSS Text Shadow Mouse Move Effect

Things learnt: 
1. Learnt how to move text shadow according to mouse position on the html element.

Commit#16 - Day 17 - Sorting band names without articles

Things learnt:
1. Learnt once again how to use map function in array
2. Learnt once again how to use sort function in array
3. Learnt once again how to use regexp replace function 



Commit#17 - Day 18 - Tally string times with Array.reduce function

Things learnt :

1. Learnt how to extract timestamp numbers from string
2. Learnt to perform mathematical operations on the numbers

Commit#18.02 - Day 19 - Unreal Webcam Fun //in Commit#18.01 forgot to do git add --all. so that commit is just waste.

Total time spent: 90 mins

Things learnt:

1. How to display video from webcam on browser
2. How to convert the webcam data to video data
3. How to capture the video data into a screenshot(or photo) jpg
4. How to create a nodejs server for this program using package.json
5. How to tel the server what all dependecies to load using package.json
6. How to run the localhost server using npm start


Commit #18.03 - Day 19 - Unreal webcam fun
Total time spent : 20mins

Things learnt:
1. Having fun manipulating r,g,b pixels from the webcam out



Commit #19
Total time spent : 30 mins

Things learnt:
1. getBoundingClientRect() method
2. how to create a filled background element dynamically and move it around on the page wherever the mouse moves.

Commit #20
Total time spent : 30mins

Things learnt:
1. Learnt how to use SpeechSynthesis function of browser to speak aloud any english text.


Commit #21 - Project Day 24 - Sticky Nav
Total time spent : 30 mins

Things learnt: 

1. Learnt how to add sticky nav when the user has scrolled down
2. Learnt how to use inline styles to body and ensure the page scroll feels smooth enough.


Commit #21 - Day 25 - Event capture , propagation , bubbling, once
Total time spent: 45 mins

Things learnt:

1. When capture is true, the event propagates from top to bottom
and capture is set to false, the event bubbles up from bottom to top.
Remember capture is top to down
and Bubbling is bottom to top. so if you want to stop propagation of the bubbling at the initial stage
or at any stage you want, just use e.stopPropagation() where e is the event parameter.
2. using once : true inside addEventListener is equal to putting removeEventListener


Commit #22 - Day 26 - Stripe Website Follow along Nav

Things learnt:
1. Show dynamic navigation elements with loads of html content inside it, as and when mouse enters and leaves.

Commit #23 - Day 27 

Things learnt:
1. Using mouse click and drag, Scroll divs to left or right with whatever speed you want to, in any direction.

