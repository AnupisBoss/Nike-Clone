const productCard = document.querySelector('.multiple-colors')
var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight );

function showSubImages(cardNumber){
    var productSubImages = document.querySelector(`.product-subimages-${cardNumber}`);
    var productDescription= document.querySelector(`.description-${cardNumber}`);
    productSubImages.style.display = 'flex'; 
    productDescription.style.display = 'none';
}

function hideSubImages(cardNumber){
    var productSubImages = document.querySelector(`.product-subimages-${cardNumber}`);
    var productDescription= document.querySelector(`.description-${cardNumber}`);
    productSubImages.style.display = 'none'; 
    productDescription.style.display = 'block';
}

function showCartButton(cartNumber){
    var cartButton = document.querySelector(`.cart-button-wrapper-${cartNumber}`)
    cartButton.style.display  = 'block';
}

function hideCartButton(cartNumber){
    var cartButton = document.querySelector(`.cart-button-wrapper-${cartNumber}`)
    cartButton.style.display  = 'none';
}


function changeImage(path, cardNumber){
    var productImage = document.querySelector(`.product-image-${cardNumber}`)
    productImage.src = `${path}`
}

window.addEventListener("scroll", function(){
    var sortMenu = document.querySelector('.sort-by-menu')
    var navText = document.querySelector(".expandable");
    var scrollBar = document.querySelector(".sidebar-container")
    var navBar = document.querySelector(".undernav-top-bar") 
    if (window.scrollY > 100) {
        navText.style.fontSize = '18px';
        navText.style.marginRight = '1035px';
        scrollBar.style.height = '730px';
        navBar.style.paddingTop = '20px';
        navBar.style.paddingBottom = '20px';
        navBar.style.marginBottom = '-300px'
    }

    if (window.scrollY <= 100){
        navText.style.fontSize = '24px';
        navText.style.marginRight = '980px';
        scrollBar.style.height = '565px';
        navBar.style.marginBottom = '0'
    }

    if (window.scrollY <= 5000 && window.scrollY >= 4400) {
        scrollBar.style.height = '300px'
    }
})

function showSortFilter() {
    var sortMenu = document.querySelector(".sort-by-menu");
    var collapseButton = document.getElementById("sort-by-icon");
    if (!sortMenu.style.display || sortMenu.style.display === "none") {
        sortMenu.style.display = "block";
        collapseButton.classList.add('flip')
    } else {
        sortMenu.style.display = "none";
        collapseButton.classList.remove('flip');
    }
}

function collapseSidebar() {
    var sidebar = document.querySelector(".sidebar-container");
    var filterName= document.getElementById("filter-name-change");
    var productContainer = document.querySelector(".products-container")
    var footer = document.querySelector('.footer')
    var footerCover = document.querySelector('.footer-cover')
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        filterName.innerHTML = 'Hide Filters';
        productContainer.style.marginTop = '-555px'
        productContainer.style.marginLeft= '300px';
        productContainer.style.scale = '1';
        footer.style.display = 'block'
        footerCover.style.display = 'block'
        productContainer.style.paddingBottom = '0px';
    } else {
        sidebar.style.display = "none";
        filterName.innerHTML = 'Show Filters';
        productContainer.style.marginTop = '330px';
        productContainer.style.marginLeft= '140px';
        productContainer.style.scale = '1.12';
        footer.style.display = 'none'
        footerCover.style.display = 'none'
        productContainer.style.paddingBottom = '20px';
    }
}

function collapseSection(section) {
    var filterInfo = document.querySelector(`.${section}-filters-wrapper`);
    var filterButton = document.getElementById(`${section}-collapsable-icon`);
    var title = document.getElementById(`${section}-title`)
    if (filterInfo.style.display === "none") {
        filterInfo.style.display = "block";
        filterButton.classList.remove('flip')
        title.style.fontWeight = '400';
    } else {
        filterInfo.style.display = "none";
        filterButton.classList.add('flip');
        title.style.fontWeight = '500';
    }
}

function toggleMorePrice() {
    var hiddenFilters = document.querySelector(".price-filters-hide");
    var moreButton = document.querySelector(".price-more-button");
    if (!hiddenFilters.style.display || hiddenFilters.style.display === "none") {
        hiddenFilters.style.display = "block";
        moreButton.innerHTML = '- Less';
    } else {
        hiddenFilters.style.display = "none";
        moreButton.innerHTML = '+ More';
    }
}

function toggleMoreSports() {
    var hiddenFilters = document.querySelector(".sports-filters-hide");
    var moreButton = document.querySelector(".sports-more-button");
    if (!hiddenFilters.style.display || hiddenFilters.style.display === "none") {
        hiddenFilters.style.display = "block";
        moreButton.innerHTML = '- Less';
    } else {
        hiddenFilters.style.display = "none";
        moreButton.innerHTML = '+ More';
    }
}

function toggleMoreAthletes() {
    var hiddenFilters = document.querySelector(".athletes-filters-hide");
    var moreButton = document.querySelector(".athletes-more-button");
    if (!hiddenFilters.style.display || hiddenFilters.style.display === "none") {
        hiddenFilters.style.display = "block";
        moreButton.innerHTML = '- Less';
    } else {
        hiddenFilters.style.display = "none";
        moreButton.innerHTML = '+ More';
    }
}

function toggleMoreBrands() {
    var hiddenFilters = document.querySelector(".brands-filters-hide");
    var moreButton = document.querySelector(".brands-more-button");
    if (!hiddenFilters.style.display || hiddenFilters.style.display === "none") {
        hiddenFilters.style.display = "block";
        moreButton.innerHTML = '- Less';
    } else {
        hiddenFilters.style.display = "none";
        moreButton.innerHTML = '+ More';
    }
}

function toggleMoreIcon() {
    var hiddenFilters = document.querySelector(".icon-filters-hide");
    var moreButton = document.querySelector(".icon-more-button");
    if (!hiddenFilters.style.display || hiddenFilters.style.display === "none") {
        hiddenFilters.style.display = "block";
        moreButton.innerHTML = '- Less';
    } else {
        hiddenFilters.style.display = "none";
        moreButton.innerHTML = '+ More';
    }
}

function filter(filter) {
    var footer = document.querySelector('.footer')
    var footerCover = document.querySelector('.footer-cover')
    var productName = document.querySelectorAll('.product-name') 
    var productItem = document.querySelectorAll('.product-card')
    var filterBox = document.querySelector(`.${filter}`)
    filterBy = filter.replace("-", ' ')

    if (filterBox.checked) {
        footer.style.display = 'none'
        footerCover.style.display = 'none'
        for (let i = 0; i <= productName.length; i++) {
            if (productName[i].innerHTML.includes(`${filterBy}`)) {
                productItem[i].style.display = 'block'
            }
            else {
                productItem[i].style.display = 'none'
            }
        }
    } else {
        footer.style.display = 'block'
        footerCover.style.display = 'block'
        for (let i = 0; i <= productItem.length; i++) {
            if (productItem[i].style.display === 'none') {
                productItem[i].style.display = 'block';
            }
        }
    }
}

function filterPrice(filter, startNumber, endNumber) {
    var footer = document.querySelector('.footer')
    var footerCover = document.querySelector('.footer-cover')
    var productPrice = document.querySelectorAll('.product-price') 
    var productItem = document.querySelectorAll('.product-card')
    var filterBox = document.querySelector(`.${filter}`)

    if (filterBox.checked) {
        footer.style.display = 'none'
        footerCover.style.display = 'none'
        for (let i = 0; i <= productPrice.length; i++) {
            if ((Number(productPrice[i].innerHTML.replace('$', '')) >= startNumber) && (Number(productPrice[i].innerHTML.replace('$', '')) <= endNumber)) {
                productItem[i].style.display = 'block'
                console.log(`${parseInt(productPrice[i].innerHTML)}`)
            }
            else {
                productItem[i].style.display = 'none'
            }
        }
    } else {
        footer.style.display = 'block'
        footerCover.style.display = 'block'
        for (let i = 0; i <= productItem.length; i++) {
            if (productItem[i].style.display === 'none') {
                productItem[i].style.display = 'block';
            }
        }
    }
}