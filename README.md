# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page


### Links

- Solution URL: [GitHub](https://github.com/Mybebe1/easy-banking)
- Live Site URL: [Netlify](https://easybanking-landpage.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Google: [Public Sans](https://fonts.google.com/specimen/Public+Sans)

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to use flex and grid mixture including maintaining my padding and margin.

To see how you can add code snippets, see below:

```html
 <header class="header">
    
      <div class="logo">
        <img src="images/logo.svg" class="logo-img">
      </div>
        <ul class="navigation">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
        <button class="btn">Request invite</button>
        <button class="dropdown-toggle"><img src="images/icon-hamburger.svg"></button>
    
  </header>
```
```css
header {
    background-color: var(--white);
    padding: 5px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    z-index: 2;
    width: 100vw;
}

.navigation li {
    display: inline-block;
}

.navigation li a {
    position: relative;
    margin-left: 20px;
    color: var(--grayish-blue);
}

.navigation li a::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -35px;
    width: 0;
    height: 4px;
    background: var(--lime-green);
    transition: all .5s;
}

.navigation li a:hover::after {
    width: 100%;
}
```


### Continued development

Moving forward, I will continue to build projects till I am more confident of Grid and Flex. Thank you.

## Author

- Twitter - [@DavidTektek](https://www.twitter.com/DavidTektek)

