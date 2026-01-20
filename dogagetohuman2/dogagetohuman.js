function calculateAge() {
    // Input field se value lena
    var dogAge = document.getElementById("dogAgeInput").value;
    
    // Check karna ki input khali toh nahi hai
    if (dogAge === "") {
        alert("Please enter a number!");
        return;
    }

    // Calculation logic
    var humanAge = ((dogAge - 2) * 4) + 21;

    // Result ko screen par dikhana (alert ki jagah)
    document.getElementById("result").innerHTML = 
        "Your dog is " + humanAge + " years old in human years! 🦴";
}