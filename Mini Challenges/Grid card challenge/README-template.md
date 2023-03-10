# Frontend Mentor - Single price grid component solution

This is a solution to the [Single price grid component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/single-price-grid-component-5ce41129d0ff452fec5abbbc). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See a hover state on desktop for the Sign Up call-to-action

### Screenshot

![My final design:](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS

### What I learned

For my first project, I practiced implementing a flexbox within flexbox layout for a responsive design. I considered a mobile-first design, with each article child stacking for the mobile view. I am proud of how I used flex in varying directions for this challenge. I used my product design skills from Figma to consider my skills of Auto layout and apply them as flex in CSS.

```scss
@media (max-width: 750px) {
  article {
    flex-direction: column;
  }
  .container {
    min-width: 310px;
  }
}
@media (min-width: 750px) {
  article {
    flex-direction: row;
  }
  .container {
    min-width: 580px;
  }
}
```

I have learnt to generalise my code more, preventing lots of repeated code. (E.g. I made a class called 'title', 'big', 'small' etc). To make the card look more visually appealing when changing size I used the clamp method which I hadn't used before. I had the issue of applying border-radius to the .container and it only showed on the top two corners, but overcame this by adding a solid red border and noticing that the bottom two corners are overflowing into the rounded part. I set this to overflow:hidden.

```scss
.container {
  //Vertically, there is a column layout, with the second element being two horiz sections
  display: flex;
  flex-direction: column;
  width: min(50%, 640px);
  background-color: white;
  border-radius: 10px;
  overflow: hidden; //ensure borders are all rounded. Without this, bottom two borders are 0 radius for some reason..
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.173));
}
```

I look forward to growing these skills more with further projects.

### Continued development

I want to build my knowledge of grid layout. I had learned it about a month or two ago but its completely gone, I was wondering if this card would have been easier to make with grid but I remember I found the syntax a bit confusing.

### Useful resources

- [Flexbox froggy](https://flexboxfroggy.com/) - I had forgotten how to do flexbox and doing the first couple of challenges of this had brought it back to me.
- [Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) - I forgot how to do these

## Author

- Website - [My github](https://github.com/tgoulder4)
- Frontend Mentor - [@tgoulder4](https://www.frontendmentor.io/profile/tgoulder4)

## Acknowledgments

Thanks 'sammie' in the Programmers Palace discord for helping me debug the issue with the partial rounded corners.
