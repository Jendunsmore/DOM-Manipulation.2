    //---------------------- DOM 2 | Part 4: Adding Menu Interaction -------------------//
//                      ------------------------------------------------
// Menu Link Data
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: 'catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
    ]},
    { text: 'orders', href: '#', subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
    ]},
    { text: 'account', href: '#', subLinks:[
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
    ]},
];
//---------------------------------------------------------------------------------//


//----------------------------- DOM 1 | Part 1 ------------------------------------//
//                    ----------------------------------
// 1. Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementsByTagName('main');
console.log(mainEl[0]);

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl[0].style.backgroundColor = 'var(--main-bg)';

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl[0].innerHTML = '<h1>DOM Manipulation</h1>';

// 4. Add a class of flex-ctr to mainEl. Hint: Use the Element.classList API.
mainEl[0].classList.add('flex-ctr');
//----------------------------------------------------------------------------------//


//----------------------------- DOM 1 | Part 2 ------------------------------------//
//                    ---------------------------------
// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById('top-menu');

// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');
//-------------------------------------------------------------------------------------//


//-------------------- DOM 2 | Part 4: Adding Menu Interaction Cont.-----------------//
//                    ----------------------------------------------
// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable
// named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll('a');

// 2. Attach a delegated 'click' event listener to topMenuEl.
    // The first line of code of the event listener function should call the event
    topMenuEl.addEventListener('click', function(event) {

    // object's preventDefault() method.
    event.preventDefault();

    // The second line of code of the function should immediately return if the element clicked was not an <a> element.
    if (event.target.tagName !== 'A') return;

    // Log the content of the <a> to verify the handler is working.
    console.log(event.target.textContent);
});

// Now that we have references to each of these links,
// and a registered event listener, we will want to
// add a toggled "active" state to each menu item, showing whether or not it is currently selected:
    // 1. The event listener should add the active class to the <a> element that was
    // clicked, unless it was already active, in which case it should remove it.
    // 2. The event listener should remove the active class from each other <a> element in 
    // topMenuLinks - whether the active class exists or not.
    // Hint: Removing a non-existent class from an element does not cause an error!
topMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName !== 'A') return;
    console.log(event.target.textContent);
    topMenuLinks.forEach(link => link.classList.remove('active'));
    if (!event.target.classList.contains('active')) {
        event.target.classList.add('active');
    }

    let clickedLink = menuLinks.find(link => link.text === event.target.textContent);
    if (clickedLink && clickedLink.subLinks) {
        subMenuEl.style.top = '100%';
        buildSubMenu(clickedLink.subLinks);
    } else {
        subMenuEl.style.top = '0';
    }
});
//----------------------------------------------------------------------------------//


//----------------------------- DOM 1 | Part 3 ------------------------------------//
//                   --------------------------------------
// 1. Iterate over the entire menuLinks array and for each "link" object:
menuLinks.forEach((Link) => {

    // 2. Create an <a> element - .createElement()
    let newLink = document.createElement(`a`);

    // 3. On the new element, add an href attribute with its value set to the href property of the "link" object.
    newLink.setAttribute(`href`, Link.href);
    // console.Log(newLink)

    // 4. Set the new element's content to the value of the text property of the "link" object.
    newLink.textContent = Link.text;

    // 5. Append the new element to the topMenuEl element.
    topMenuEl.appendChild(newLink);
})
//----------------------------------------------------------------------------------//


//---------------------- DOM 2 | Part 3: Creating the Submenu ----------------------//
//                 ----------------------------------------------
// 1. Select and cache the <nav id ="sub-menu"> element in a variable named subMenuEl.
let subMenuEl = document.getElementById('sub-menu');

// 2. Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

// 3. Set the background color of subMenuEl to the value store in the --sub-menu-bg
// CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');

// 5. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = 'absolute';

// 6. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = '0';
//----------------------------------------------------------------------------------//


//--------------- DOM 2 | Part 5: Adding Submenu Interaction ----------------------//
//           --------------------------------------------------
// 1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it
// was inactive when clicked):
    // A. If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do,
    // except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
    // B. Otherwise, set the CSS top property of subMenuEl to 0.
    // Hint: Caching the "link" object will come in handy for passing its subLinks array later.
function buildSubMenu(subLinks) {
    subMenuEl.innerHTML = '';
    subLinks.forEach(link => {
        let subLinkEl = document.createElement('a');
        subLinkEl.setAttribute('href', link.href);
        subLinkEl.textContent = link.text;
        subMenuEl.appendChild(subLinkEl);
    });
}

// 1. Attach a delegated 'click' event listener to subMenuEl.
    // a. The first line of code of the event listener function should call the event
    // object's preventDefault() method.
    // b. The second line of code within the function should immediately 
    // return if the element clicked was not an <a> element.
    // c. Log the content of the <a> to verify the handler is working.
// 2. Next, the event listener should set the CSS top property of subMenuEl to 0.
// 3. Remove the active class from each <a> element in topMenuLinks.
// 4. Update the contents of mainEl, within an <h1>, to the contents of the <a> element
// clicked within subMenuEl.
// 5. If the ABOUT link is clicked, an <h1>About</h1> should be displayed.
subMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName !== 'A') return;
    console.log(event.target.textContent);
    subMenuEl.style.top = '0';
    topMenuLinks.forEach(link => link.classList.remove('active'));
    mainEl[0].innerHTML = `<h1>${event.target.textContent}</h1>`;
});
//----------------------------------------------------------------------------------//
