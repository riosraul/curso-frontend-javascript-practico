const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const orderDetail = document.querySelector('.order-detail');
const cardContainer = document.querySelector('.cards-container');
const productDetail = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', togglepMenu);
menuHamIcon.addEventListener('click', togglepMenu);
menuCarritoIcon.addEventListener('click', togglepMenu);
productDetailCloseIcon.addEventListener('click', cerrarDetailProduct)

function togglepMenu(event){
    if (event.target.className == 'navbar-shopping-cart'){
        orderDetail.classList.toggle('inactive');
        productDetail.classList.add('inactive');
        if (mobileMenu.classList.contains('inactive')==false){
            mobileMenu.classList.toggle('inactive');
        }
        if (desktopMenu.classList.contains('inactive')==false){
            desktopMenu.classList.toggle('inactive');
        }
    
        return;
    }
    if (event.target.className == 'menu'){
        mobileMenu.classList.toggle('inactive');
        productDetail.classList.add('inactive');
        if (orderDetail.classList.contains('inactive')==false){
            orderDetail.classList.toggle('inactive');
        }
        return;
    }

    if (event.target.className == 'navbar-email'){
        desktopMenu.classList.toggle('inactive');
        productDetail.classList.add('inactive');
        if (orderDetail.classList.contains('inactive')==false){
            orderDetail.classList.toggle('inactive');
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

const productList = [];

productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Pantalla',
    price: 420,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: 'Notebook',
    price: 620,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

function mostarDetailProduct(){
    if (orderDetail.classList.contains('inactive')==false){
        orderDetail.classList.toggle('inactive');
    }
    if (desktopMenu.classList.contains('inactive')==false){
        desktopMenu.classList.toggle('inactive');
    }

    productDetail.classList.remove('inactive');
}

function cerrarDetailProduct(){
    productDetail.classList.add('inactive');
}

function listarProductos(arr) {

  for (product of arr) {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    const productImg = document.createElement("img");
    productImg.setAttribute("src", product.image);
    productImg.addEventListener('click', mostarDetailProduct)

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productInfoDiv = document.createElement("div");

    const productPrice = document.createElement("p");
    productPrice.innerText = "S" + product.price;

    const productName = document.createElement("p");
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement("figure");
    const productImgCard = document.createElement("img");
    productImgCard.setAttribute("src", "./icons/bt_add_to_cart.svg");

    productInfoFigure.appendChild(productImgCard);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardContainer.appendChild(productCard);
  }
}

listarProductos(productList);

