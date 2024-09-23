
// Menu Link Data
var menuLinks = [ //---------- DOM 2 | Part 4 ---------------//
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

// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById('top-menu');

// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');

//----------------------------- DOM 2 | Part 4 -------------------------------------//
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
// Now that we have references to each of these links, and a registered
// event listener, we will want to add a toggled "active" state to each menu
// item, showing whether or not it is currently selected:

    // 1. The event listener should add the active class to the <a> element
    // that was clicked, unless it was already active, in which case it should remove it.
    topMenuLinks.forEach(function(Link) {  // loop through <a> inside topMenuEl

    // 2. The event listener should remove the active class from each
    // other <a> element in topMenuLinks - whether the active class exists or not.
    // Hint: Removing a non-existent class from an element does not cause an error!
        Link.classList.remove('active');  // removes active class from <a>
    });
    event.target.classList.add('active'); // active clicked
    console.log(event.target.textContent);
});



//----------------------------- DOM 1 | Part 3 ------------------------------------//

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


//----------------------------- DOM 2 | Part 3 ------------------------------------//

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
