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
//event.preventDefault

    The second line of code of the function should immediately return if the
    element clicked was not an <a> element.
    * if clicked is not <a> element
        return

    Log the content of the <a> to verify the handler is working
    * else
        log <a> content
*/
