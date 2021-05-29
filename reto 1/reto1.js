let { name, email } = { name: "John", email: "john@example.com" }
console.log(name); // "John" console.log(email) // "john@example.com"
console.log(email);

let { name, email, rest} = { 
    name: "John", 
    email: "john@example.com", 
    city: "Phoenix", 
    state: "AZ",
    country: "USA"
}
rest === { city: "Phoenix", state: "AZ", country: "USA"} // true


    const user = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
    const str = `({ name, email, rest} = user ).toString()`

    console.log({ name, email, rest});