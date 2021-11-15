  let cart = [
      {id:1, productName:"Telefon",quantity:2,unitPrice:5000},
      {id:2, productName:"Bardak",quantity:3,unitPrice:15},
      {id:3, productName:"Kalem",quantity:4,unitPrice:30},
      {id:4, productName:"Kamera",quantity:1,unitPrice:10000},
      {id:5, productName:"Anahtarlik",quantity:5,unitPrice:25},
      {id:6, productName:"Cuzdan",quantity:1,unitPrice:95}
  ]

  /*cart.map(product=>{
      console.log(product.productName + " :"+ product.unitPrice*product.quantity+" " + "Adedi"+"= "+ product.quantity+" " + "Fiyati"+"= "+ product.unitPrice)
  })
*/
let total = cart.reduce((acc,product)=>acc+ product.quantity,0)
console.log(total)

  let quantityOver2 = cart.filter(product => product.quantity>2)
//console.log(quantityOver2)

function addToCart(sepet) {
    sepet.push({id:7, productName:"Ayakkabi",quantity:2,unitPrice:250})
    
}
addToCart(cart)

//console.log(cart)

let sayi = 10

function sayiTopla(number) {
    number+=1
}
sayiTopla(sayi)
//console.log(sayi)
