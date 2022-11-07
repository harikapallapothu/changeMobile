var mobilesData = [
    {
        Name : "Nord 2 CE Lite 5G ",
        Brand : "OnePlus",
        OS : "OxygenOS",
        Display : "6.59 Inches",
        Form_factor : "Smartphone",
        RAM : "6GB",
        Storage : "128GB",
        Cost : "₹24,999",
        Image :"./oneplus.jpg"
        
    },
    {
        Name : "Redmi 9 Activ ",
        Brand : "Redmi",
        OS : "Andriod MIUI 20, MIUI 20",
        Display : "6.53 Inches",
        Form_factor : "Smartphone",
        RAM : "4GB",
        Storage : "64GB",
        Cost : "₹9,499",
        Image : "./redmi.jpg"
    },
    {
        Name : "Samsung Galaxy M13 ",
        Brand : "Samsung",
        OS : "Android 12.0",
        Display : "6.6 Inches",
        Form_factor : "Smartphone",
        RAM : "4GB",
        Storage : "64GB",
        Cost : "₹11,999",
        Image: "./samsung.jpg"
    },
    {
        Name : "Apple iPhone 14 ",
        Brand : "Apple",
        OS : "IOS",
        Display : "6.1 Inches",
        Form_factor : "Smartphone",
        
        Storage : "128GB",
        Cost : "₹79,999",
        Image : "apple.jpg"
    },
    {
        Name : "Nokia G21 ",
        Brand : "Nokia",
        OS : "Android 11 64bits",
        Display : "6.5 Inches",
        Form_factor : "Smartphone",
        RAM : "4GB",
        Storage : "64GB",
        Cost : "₹12,499",
        Image : "./nokia.jpg"
    },
    {
        Name : "OPPO A74 5G ",
        Brand : "Oppo",
        OS : "Android 11",
        Display : "6.49 Inches",
        Form_factor : "Smartphone",
        RAM : "6GB",
        Storage : "128GB",
        Cost : "₹14,990",
        Image : "./oppo.jpg"
    },
    {
        Name : "Nokia 150 ",
        Brand : "Nokia",
        OS : "Series 30+",
        Display : "2.4 Inches",
        Form_factor : "QWERTY Phone",
        Image : "./nokia150.jpg",
        Cost : "₹2,599"
    },
    {
        Name : "VIVO Y21 ",
        Brand : "Vivo",
        OS : "Android 11 based Oxygen OS 11.1",
        Display : "6.51 Inches",
        Form_factor : "Smartphone",
        RAM : "4GB",
        Storage : "64GB",
        Cost : "₹24,999",
        Image : './vivo 21.webp'
    },
    {
        Name : "Huawei P50 Pro 4G ",
        Brand : "Huawei",
        OS : "Android v9 1 foot, Android 8 1",
        Display : "6.59 Inches",
        Form_factor : "Smartphone",
        RAM : "8GB",
        Storage : "256GB",
        Cost : "₹65,000",
        Image : './huawei.jpg'
    },
    {
        Name : "Lenovo Phab 2 ",
        Brand : "Phab 2",
        OS : "Android",
        Display : "5.59 Inches",
        Form_factor : "Touch Screen Phone",
        RAM : "4GB",
        Storage : "32GB",
        Cost : "₹24,999",
        Image : './lenovo.jpg'
    },
    {
        Name : "LG M2501 ",
        Brand : "LG",
        OS : "Android 7.0",
        Display : "5.3 Inches",
        Form_factor : "Smartphone",
        RAM : "2GB",
        Storage : "16GB",
        Cost : "₹5,499",
        Image : './lg.jpg'
    },
    {
        Name : "VIVO Y 15C",
        Brand : "Vivo",
        OS : "Funtouch OS 12 (Based on Android 12)",
        Display : "6.51 Inches",
        Form_factor : "Smartphone",
        RAM : "3GB",
        Storage : "64GB",
        Cost : "₹10,499",
        Image : './vivo y15.jpg'
    }
];



function details(i){
    
    document.getElementById('data').innerHTML = `
    <div class="d-flex data">
    <div>
      <img src="${mobilesData[i].Image}" alt="" class="phoneImage">
    </div>
    <div class = "details fs-3 fst-italic">

      <p class="fw-bolder">Name : ${mobilesData[i].Name}</p>
      <p>Brand : ${mobilesData[i].Brand}</p>
      <p>OS : ${mobilesData[i].OS}</p>
      <p>Display : ${mobilesData[i].Display}</p>
      <p>Form Factor : ${mobilesData[i].Form_factor}</p>
      <p>RAM : ${mobilesData[i].RAM}</p>
      <p>Storage : ${mobilesData[i].Storage}</p>
      <p>Cost : ${mobilesData[i].Cost}</p>
      
      <button type="button" onclick="buyNow(${i})" class="btn btn-primary">Buy Now</button>
    </div>
   </div>
    `
}

function checkOut(amount){
   
    document.getElementById('data').innerHTML = `
    <div class="payment ">
      <h3>Your Total bill is ${amount}</h3>
         <h3 class="fst-italic fw-bolder " style="margin-left: 150px; ">Payment Gateway</h3>
          <h6 class="fs-5 details1 ">Accepted Cards</h6> 
          <div class="icon-container details1">
           <i class="fa fa-cc-visa" style="color:navy;"></i>
           <i class="fa fa-cc-amex" style="color:blue;"></i>
           <i class="fa fa-cc-mastercard" style="color:red;"></i>
           <i class="fa fa-cc-discover" style="color:orange;"></i>
         </div>
         <div class=" details1">
           <label for="cname">Name on Card</label><br>
           <input class="col-md-10" type="text" id="cname" name="cardname" placeholder="Name"><br>
           <label for="ccnum">Card number</label><br>
           <input class="col-md-10" type="text" id="ccnum" name="cardnumber" placeholder="XXXX-XXXX"><br>
           <label for="expmonth">Exp Month</label><br>
           <input type="text" id="expmonth" name="expmonth" placeholder="Month"><br>
           <label for="expyear">Exp Year</label><br>
           <input type="text" id="expyear" name="expyear" placeholder="YYYY"><br>
           <label for="cvv">CVV</label><br>
           <input class="col-md-3" type="text" id="cvv" name="cvv" placeholder="CVV"><br>
           <label for="amount">Amount</label><br>
           <input class="" type="text" value="${amount}" aria-label="Disabled input example" disabled readonly><br>
           <button type="button" class="btn btn-primary col-4" style="margin-top: 10px ; margin-left: 130px;">Submit</button>
           
         </div>
         <div>
           </div>
   
       </div>
   
   
   
       
   
       </div>
      
      `   
}

var  count=1;

function addToCart(i){
    if(count==0){
        document.getElementById('cartdetails').innerHTML = `
        <div>Your Cart is empty</div>
        `
    }
    else{

        var cost = mobilesData[i].Cost.slice(1);
        
        var amount = cost.replace(",","");
        
        document.getElementById('cartdetails').innerHTML = `
        <div>
        
        <label for="cart">${mobilesData[i].Name}
            ${mobilesData[i].Cost}</label>
            <p>Total Amount = ${cost}</p>
        </div>

        <button type="button" onclick="checkOut(${amount})" class="btn btn-primary">Check Out</button>
        `
        count++
    }
    
   
   
    count++;
}


function buyNow(i){
   var a = mobilesData[i].Cost.slice(1)
   document.getElementById('data').innerHTML = `
 <div class="payment ">
   <h3>Your bill for ${mobilesData[i].Name} is Rs. ${mobilesData[i].Cost}</h3>
      <h3 class="fst-italic fw-bolder " style="margin-left: 150px; ">Payment Gateway</h3>
       <h6 class="fs-5 details1 ">Accepted Cards</h6> 
       <div class="icon-container details1">
        <i class="fa fa-cc-visa" style="color:navy;"></i>
        <i class="fa fa-cc-amex" style="color:blue;"></i>
        <i class="fa fa-cc-mastercard" style="color:red;"></i>
        <i class="fa fa-cc-discover" style="color:orange;"></i>
      </div>
      <div class=" details1">
        <label for="cname">Name on Card</label><br>
        <input class="col-md-10" type="text" id="cname" name="cardname" placeholder="Name"><br>
        <label for="ccnum">Card number</label><br>
        <input class="col-md-10" type="text" id="ccnum" name="cardnumber" placeholder="XXXX-XXXX"><br>
        <label for="expmonth">Exp Month</label><br>
        <input type="text" id="expmonth" name="expmonth" placeholder="Month"><br>
        <label for="expyear">Exp Year</label><br>
        <input type="text" id="expyear" name="expyear" placeholder="YYYY"><br>
        <label for="cvv">CVV</label><br>
        <input class="col-md-3" type="text" id="cvv" name="cvv" placeholder="CVV"><br>
        <label for="amount">Amount</label><br>
        <input class="" type="text" value="${a}" aria-label="Disabled input example" disabled readonly><br>
        <button type="button" class="btn btn-primary col-4" style="margin-top: 10px ; margin-left: 130px;">Submit</button>
        
      </div>
      <div>
        </div>

    </div>



    

    </div>
   
   `
}



let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart')


cartIcon.onclick = ()=>{
    cart.classList.add('active')
}

closeCart.onclick = ()=>{
    cart.classList.remove('active')
}

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready();
}


function ready(){
    //remove items from cart
    var removeCartButtons = document.getElementsByClassName('cart-remove');
    
    for(i=0;i<removeCartButtons.length;i++){
        var button =removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    //quantity changes
    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for(i=0;i<quantityInputs.length;i++){
        var input = quantityInputs[i];
        input.addEventListener('change',quantityChanged)
    }

    //Add to cart

    var addCart = document.getElementsByClassName('add-cart');
    for(i=0;i<addCart.length;i++){
        var button=addCart[i];
        button.addEventListener('click',addCartClicked);
    }

    //buy button
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);
}

function buyButtonClicked(){
    document.getElementById('data').innerHTML = `
 <div class="payment ">
      <h3 class="fst-italic fw-bolder " style="margin-left: 150px; ">Payment Gateway</h3>
       <h6 class="fs-5 details1 ">Accepted Cards</h6> 
       <div class="icon-container details1">
        <i class="fa fa-cc-visa" style="color:navy;"></i>
        <i class="fa fa-cc-amex" style="color:blue;"></i>
        <i class="fa fa-cc-mastercard" style="color:red;"></i>
        <i class="fa fa-cc-discover" style="color:orange;"></i>
      </div>
      <div class=" details1">
        <label for="cname">Name on Card</label><br>
        <input class="col-md-10" type="text" id="cname" name="cardname" placeholder="Name"><br>
        <label for="ccnum">Card number</label><br>
        <input class="col-md-10" type="text" id="ccnum" name="cardnumber" placeholder="XXXX-XXXX"><br>
        <label for="expmonth">Exp Month</label><br>
        <input type="text" id="expmonth" name="expmonth" placeholder="Month"><br>
        <label for="expyear">Exp Year</label><br>
        <input type="text" id="expyear" name="expyear" placeholder="YYYY"><br>
        <label for="cvv">CVV</label><br>
        <input class="col-md-3" type="text" id="cvv" name="cvv" placeholder="CVV"><br>
        <label for="amount">Amount</label><br>
        <input class="" type="text" value="${document.getElementsByClassName('total-price')[0].innerText}" aria-label="Disabled input example" disabled readonly><br>
        <button type="button" class="btn btn-primary col-4" style="margin-top: 10px ; margin-left: 130px;">Submit</button>
        
      </div>
      <div>
        </div>

    </div>
    </div>
   
   `
}

function quantityChanged(event){
    var input =event.target;
    if(isNaN(input.value)|| input.value<=0){
        input.value=1
    }
    updateTotal()
}

//add to cart
function addCartClicked(event){
    var button = event.target;
    var shopProducts =button.parentElement
    var title = shopProducts.getElementsByClassName('card-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('imageitem').src;
    console.log(title,price)
    addProductToCart(title,price,productImg);
    updateTotal();    
}

function addProductToCart(title, price,productImg){
    var cartShopBox = document.createElement('div')
     cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title')
    for(i=0;i<cartItemsNames.length;i++){
        if(cartItemsNames[i].innerText==title){
            alert('You have already added this item to cart');
            return;
        }
        
    }



var cartBoxContent = `
            <img src="${productImg}" alt="" class="cart-img">
              <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">${price}</div>
                <input type="number" value="1" class="cart-quantity" >
              </div>
              <i class="fa fa-trash cart-remove" aria-hidden="true"></i>

`;
cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click',removeCartItem);
cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change',quantityChanged);
}

function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}


//update total

function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total=0;
    for(i=0;i<cartBoxes.length;i++){
        var cartbox = cartBoxes[i];
        var priceElement = cartbox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartbox.getElementsByClassName('cart-quantity')[0]
        var quantity = quantityElement.value;
        var price = parseFloat(priceElement.innerText.replace('₹',''));
        
        total =  total+ price*quantity;
        
    }
        document.getElementsByClassName('total-price')[0].innerText = "₹"+total
        
   
   
}