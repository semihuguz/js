function addToCart(productName="Elma",quantity){
    console.log("Sepete Eklendi: " + productName +" "+ "adet:"+" " + quantity);
}
addToCart()
addToCart(15)
addToCart("Yumurta")
addToCart("Hindistan Cevizi")
addToCart("Muz")
addToCart("Karpuz")
addToCart("Kavun")
addToCart("Limon",+" "+ 20)

let sayHello  = () => {
    console.log("Merhaba");
}
sayHello();
let sayHello2 = function() {
    console.log("Hello World");
}
sayHello2();

function addToCart2(productName,quantity,unitPrice){

}
addToCart2("Elma",2,10);
addToCart2("Armut",5,16);
addToCart2("Limon",3,20);

let product1 = {productName:"Elma",quantity:2,unitPrice:10}

function addToCart3(product){
console.log("URUN: "+ product.productName)
console.log("ADET: "+ product.quantity)
console.log("FIYAT: "+ product.unitPrice)

}
addToCart3(product1)

let product2 = {productName:"Elma",quantity:2,unitPrice:10}
let product3 = {productName:"Elma",quantity:2,unitPrice:10}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName);

//1-) Sayi tipleri => deger.
//2-) Object tipler => referanstir.

let sayi1 =10;
let sayi2 =20;

sayi1=sayi2;
sayi2=100;
console.log(sayi1);

function addToCart4(products){
    console.log(products)
}
let products = [
    {productName:"Elma",quantity:2,unitPrice:10},
    {productName:"Armut",quantity:3,unitPrice:15},
    {productName:"Karpuz",quantity:4,unitPrice:20}    
]

addToCart4(products)

function add(...numbers){//rest eger rest operatorunun disinda bir operator varsa onu one tarafa yaz.
    let total =0;
    for (let i = 0; i < numbers.length; i++) {
       total = total + numbers[i] 
    } 
    console.log(total)

}
add(20,30)
add(20,30,40)
add(20,30,40,50)
add(20,30,40,50,60)

//spret ayristirir  -> rest toparlar


let [icAnadolu,marmara,karaDeniz,[icAnadoluSehirleri]] = [
    {name:"Ic Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Karaman"],
        ["Istanbul","Kocaeli"],
        ["Trabzon","Sinop"],
    ]
]
console.log(icAnadolu.name)
console.log(marmara)
console.log(karaDeniz)
console.log(icAnadoluSehirleri)

let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}
={productName:"Elma",unitPrice:10,quantity:10})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)