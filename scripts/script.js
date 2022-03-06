const listItem1 = document.querySelector('.features-list-item1');
const listItem2 = document.querySelector('.features-list-item2');
const listItem3 = document.querySelector('.features-list-item3');

const secondIMG = document.querySelector('.second-img');
const secondH4 = document.querySelector('.second-h4');
const secondP = document.querySelector('.second-p');

listItem1.addEventListener('click', () => {
    listItem2.classList.remove('border-bottom');
    listItem3.classList.remove('border-bottom');

    listItem1.classList.add('border-bottom');
    secondIMG.setAttribute('src', 'images/illustration-features-tab-1.jpg');
    secondH4.innerHTML = `Bookmark in one click`;
    secondP.innerHTML = `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.`;
});

listItem2.addEventListener('click', () => {
    listItem1.classList.remove('border-bottom');
    listItem3.classList.remove('border-bottom');

    listItem2.classList.add('border-bottom');
    secondIMG.setAttribute('src', 'images/illustration-features-tab-2.jpg');
    secondH4.innerHTML = `Intelligent search`;
    secondP.innerHTML = `Our powerful search feature will help you find saved sited in no time at all. No need trawl through all of your bookmarks.`;
});

listItem3.addEventListener('click', () => {
    listItem1.classList.remove('border-bottom');
    listItem2.classList.remove('border-bottom');

    listItem3.classList.add('border-bottom');
    secondIMG.setAttribute('src', 'images/illustration-features-tab-3.jpg');
    secondH4.innerHTML = `Share your bookmarks`;
    secondP.innerHTML = `Easily share your bookmarks and collections with others. Create a shareable link that you cand send at the click of a button.`;
});

const burguer = document.querySelector('#logo-burger');
const menuResponsive = document.querySelector('.resp');
const exit = document.querySelector('#exit');

burguer.addEventListener('click', () => {
    menuResponsive.style.display = 'block';
})

exit.addEventListener('click', () => {
    menuResponsive.style.display = 'none';
})
