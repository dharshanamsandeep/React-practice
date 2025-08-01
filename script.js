const cart = ["sdf", "wdc", "wedfv"]

Createcart(cart) // order id 

    .then(function (Orderid) {
        // payement 
        console.log(Orderid)
        return Orderid;
    })
    .catch(function (err) {
        console.log(err.message)
    })
    .then(function (Orderid) {
        return ProceedtoPayment(Orderid);

    })
    .then(function (paymentInfo) {
        console.log(paymentInfo);
    })
    .then(function (paymentInfo) {
        return ShoworderSummary(paymentInfo);
    })
    .then(function (Ordersummary) {
        console.log(Ordersummary)
    })


function Createcart(cart) {
    const pr = new Promise(function (resolve, reject) {
        if (!validcart(cart)) {
            const err = new Error("not a valid cart")
            reject(err)
        }
        const Orderid = "123234"
        if (Orderid) {
            setTimeout(function () {
                resolve(Orderid)
            }, 5000)

        }
    })
    return pr;
}

function ProceedtoPayment(Orderid) {
    return new Promise(function (resolve, reject) {
        resolve("payment was successful")
    })
}

function ShoworderSummary(paymentInfo) {
    return new Promise(function (resolve, reject) {
        resolve("you bought car from the cart")
    })
}



function validcart(cart) {
    return false;
}


