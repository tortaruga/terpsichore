- [overview](#overview);
- [notes](#notes);
- [first headache](#first-headache-the-double-navbar)
- [second headache](#second-headache-the-damn-video-background)
- [third headache](#third-headache-the-grid)
- [fourth headache](#the-mother-of-all-headaches-deploy)

[website](https://terpsichore.netlify.app/)

# overview

react practice and second version of an old exercise to see if i could this time do it any better. i think i did. it's slightly prettier, and the design took less to achieve. 

[this](https://www.behance.net/gallery/89651295/Ozeum-Art-Gallery-and-Museum-WordPress-Theme) is the original design.

(the notes are for me you can ignore them)

# notes 

this time react was not a headache! i'm getting the hang of it! this means i that i should progress with the course, and start tackling the section about forms. yey! i hate forms! i want to die!

## first headache: the double navbar

why did i think it would be a good idea to have two nav bars and make the mobile one appear from the side? why do i like to suffer?

getting it to work was easy enough: if you open the site on a small screen you get the open menu button, which shows/hides the side menu without problems; if you open it on bigger screens, the button and the side menu disappear, and the navigation links show up.

now, the issues start when you (god knows why, by the way) decide to resize the damn window. if the mobile menu was left open and you resize the window to be bigger everything breaks spectacularly. i love it.

i spent so much time trying to get it to work as i wanted, but it refused, stubbornly, to grant me even the smallest victory. that was because i kept addressing the wrong issue, but nevermind. all future me needs to remember is that 

```
window.addEventListener('resize', () => {
        if (isOpen) {
           if (window.innerWidth >= 750) {
               document.getElementById('root').style.gridTemplateColumns = '0% 100%'            
            } else {
               document.getElementById('root').style.gridTemplateColumns = '40% 60%'
            }
        } 

        if (!isOpen) {
            document.getElementById('root').style.gridTemplateColumns = '0% 100%'
        }
    })

    function hnadleSideMenu() {
        console.log(isOpen)
        if (isOpen) {
            document.getElementById('root').style.gridTemplateColumns = '0% 100%'            
        } else if (!isOpen) {
            document.getElementById('root').style.gridTemplateColumns = '40% 60%'
        } 

    document.querySelector('.mobile-nav').classList.toggle('hide');

    setIsOpen(prevValue => ! prevValue)
        
    }
```

i'm actually not sure if this is the best way to approach the problem in react, because i'm still new to it, so i probably broke fifteen rules and conventions, but hey, it works, and for now this is the best we're gonna get.

## second headache: the damn video background

so i thought about using position:fixed for the video and make it as big as the screen, but then it would function as background for the whole page, and i wanted it to be the background only for the hero section. 

so i gave it a position of absolute, but then the rest of the content would overlap with it.

so i gave the text of the hero a position of absolute, and it works fine, unless the screen starts becoming really small, at which point the design breaks.
edit: no, nevermind. it now takes up all the screen's height on small devices so it's all good.

### third headache: the grid

well not really a headache since i didn't even attempt it. just a consideration. the grid was probably supposed to be a masonry, but i only wanted to use basic css, so it ended up being a regular grid, which is not the prettiest, but it's good enough. one day i'll tackle masonry layouts, but this is not the day.

## the Mother of All Headaches: DEPLOY

it just wouldnt deploy. it kept saying that the base directory didn't exists, so i checked the name, i checked the spelling, i checked and i checked and i checked but the base directory existed, and it was that one, and what else do you want from me, what do you mean it doesnt exist, it has to!

then i went to sleep. and the next morning i said hey, if the base directory doesnt exist, let's get rid of it: and i left the field empty. magic. it works. 

i have no idea why. my projects have all the same structure, and it has always worked fine, but this time, for a weird trick of destiny, the base directory has to be left empty. and who am i to discuss with fate? so empty it shall be. 