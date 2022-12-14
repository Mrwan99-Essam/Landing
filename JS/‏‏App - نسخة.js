const navigation = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');



const navBuilder = () =>{
    let navUI ='';
    sections.forEach(section =>{
        const sectionID = section.id ;
        const sectoinDataNAv = section.dataset.nav;
        navUI += '<li><a class="menu__link" href="#${sectionID}">${sectoinDataNAv}</a></li>' ;
    })
    //for appeend 
    navigation.innerHTML = navUI ; 
};
navBulider();






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