const sections = Array.from(document.querySelectorAll('section'));
const menu = document.getElementById('navbar__list');
let numberOfListItems = sections.length ;



function createListItem(){
    for (sections of sections){
        sectioName = section.getAttribute('data-Nav');
        sectioLink = section.getAttribute('id');
        listItem = document.createElement('li');
        listItem.innerHTML = '<a class="menu__link" herf= "#${sectioLink}">${sectioName}</a>'
        menu.appendChild(listItem); 

    };
};
createListItem();
