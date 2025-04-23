




k1 = [{ id: 1, name: "boots", price: 100, amount: 20, pic: "./תמונות_חורף/w1.jpg" },
{ id: 2, name: "adress", price: 200, amount: 20, pic: "./תמונות_חורף/w2.jpg" },
{ id: 3, name: "adress", price: 300, amount: 20, pic: "./תמונות_חורף/w3.jpg" },
{ id: 4, name: "adress", price: 400, amount: 20, pic: "./תמונות_חורף/w4.jpg" },
{ id: 5, name: "adress", price: 500, amount: 20, pic: "./תמונות_חורף/w5.jpg" },
{ id: 6, name: "adress", price: 600, amount: 20, pic: "./תמונות_חורף/w6.jpg" },
{ id: 7, name: "adress", price: 700, amount: 20, pic: "./תמונות_חורף/w7.jpg" },
{ id: 8, name: "adress", price: 800, amount: 20, pic: "./תמונות_חורף/w8.jpg" },
];
k2 = [{ id: 1, name: "adress", price: 100, amount: 20, pic: "./תמונות_תיקים/b1.jpg" },
{ id: 2, name: "adress", price: 100, amount: 20, pic: "./תמונות_תיקים/b2.jpg" },
{ id: 3, name: "adress", price: 100, amount: 20, pic: "./תמונות_תיקים/b3.jpg" },
{ id: 4, name: "adress", price: 100, amount: 20, pic: "./תמונות_תיקים/b4.jpg" },
{ id: 5, name: "adress", price: 100, amount: 20, pic: "./תמונות_תיקים/b5.jpg" },
{ id: 6, name: "adress", price: 100, amount: 20, pic: "./תמונות_תיקים/b6.jpg" },
{ id: 7, name: "adress", price: 100, amount: 20, pic: "./תמונות_תיקים/b7.jpg" },
{ id: 8, name: "adress", price: 100, amount: 20, pic: "./תמונות_תיקים/b8.jpg" },
];

function viewpic(num) {
    nin3.innerHTML = "";
    if (num == 1)
        k3 = k1;
    else k3 = k2;
    for (i = 0; i < k3.length; i++) {
        d = document.createElement("div");
        d.setAttribute("class", "c");
        nin3.appendChild(d);
        im = document.createElement("img");
        im.setAttribute("src", k3[i].pic);
        im.setAttribute("class", "i");
        im.setAttribute("id", i);
        im.setAttribute("onclick", "want(this.id)");
        d.appendChild(im);



    }


}
function want(id) {
      
    document.getElementById('po').style.display = 'block';
    
    document.getElementById('price1').innerText = " price:   " + k3[id].price  ;
    document.getElementById('price1').style.fontSize = "30px";
    document.getElementById('name').innerText = "  name:  "+k3[id].name  ;
    document.getElementById('name').style.fontSize = "50px";
    bw = document.createElement("br");
    
    price1.appendChild(bw);
    
    pi=document.createElement("img");
    pi.setAttribute("src",k3[id].pic);
    pi.setAttribute("class", " pimg");
    pic.appendChild(pi);
    button1.setAttribute("onclick", "a()");
    button2.setAttribute("onclick", "b()");
    


}
function a() { document.getElementById('pp').innerText++;
document.getElementById('price1').innerText= " price:   " + k3[id].price }

function b() {if(document.getElementById('pp').innerText>0)
{ document.getElementById('pp').innerText--;
document.getElementById('price1').innerText= " price:   " + k3[id].price} }


