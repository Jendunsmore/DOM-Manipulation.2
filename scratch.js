/*
addEventListener Method
element.addEventListener(<event-name>, <callback>, <use-capture>);
event object
the type property which holds the event type ("click" in this case).
"this" inside of listener function
bubbling & capturing
Event delegation, process which single event listener handles event across many elements.
single event listener responds to events triggered by descendant(s)
Without event delegation, new listener would be required for every new element
event capturing- reverse bubbling| {capture: true} passed into listener, fires 1st on least nested...
elements have default browser actions| default runs contrary to other actions. preventDefault()


/*
In order to add interaction:
1. Select and cache the all of the <a> elements inside of topMenuEl in a
variable named topMenuLinks.
*/

//let topMenuLinks = topMenuEl.querySelectorAll('a');
//selects all <a> inside topMenuEl

/*
2. Attach a delegated 'click' event listener to topMenuEl.
// ("click"
//topMenuEl.addEventListener

    The first line of code of the event listener function should call the
    event object's preventDefault() method.
    * event listener function call event object preventDefault method
- event.preventDefault

    The second line of code of the function should immediately return if the
    element clicked was not an <a> element.
    * if clicked is not <a> element
        return

    Log the content of the <a> to verify the handler is working
    * else
        log <a> content
*/


// event listener should add active class to <a> element clicked
// UNLESS already active
// else remove it
// * LOOP ?

// event listener should remove active class from each <a> element in topMenuLinks
// no matter <a> exists/Not. (no error caused)
// * LOOP
//the clicked <a> element gets the active class, or has it removed if its already active.
//the active class is removed from all other <a> elements within topMenuLinks
// ('click', function(event))

/*
let topMenuLinks = topMenuEl.querySelectorAll('a');
topMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName !== 'A') {
        console.log(event.target.textContent);

returns all element descendants of node matches
*/

//-------------------------------
/*
// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll('a');

// 2. Attach a delegated 'click' event listener to topMenuEl.
    // The first line of code of the event listener function should call the event
    // object's preventDefault() method.
    // The second line of code of the function should immediately return if the element
    // clicked was not an <a> element.
    // Log the content of the <a> to verify the handler is working.
topMenuEl.addEventListener('click', function(event) { // event listener
    event.preventDefault();  // prevent default behavior
    if (event.target.tagName !== 'A') {  // capitalized A- tagName of HTML
        return;
    }

    topMenuLinks.forEach(function(Link) {  // loop through <a> inside topMenuEl
        Link.classList.remove('active');  // removes active class from <a>
    });
    event.target.classList.add('active'); // active clicked
    console.log(event.target.textContent);});
let clickedLink = menuLinks.find(link => link.text === event.target.textContent); // clicked menu, menuLinks


// Now that we have references to each of these links, and a registered
// event listener, we will want to add a toggled "active" state to each menu
// item, showing whether or not it is currently selected:

    // 1. The event listener should add the active class to the <a> element
    // that was clicked, unless it was already active, in which case it should remove it.

    // 2. The event listener should remove the active class from each
    // other <a> element in topMenuLinks - whether the active class exists or not.
    // Hint: Removing a non-existent class from an element does not cause an error!
*/







        // 1. Clear the current contents of subMenuEl.
    // 2. Iterate over the subLinks array, passed as an argument, and for each "link" object:
        // a. Create an <a> element.
        // b. Add an href attribute to the <a>, with the value set by the href property of the "link" object.
        // c. Set the element's content to the value of the text property of the "link" object.
        // d. Append the new element to the subMenuEl.

        // 1. Attach a delegated 'click' event listener to subMenuEl.
    // 1. The first line of code of the event listener function should call the event
    // object's preventDefault() method.
    // 2. The second line of code within the function should immediately 
    // return if the element clicked was not an <a> element.
    // 3. Log the content of the <a> to verify the handler is working.
// 2. Next, the event listener should set the CSS top property of subMenuEl to 0.
// 3. Remove the active class from each <a> element in topMenuLinks.
// 4. Update the contents of mainEl, within an <h1>, to the contents of the <a> element
// clicked within subMenuEl.
// 5. If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
