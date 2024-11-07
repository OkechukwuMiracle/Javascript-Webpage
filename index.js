// Header Section
const header = document.createElement('header');
header.style.background = 'grey';
header.style.height = '20vh';
header.style.display = 'flex';
header.style.justifyContent = 'space-between';
header.style.overflow = 'hidden';
header.style.paddingInline = '6%';

// Logo container
const logoContainer = document.createElement('div');
logoContainer.style.display = 'flex';
logoContainer.style.alignItems = 'center'

// Logo image
const logo = document.createElement('img');
logo.style.height = '70%';
logo.style.width = '100%';
logo.src = './assets/logo.png';
logo.style.borderRadius = '50%';

logoContainer.appendChild(logo);

// Header link container
const headerLinks = document.createElement('div');
headerLinks.style.width = '42%';
headerLinks.style.display = 'flex';
headerLinks.style.alignItems = 'center';
headerLinks.style.justifyContent = 'center';
headerLinks.style.gap = '15%';

// Header link texts
const links = ['Home', 'About', 'Contact', 'Services'];
links.forEach(linkText => {
    const link = document.createElement('a');
    link.innerText = linkText;
    link.href = `#${linkText.toLowerCase()}`;
    link.style.color = 'white';
    link.style.fontSize = '1.5rem';
    link.style.textDecoration = 'none';

    headerLinks.appendChild(link);

});



// Main Section
const main = document.createElement('main');
main.style.width = '100%';
main.style.height = '100vh';
main.style.display = 'flex';
main.style.justifyContent = 'center'
// main.style.overflow = 'hidden';
main.style.backgroundImage = 'url(./assets/background-image.jpg)';
main.style.backgroundSize = 'cover';
main.style.backgroundRepeat = 'no-repeat';
main.style.backgroundPosition = 'center';


// Div container of the content
const content  = document.createElement('div');
content.style.width = '100%';
content.style.height = '100vh';

// Profile Image Container
const hero_container = document.createElement('div');
hero_container.style.width = '20%';
hero_container.style.height = '45vh';
hero_container.style.borderRadius = '50%';
hero_container.style.display = 'flex';
hero_container.style.justifyContent = 'center';
hero_container.style.alignItems = 'center';
hero_container.style.margin = '4% auto 0';

// Profile Image
const hero = document.createElement('img'); 
hero.src = './assets/profilePics.jpg';
hero.style.width = '100%';
hero.style.height = '100%';
hero.style.borderRadius = '50%';
hero.style.objectFit = 'cover'

// h1 container
const h1_container = document.createElement('h1');
h1_container.style.width = '50%';
h1_container.innerText = `${'Hello' + ',' + ' ' + 'I' + ' ' + 'Am' + ' ' + 'Okechukwu Miracle' + ' ' + 'And I Am A WebDeveloper'}`;
h1_container.style.fontSize = '2.5rem';
h1_container.style.color = 'white'
h1_container.style.fontWeight = '900';
h1_container.style.textAlign = 'center';
h1_container.style.margin = '4% auto 0'

// Paragraph
const paragraph = document.createElement('p');
paragraph.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus, purus eget consectetur lobortis, velit enim ultricies velit, ac congue risus velit id est. Sed viverra, mauris a consectetur consectetur, nulla velit lobortis lectus, sed consectetur neque lacus vel velit. Sed id nunc et nunc facilisis elementum. Donec vel nunc vitae est elementum malesuada vel in nisi.';
paragraph.style.width = '70%'
paragraph.style.color = 'white';
paragraph.style.fontSize = '1.2rem';
paragraph.style.margin = '3% auto 0';
paragraph.style.textWrap = 'pretty';


// Footer
const footer = document.createElement('footer')
footer.style.height = '20vh'; 
footer.style.backgroundColor = 'black'
footer.style.display = 'flex';
footer.style.justifyContent = 'space-between';
footer.style.overflow = 'hidden';
footer.style.paddingInline = '6%';
footer.style.paddingBlock = '3%';

// Footer Logo Container 
const footerLogoContainer = document.createElement('div');
footerLogoContainer.style.display = 'flex';
footerLogoContainer.style.alignItems = 'center'

// FooterLogo image
const footerLogo = document.createElement('img');
footerLogo.style.height = '70%';
footerLogo.style.width = '100%';
footerLogo.src = './assets/logo.png';
footerLogo.style.borderRadius = '50%';

footerLogoContainer.appendChild(footerLogo);

// Footer Link Container
const footerLinksContainer = document.createElement('div');
footerLinksContainer.style.width = '42%';
footerLinksContainer.style.display = 'flex';
footerLinksContainer.style.flexDirection = 'column'
footerLinksContainer.style.alignItems = 'center';
footerLinksContainer.style.justifyContent = 'center';
footerLinksContainer.style.gap = '5%';

// Footer Link texts
const footerLinks = ['Home', 'About', 'Contact', 'Services']
footerLinks.forEach(linkText =>{
    const footerLink = document.createElement('a');
    footerLink.innerText = linkText;
    footerLink.href = `#${linkText.toLowerCase()}`;
    footerLink.style.color = 'white';
    footerLink.style.fontSize = '1rem';
    footerLink.style.fontWeight = 'bold';
    footerLink.style.textDecoration = 'none';

    footerLinksContainer.appendChild(footerLink);
});



document.body.style.margin = 0;
document.body.prepend(header);
header.appendChild(logoContainer);
header.appendChild(headerLinks);
document.body.appendChild(main);
main.appendChild(content);
content.appendChild(hero_container);
content.appendChild( h1_container);
hero_container.appendChild(hero);
content.appendChild(paragraph);
document.body.appendChild(footer);
footer.appendChild(footerLogoContainer);
footer.appendChild(footerLinksContainer);


