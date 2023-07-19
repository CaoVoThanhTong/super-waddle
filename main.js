const btn = document.querySelectorAll("button");

// hàm set các thông tin để thêm 
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        //bắt sự kiện 
        var btnItem = event.target;
        //chọn thẻ cha
        var product = btnItem.parentElement;
         console.log(product);
        //lấy các thông tin của product
        var productImg = product.querySelector("img").src;
        var productName = product.querySelector("h1").innerText;
        var productPrice = product.querySelector("span").innerText;
        // console.log(productPrice);
        //thêm cart(gọi hàm cart)
        addcart(productPrice,productImg,productName);
         //gọi hàm 
        carttotal();
        deletetotal();
        input();
    })
});

// hàm thêm sản phẩm
function addcart(productPrice,productImg,productName){
    // tạo 1 element mới
    var addtr = document.createElement("tr");
    // set nội dung cần thêm
    var trcontent = '<tr><td style="display: flex;align-items: center;"><img style="width: 70px;" src="'+productImg+'" alt="Rolex Swiss">'+productName+'</td><td><p><span>'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td class="delete-cart" style="cursor: pointer;">Xóa</td></tr>';
    addtr.innerHTML = trcontent;
    // chọn thẻ cha của nó 
    var carttable = document.querySelector("tbody");
    // console.log(carttable);
    // thêm thẻ tr vào bằng append
    carttable.append(addtr);

   
    
}

// tính tổng

function carttotal() {
    var cartItem = document.querySelectorAll("tbody tr");
    var thanhtien = 0;
    // console.log(cartItem);
    for(var i = 0;i < cartItem.length;i++){
        var soluong = cartItem[i].querySelector("input").value;
        // console.log(soluong);
        var dongia = cartItem[i].querySelector("span").innerText;
        // console.log(dongia );
        var tongtien = soluong * dongia * 1000;
        // console.log(tongtien);
        thanhtien +=  tongtien;
        // console.log(thanhtien);
        var thanhtienn = thanhtien.toLocaleString("de-DE");
    }
    var thaytongtien = document.querySelector(".price_total span");
    var icontotal = document.querySelector(".cart_icon span");
    icontotal.innerHTML = thanhtienn;
    // console.log(thaytongtien);
    thaytongtien.innerHTML = thanhtienn;
    
    // var content = ' <div style="text-align: right;" class="price_total"><p style="font-weight: bold;">Tổng tiền:<span>'+thanhtien+'</span><sup>đ</sup></p></div>'
}

//hàm xóa item

function deletetotal(){
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0;i < cartItem.length;i++){
        var itemm = document.querySelectorAll(".delete-cart");
        itemm[i].addEventListener("click",function(event){
            var cartDelete = event.target;
            var productt = cartDelete.parentElement;
            var tien = productt.querySelector("span").innerText;
            // console.log(tien)
            productt.remove();
            carttotal() = carttotal() - tien;

        })
    }
}


// hàm tăng số lượng sản phẩm

function input(){
    var cartItem = document.querySelectorAll("tbody tr");
    for(var i = 0;i < cartItem.length;i++){
        var input = cartItem[i].querySelector("input");
        input.addEventListener("change",function(){
            carttotal();
        })
    }
}


//bắt ẩn hiện

const giohang = document.querySelector(".fa-cart-shopping");
const close = document.querySelector(".fa-x");
const hihi = document.querySelector(".container");

giohang.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0";
});

close.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%";
});


hihi.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%";
});