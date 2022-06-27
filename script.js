let gender = prompt("Enter your gender in  Male or Female");
let age = parseInt(prompt("Enter your age"));
if (gender == "Male") {
    console.log("Your gender is Male");
    if (age >= 21) {
        console.log("your are eligible in marriage");
    }
    else if (age < 21) {
        let wait = 21 - age;
        console.log("you are wait", wait, "years in your marriage");
    }
}
if (gender == "Female") {
    console.log("Your gender is Female");
    if (age >= 18) {
        console.log("your are eligible in marriage");
    }
    else if (age < 18) {
        let wait = 18 - age;
        console.log("you are wait", wait, "years in your marriage");
    }
}


else {
    console.log("INVALID COMMENT");
}