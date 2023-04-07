burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navlist = document.querySelector('.navlist')
searchlist = document.querySelector('.searchlist')

burger.addEventListner('click', ()=>{
    navbar.classlist.toggle('h-class');
    searchlist.classlist.toggle('v-class');
    navlist.classlist.toggle('v-class');
});