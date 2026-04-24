let products = [
    {
        id: 1,
        name: "VR Headset",
        price: 24999,
        image: "https://images.pexels.com/photos/3945657/pexels-photo-3945657.jpeg"
    },
    {
        id: 2,
        name: "Microphone",
        price: 1599,
        image: "https://images.pexels.com/photos/164829/pexels-photo-164829.jpeg"
    },
    {
        id: 3,
        name: "Tripod Stand",
        price: 899,
        image: "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg"
    },
    {
        id: 4,
        name: "Cooling Pad",
        price: 699,
        image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg"
    },
    {
        id: 5,
        name: "Wireless Charger",
        price: 999,
        image: "https://images.pexels.com/photos/4526411/pexels-photo-4526411.jpeg"
    },
    {
        id: 6,
        name: "Smart Bulb",
        price: 599,
        image: "https://images.pexels.com/photos/577514/pexels-photo-577514.jpeg"
    },
    {
        id: 10,
        name: "Gaming Mouse",
        price: 799,
        image: "https://images.pexels.com/photos/2115257/pexels-photo-2115257.jpeg"
    },
    {
        id: 11,
        name: "Laptop",
        price: 55999,
        image: "https://images.pexels.com/photos/18105/pexels-photo.jpg"
    },
    {
        id: 12,
        name: "Keyboard",
        price: 999,
        image: "https://images.pexels.com/photos/461077/pexels-photo-461077.jpeg"
    },
    {
        id: 13,
        name: "Bluetooth Speaker",
        price: 1499,
        image: "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg"
    },
    {
        id: 14,
        name: "Mobile Phone",
        price: 19999,
        image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg"
    },
    {
        id: 15,
        name: "DSLR Camera",
        price: 45999,
        image: "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg"
    },
    {
        id: 16,
        name: "Power Bank",
        price: 699,
        image: "https://images.pexels.com/photos/4219862/pexels-photo-4219862.jpeg"
    },
    {
        id: 27,
        name: "USB Cable",
        price: 199,
        image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg"
    },
    {
        id: 18,
        name: "Tablet",
        price: 14999,
        image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
    },
    {
        id: 19,
        name: "Monitor",
        price: 8999,
        image: "https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
    },
    {
        id: 20,
        name: "External Hard Drive",
        price: 3499,
        image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg"
    },
    {
        id: 21,
        name: "Router",
        price: 1299,
        image: "https://images.pexels.com/photos/1591060/pexels-photo-1591060.jpeg"
    },
    {
        id: 22,
        name: "Webcam",
        price: 1799,
        image: "https://images.pexels.com/photos/4145191/pexels-photo-4145191.jpeg"
    },
    {
        id: 23,
        name: "Gaming Chair",
        price: 8999,
        image: "https://images.pexels.com/photos/7862493/pexels-photo-7862493.jpeg"
    },
    {
        id: 24,
        name: "Office Desk",
        price: 5999,
        image: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg"
    },
    {
        id: 25,
        name: "LED Light Strip",
        price: 499,
        image: "https://images.pexels.com/photos/5691608/pexels-photo-5691608.jpeg"
    },
    {
        id: 26,
        name: "Smart TV",
        price: 29999,
        image: "https://images.pexels.com/photos/1201996/pexels-photo-1201996.jpeg"
    },
    {
        id: 27,
        name: "Fitness Band",
        price: 1299,
        image: "https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg"
    }

];

function showProduct(){


    const prductList = document.getElementById("product-list");


    prductList.innerHTML = "";

    products.forEach((p) => {



        prductList.innerHTML += `
    <div class="col-md-4 mt-4">
    <div class="card p-card shadow img-fluid rounded-3 ">
  <img src="${p.image}" class="card-img-top" alt="${p.name}">
  <div class="card-body text-center">
    <h5 class="card-title">${p.name}</h5>
    <p>⭐⭐⭐⭐⭐</p>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <h2 class = " card-price card-text">₹${p.price}</h2>
    <a href="#" class="btn btn-outline-primary" onclick="addToCart(${p.id})">➕Add To Cart</a>
    <a href="#" class="btn btn-outline-success" onclick="UpdateProductModal(${p.id})">✏️Update</a>
    <a href="#" class="btn btn-outline-danger" onclick="DeleteProduct(${p.id})">🗑️Delete</a>
  </div>
</div>
    </div>`
    });

    console.log("products", products);

}

showProduct();



// const data = {name:"electronic" , qty : 1};

// localStorage.setItem("cartData",JSON.stringify(data));

// const productData = localStorage.getItem("cartData")

// console.log("productdata",JSON.parse(productData));

let cartItems = JSON.parse(localStorage.getItem("cartData")) || [];

console.log("cartItems", cartItems);


function addToCart(id) {

    try {

        let product = cartItems.find((prod) => prod.id === id);

        if (product) {

            product.qty++;

        } else {

            product = products.find((prod) => prod.id === id);
            cartItems.push({ ...product, qty: 1 });

        }



        localStorage.setItem("cartData", JSON.stringify(cartItems));

        alert("item added to cart")

    } catch (error) {

        console.log(error);

    }

}

function showModal() {

    const cartItemList = document.getElementById("cartItem-list");

    let modal = new bootstrap.Modal(cartItemList);

    modal.show();
    UpdateLatestData();

}

function showCartData() {
    try {

        const cartList = document.getElementById("cartTable");

        cartList.innerHTML = "";

        cartItems.forEach((p) => {

            cartList.innerHTML += `
          

         <tr>
         <td>
          <img src="${p.image}" style="height="60" width="60" style="object-fit:cover; border-radius:5px;">
         </td>
         <td>${p.name}</td>
         <td>

         <div class="d-flex gap-2">
         
         <button class="btn btn-success " onClick = "increaseQty(${p.id})">+</button>

         <h5>${p.qty}</h5>

         <button class="btn btn-danger" onclick = "decreaseqty(${p.id})">-</button>

         </div>

         </td>
         <td>₹${p.qty * p.price}</td>
         <td><button class ="btn btn-danger" onclick = "remove(${p.id})">remove</button></td>         
         </tr>`;

        });
    } catch (error) {

        console.log(error)

    }
}

function increaseQty(id) {


    const product = cartItems.find((prod) => prod.id === id);



    if (product) {

        product.qty++;

    }

    UpdateLatestData();

}

function UpdateLatestData() {

    localStorage.setItem("cartData", JSON.stringify(cartItems));

    showCartData();
   
    total();

}

function decreaseqty(id) {

    const product = cartItems.find((prod) => prod.id === id);

    if (product) {

        product.qty--;

    }

    if (product.qty <= 0) {

        cartItems = cartItems.filter((prod) => prod.id !== id);

    }

    UpdateLatestData();

}

function remove(id) {

    cartItems = cartItems.filter((prod) => prod.id !== id);

    UpdateLatestData();

}

function total() {

    const total = document.getElementById("grand-total");

    total.innerHTML = "";

    const totalAmount = cartItems.reduce((acc, curr) => {

        return (acc += curr.price * curr.qty);

    }, 0);

    total.innerHTML += `<h5>₹${totalAmount}</h5>`

}

function checkOut() {

    if (cartItems.length === 0) {
        alert("There is currently no items in  cart , so please add to some items in cart")
    } else {
        alert("order placed successfully")

        cartItems = [];


        UpdateLatestData();

    }

}

function showModal1() {

    const AddCart = document.getElementById("Add-Cart");

    let modal = new bootstrap.Modal(AddCart);

    modal.show();


}

function addProduct() {

    const name = document.getElementById("pname").value;
    const price = document.getElementById("pprice").value;
    const image = document.getElementById("pimage").value;

    if (!name || !price || !image) {

        alert(" please full fill form ");

        return;
    }

    const newId = products.length + 1;

    const NewProduct = {
        id: newId,
        name: name,
        price: Number(price),
        image: image
    };

    products.push(NewProduct);

    const productList = document.getElementById("product-list");


    productList.innerHTML += `
    
    <div class="col-md-4 mt-4">
    <div class="card p-card shadow img-fluid rounded-3 ">
  <img src="${image}" class="card-img-top" alt="${name}">
  <div class="card-body text-center">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <h2 class = "card-text">₹${price}</h2>
    <a href="#" class="btn btn-primary" onclick="addToCart(${newId})">Add To Cart</a>
  </div>
</div>
    </div>
    
    `

    UpdateLatestData();
}

function DeleteProduct(id) {


     products = products.filter((prod) => prod.id !== id);

   showProduct();
    
}




function UpdateProductModal(id) {

    let UpdateProductModal = document.getElementById("UpdateProductModal")

    let modal = new bootstrap.Modal(UpdateProductModal)

    modal.show();

    const product = products.find((prod) => prod.id === id);

    if (!product) {
        return alert("product not found");
    }

    let index = products.findIndex((prod) => prod.id === id);

    if (index === -1) {
        return alert("product not found");
    }

    document.getElementById("UpdateProductName").value = products[index].name
    document.getElementById("UpdateProductPrice").value = products[index].price
    document.getElementById("UpdateProductImage").value = products[index].image

     const form = document.getElementById("UpdateproductForm");

     form.onsubmit = function (e){
        e.preventDefault();


        let name = document.getElementById("UpdateProductName").value
        let price = document.getElementById("UpdateProductPrice").value
        let image = document.getElementById("UpdateProductImage").value

        products[index] = {...products[index],
             name,
              price:Number(price),
               image,
            };

     

        
        modal.hide();
         showProduct();


    };
}




