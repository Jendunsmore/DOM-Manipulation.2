// Menu Link Data
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];


//-------- Part 1 -------------------------------------------------//

// 1. Select and cache the <main> element in a variable named mainEl.
let mainEl = document.getElementsByTagName('main');
console.log(mainEl[0]);

// 2. Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl[0].style.backgroundColor = 'var(--main-bg)';

// 3. Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl[0].innerHTML = '<h1>DOM Manipulation</h1>';

// 4. Add a class of flex-ctr to mainEl. Hint: Use the Element.classList API.
mainEl[0].classList.add('flex-ctr');


//-------- Part 2 -------------------------------------------------//

// 1. Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
let topMenuEl = document.getElementById('top-menu');

// 2. Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = '100%';

// 3. Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

// 4. Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around');


// ------- Part 3 ------------------------------------------------//

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


