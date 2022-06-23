import "styles.css";
const toggle_btn = document.querySelector('.dropdown');
const navigation = document.querySelector('header .navigation');



toggle_btn.addEventListener('click', ()=>{
    if(navigation.classList.contains('active')){
        navigation.classList.remove('active')
    } else {
        navigation.classList.add('active')
}
})



//function myFunction() {
    //document.getElementById("myDropdown").classList.toggle("show"); }

//window.onclick = function(event) { if (!event.target.matches('.dropdown')) { var dropdowns = document.getElementsByClassName("navigation");
       // var i; 
        //for (i = 0; i < dropdowns.length; i++) { var openDropdown = dropdowns[i];
            //if (openDropdown.classList.remove('show')); } } }