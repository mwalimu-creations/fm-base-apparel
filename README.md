# Frontend Mentor - Base Apparel coming soon page solution

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [GitHub](https://github.com/mwalimu-creations/fm-base-apparel)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I revisited the use of picture, and the srcset attribute to use different images based on the sceen size

```html
<picture>
  <source media="(min-width:0px)" srcset="./images/hero-mobile.jpg" />
  <source media="(min-width:1440px)" srcset="./images/hero-desktop.jpg" />
  <img src="./images/hero-desktop.jpg" alt="hero" />
</picture>
```

### Useful resources

- [W3C Schools](https://www.w3schools.com/html/) - This helped me understand the picture element.

## Author

- Frontend Mentor - [@broken555wheel](https://www.frontendmentor.io/profile/broken555wheel)



