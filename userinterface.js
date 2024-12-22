function printUserDetails(user) {
    console.log("Username: ".concat(user.username));
    if (user.email) {
        console.log("Email: ".concat(user.email));
    }
    else {
        console.log('Email: Not provided');
    }
    if (user.phoneNumber) {
        console.log("Phone: ".concat(user.phoneNumber));
    }
    else {
        console.log('Phone: Not provided');
    }
}
var user1 = {
    username: "john_doe",
    email: "john.doe@example.com",
    phoneNumber: 1234567890,
};
var user2 = {
    username: "jane_doe",
    email: "jane.doe@example.com",
};
var user3 = {
    username: "sam_smith",
};
printUserDetails(user1);
printUserDetails(user2);
printUserDetails(user3);
