let itemClass = document.getElementsByClassName('item')
let itemCountClass = document.getElementsByClassName('item-count')
let increaseClass = document.getElementsByClassName('increase')
let decreaseClass = document.getElementsByClassName('decrease')
let priceClass = document.getElementsByClassName('price')

let subTotalId = document.getElementById('sub-total')
let taxAmountId = document.getElementById('tax-amount')
let totalAmountId = document.getElementById('total-amount')
let calculateArea = document.getElementById('calculate-area')

let removeItem = document.getElementsByClassName('remove-item')

let deductFromSubTotal1 = 0 
let deductFromSubTotal2 = 0
var subtotalArray = []

console.log(subtotalArray)

//Initiate Product price
const productPrice = [219, 59]

//Need work to make this section dynamic (receive value from loop)
    removeItem.item(0).addEventListener('click', function() {
        let counter1 = itemCountClass.item(0).value
        counter1 = parseInt(counter1)
        deductFromSubTotal1 = counter1 * productPrice[0]
        subtotalArray= subtotalArray.filter((i) => i != productPrice[0])
        itemClass.item(0).style.display = 'none'
        calculateAndShowAmount ()

    })

    removeItem.item(1).addEventListener('click', function() {
        let counter2 = itemCountClass.item(1).value
        counter2 = parseInt(counter2)
        deductFromSubTotal2 = counter2 * productPrice[1]
        subtotalArray =  subtotalArray.filter((i) => i != productPrice[1])
        itemClass.item(1).style.display = 'none'
        calculateAndShowAmount ()
    })

   

//SubTotal Business

function calculateAndShowAmount () {
    let subtotalAmount = subtotalArray.reduce(function(a, b) {
        return a + b
    }, 0)

    subTotalId.innerText = subtotalAmount

    let taxAmount = (subtotalAmount*5 /100 )
    taxAmountId.textContent = taxAmount

    let totalAmount = subtotalAmount + taxAmount
    totalAmountId.textContent = totalAmount
    
}


function forIncrement(values) {    
    for (var i = 0; i < values.length; i++) {
        let btnValue = i;
        values[i].addEventListener('click', function() {
           for (var i = 0; i < priceClass.length; i++) {
               let price = priceClass[i].textContent
               showPrice = parseFloat(price)
               let item = itemCountClass[i].value
               let intItem = parseInt(item)

               let subTI = subTotalId.textContent
               let subtotal = parseFloat(subTI)
               
               if ( btnValue == i ) {
                 priceClass[i].textContent = showPrice + productPrice[i]  
                 subtotalArray.push(productPrice[i]) 
                 itemCountClass[i].value = intItem + 1
                 calculateAndShowAmount () 
               } 
               
           }
           
        })
        
    }
 }

 function forDecrement(values) {
    for (var i = 0; i < values.length; i++) {
        let btnValue = i;
        values[i].addEventListener('click', function() {
           for (var i = 0; i < priceClass.length; i++) {
               let price = priceClass[i].textContent
               let showPrice = parseFloat(price)
               let item = itemCountClass[i].value
               let intItem = parseInt(item)
               if ( btnValue == i && showPrice >= productPrice[i] ) {
                 priceClass[i].textContent = showPrice - productPrice[i]  
                 subtotalArray.pop(productPrice[i]) 
                 itemCountClass[i].value = intItem - 1
                 calculateAndShowAmount()
               } 
           }
        })
        
    }
 }



forIncrement(increaseClass)
forDecrement(decreaseClass)

