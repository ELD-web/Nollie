# Nollie

**Student:** Ethan Leigh G. Dela Torre
**Website category:** Education / E-Learning
**Live site:** https://eld-web.github.io/Nollie/

## Project description
Nollie is a fingerboard trick library and progress tracker. Visitors can browse 25 flatground fingerboard tricks, watch a video tutorial for each one, and track which tricks they have landed in four stances (Regular/Goofy, Fakie, Nollie, and Switch). Progress is saved in the visitor's own browser, so no account or database is needed.

## Main features
- **Trick library** with 25 tricks, each with a category, difficulty badge, and short description
- **Search and filters** by trick name, category, and difficulty
- **Video tutorials page** with a thumbnail, creator credit, and a link to each YouTube tutorial
- **Progress tracker** with a checkbox for each trick in each of the 4 stances (100 in total), an overall progress bar, and a reset button
- **Saved progress** using Local Storage, so ticks stay after refreshing or closing the tab
- **Live navbar counter** that shows the number of landed stances on every page
- **Contact and feedback form** with validation and error messages (the form does not send data anywhere, since the site has no backend)
- **Interactive deck card** on the Home page with a "Flip deck" button
- **Responsive layout** with a mobile menu, tested at phone, tablet, and desktop widths

## Pages
| Page | File |
|---|---|
| Home | `index.html` |
| Tricks | `tricks.html` |
| Tutorials | `tutorials.html` |
| Tracker | `tracker.html` |
| About | `about.html` |

## Technologies used
- HTML5
- CSS3 (Flexbox, Grid, CSS variables, media queries)
- JavaScript (vanilla, no frameworks)
- Local Storage and JSON for saving progress
- Google Fonts (Oswald and Plus Jakarta Sans)
- Hosted on GitHub Pages

## Project structure
```
nollie/
├── index.html
├── tricks.html
├── tutorials.html
├── tracker.html
├── about.html
├── css/style.css
├── js/
│   ├── tricks-data.js   (all trick data, shared by the pages)
│   ├── main.js          (mobile menu and navbar counter)
│   ├── home.js          (flip deck button)
│   ├── tricks.js        (trick cards, search, filters)
│   ├── tutorials.js     (tutorial cards, search, filter)
│   ├── tracker.js       (checkboxes, progress, Local Storage, reset)
│   └── about.js         (credits list and form validation)
└── images/
```

## How to run
No installation is needed. Download or clone the repository and open `index.html` in a browser, or visit the live site above.

## Notes
- Progress is saved per browser and per address. It will not carry over to another browser or device, and clearing browser data removes it.
- Video thumbnails and tutorial links need an internet connection.
- The Shove-it and Pop Shove-it tricks share one tutorial video, and so do the Kickflip and Double Kickflip.

## Credits
**Trick list:** based on the Wood Club Fingerboarding trick list sheet.

**Video tutorials:** every tutorial belongs to its creator. Thank you to:
- WoodClub Fingerboarding
- CJ Morshed
- Itachi_han
- Alex Garcia
- hunkfb
- weakfingers

**Images:** the deck images on the Home page and the parts photo on the About page are the developers set ups.
