const container = document.getElementById ('container');

const firstdiv = document.createElement ('div');
const title = document.createElement('h2');
const img = document.createElement('img');
img.classList.add('image')
img.src = './image/2.png'
title.innerHTML = 'BLACK GOOSE BISTRO';
title.classList.add('head1')

firstdiv.appendChild(img)
firstdiv.appendChild(title)
container.appendChild(firstdiv)

const heading1 = document.createElement('div');
const heading2 = document.createElement('div');
const heading3 = document.createElement('div')
const title1 = document.createElement('h2');
title1.classList.add('head')
const title2 = document.createElement('h2');
title2.classList.add('head')
const title3 =document.createElement('h2');
title3.classList.add('head')
const paragragh = document.createElement('p');
const paragragh1 = document.createElement('p');
const paragragh3 = document.createElement('p');

title1.innerHTML = 'The Restaurant';
paragragh.innerHTML = 'The Black Goose Bistro offers causual lunch and dinner fare in a hip atmosphere. The menu changes <br> regularly to highlight the freshest ingredients. '
title2.innerHTML = 'Castering';
paragragh1.innerHTML='you have fun well.... handle the cooking. black goose catering can handle events from snack for bridge <br> club to elegant cooperate '
title3.innerHTML='location and hours'
paragragh3.innerHTML=`seekonk, Massachusetts; <br>monday through 11 am to 9pm, <br>friday and saturday,11am to midnight`;
heading1.appendChild(title1)
heading1.appendChild(paragragh)
heading2.appendChild(title2)
heading2.appendChild(paragragh1)
heading3.appendChild(title3)
heading3.appendChild(paragragh3)
container.append(heading1, heading2,heading3)