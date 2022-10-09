const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', togglepMenu);
menuHamIcon.addEventListener('click', togglepMenu);
menuCarritoIcon.addEventListener('click', togglepMenu);

function togglepMenu(event){
    if (event.target.className == 'navbar-shopping-cart'){
        aside.classList.toggle('inactive');
        if (mobileMenu.classList.contains('inactive')==false){
            mobileMenu.classList.toggle('inactive');
        }
        return;
    }
    if (event.target.className == 'menu'){
        mobileMenu.classList.toggle('inactive');
        if (aside.classList.contains('inactive')==false){
            aside.classList.toggle('inactive');
        }
        return;
    }

    if (event.target.className == 'navbar-email'){
        desktopMenu.classList.toggle('inactive');
        if (aside.classList.contains('inactive')==false){
            aside.classList.toggle('inactive');
        }
        return;
    }

    

}

// function toggleDesktopMenu(event){
//     //YO
//     // if (desktopMenu.style.display == 'none') {
//     //     desktopMenu.style.display = 'block';
//     // }else{
//     //     desktopMenu.style.display = 'none';
//     // }
//     console.log({event});
//     desktopMenu.classList.toggle('inactive');
// }