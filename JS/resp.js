var x = document.getElementById("myLinks");
burger= document.querySelector('.burger');
navbar= document.querySelector('.navbar');
navList= document.querySelector('.nav-list');
rightNav= document.querySelector('.rightNav');


burger.addEventListener('click', ()=>{
    rightNav.classlist.toggle('v-class-resp');
    navList.classlist.toggle('v-class-resp');
    navbar.classlist.toggle('h-nav-resp');
});