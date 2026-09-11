
//       let x=123 
//       //alert (x)
//       let y="Hello cat"
//       //alert (y)
//       let name= prompt ("what is your name?")

//     if(name=="" || name==null )  {
//         name="user"
//     }
//      alert ("Hello " + name)
//      let result = confirm("Ви хочете перейти на головну сторінку?");

     

// if (result==true) {
//     window.location.href="../album/index.html"
// }

 let params = new URLSearchParams(window.location.search);
//  file:///C:/Users/Admin/Desktop/%D1%81%D0%B0%D0%B9%D1%82/bootstrap-5.3.8-examples/bootstrap-5.3.8-examples/product/index.html?id=4
console.log(params); // URLSearchParams {}
// let name = params.get("name");
let id = params.get("id");
console.log(id); // 123

       fetch("http://localhost:3000/posts/" + id)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                document.getElementById("popa").src = data.views
                document.getElementById("prise-1").textContent = data.prise + " грн"
                document.getElementsByClassName("img_fluid")[0].src = data.views
                console.log(data.views);
                console.log(document.getElementsByClassName("img_fluid")[0].src);
                document.getElementById("tittle").textContent = data.title
                document.getElementById("dop_img").src = data.img
                document.getElementById("modal-img").src = data.img
                document.getElementById("modal-title").textContent = data.title
                document.getElementById("modal-price").textContent = data.prise + " грн"
            });

           


function checkadekvat () {
   let name= prompt ("What is your name")
   if (name=="" || name==null) {
    name="user"
   }
    alert ("Welcome to the club " + name)
    alert ("You have been added to the site.")
   test2()
}
// function test2 () {
//     alert ("Hello, I`m a function test 2")
// }
function buttonclose (thisbutton) {
    // alert ("Thank you for your order")
    const email = document.querySelector("#email");
    const quantity = document.querySelector("#quantity");
    console.log(quantity.value)
    console.log(email.value) 


if (!email.value.includes("@")) {
    alert("Введіть правильний email!");
    return;
}


    if (document.getElementsByClassName("input")[0].value=="" || document.getElementsByClassName("input")[1].value=="") {
        alert ("Будь ласка, заповніть всі поля")
    }
    // else if (document.getElementsByClassName("input")[0].value && document.getElementsByClassName("input")[1].value=="") {}

    else { 
       
        const newUser = {
contact: email.value,
quantity: quantity.value
};

fetch("http://localhost:3000/orders", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
        body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Нове замовлення:", data);
         document.getElementsByClassName("modal-body")[0].innerHTML = "Дякую за замовлення"
    })
    .catch(error => {
        console.error("Помилка:", error);
    });
       
    }


}