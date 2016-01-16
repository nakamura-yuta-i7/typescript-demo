function greeter(person) {
    return "Hello !!!!!, " + person.firstname + " " + person.lastname;
}
var user = { firstname: "Yuta", lastname: "Nakamura" };
document.getElementById("greeter").innerHTML = greeter(user);
