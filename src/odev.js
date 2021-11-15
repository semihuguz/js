//Girilen sayilarin asal sayi olup olmadigini kontrol eden fonksiyon
function primeNumber(...number) {
    for (let i = 0; i < number[i]; i++) {
        var total = 0;
        for (let y = 1; y <= number[i]; y++){
            if(number[i]%y == 0){
                total = total+1
            }
        }
        if (total >2) {
            console.log(number[i] +" asal sayı değildir");
        } else if(total<2){
            console.log(number[i] +" asal sayı değildir ");
        }
        else{
            console.log(number[i] +" asal sayıdır ")
        }
        
    }

}
    primeNumber(1,2,3,4,5,6,7,8,9,10)
//Arkadas sayi olup olmadiklarini kontrol eden fonksiyon
function isFriendNumber(num1,num2) {
    let sum1 = 0
    let sum2 = 0

    for (let i = 0; i < num1; i++) {
        if(num1%i == 0){
            sum1 +=i
        } 
    }
    for (let i = 0; i < num2; i++) {
        if(num2%i == 0){
            sum2 +=i
        }  
    }
    if(sum1==num2 && sum2==num1){
        console.log(num1 +" ve " + num2 +" Arkadas Sayi")
    }
    else{
        console.log(num1 + " ve "+ num2 +" Arkadas Sayi Degil")
    }
    
}
isFriendNumber(200,284)

//1000 e kadar ki tum mukemmel sayilar
function perfectNumber() {
    for (let i = 0; i < 1000; i++) {
        let result = 0
        for (let j = 0; j < i; j++) {
            if(i%j==0){
                result +=j
            }
            
        }
        if(result == i){
            console.log(i+" sayisi mukemmel sayidir")}
        
    }
}
perfectNumber();

function primeNumbers() {
    let primeNumbers = []
    console.log("Asal sayılar: ")
    for (let i = 1; i < 1000; i++) {
        if (isNumberPrime(i)) {
            primeNumbers.push(i)
        }
    }
    console.log(primeNumbers)
}

function isNumberPrime(number) {
    let result = true;
    if (number < 2) result = false;
    if (number == 2) result = true;
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            result = false;
        }
    }
    return result;
}

primeNumbers()

