var strSum = prompt("შეიყვანეთ ანაბრის თანხა" , 1000)

var strPercent = prompt("შეიყვანეთ საპროცენტო განაკვეთი" , 10)

var finalAmount = parseInt(strSum)

var finalPercent = parseInt(strPercent)

finalAmount = finalAmount + finalAmount * finalPercent / 100


if (finalAmount < 380) {
    var message = "თქვენი საპროცენტო განაკვეთი ძალიან დაბალია"
    alert(message)
} 
else if (finalAmount > 381 || finalAmount < 1000) {
    var message = "თქვენი საპროცენტო განაკვეთი არც ისე დაბალია"
    alert(message)
}
else { 
    alert("გილოცავთ! თქვენი საპროცენტო განაკვეთი საკმაოდ მაღალია" )
}

