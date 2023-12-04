// Reduse Method // Yeah bohat zyada kaam ata ha specialy jab ap "shopping cards" use karta ha

const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (accumulator, currentValue) {
//     console.log(`accumulator Value: ${accumulator} and current Value: ${currentValue}`);
//     return accumulator + currentValue
// }, 0) // "function" kye bad "Quma ," laga kar "accumulator" kii "value" dye sakta ha


const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0) // acc value 3

console.log(myTotal);

// accumulator 1 empty vaiable ap ko dyta ha
// initial value jo bhi ap dye gye 1st time to wo is accumulator me chal jati ha


const shoppingCard = [
    {
        itemName: "Js Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "dataScience Course",
        price: 12999
    }
]

const priceToPay = shoppingCard.reduce( (accumulator, item) => accumulator + item.price, 0)
console.log(priceToPay);