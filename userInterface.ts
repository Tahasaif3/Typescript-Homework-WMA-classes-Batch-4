interface User {
  username: string;
  email?: string;
  phoneNumber?: number;
}

function printUserDetails(user: User): void {
  console.log(`Username: ${user.username}`);

  if (user.email) {
    console.log(`Email: ${user.email}`);
  } else {
    console.log('Email: Not provided');
  }

  if (user.phoneNumber) {
    console.log(`Phone: ${user.phoneNumber}`);
  } else {
    console.log('Phone: Not provided');
  }
}

const user1: User = {
  username: "Taha saif",
  email: "taha@gmail.com",
  phoneNumber: 12444256,
};

const user2: User = {
  username: "rehman",
  email: "rehman@gmail.com",
};

const user3: User = {
  username: "rubab",
};

printUserDetails(user1);
printUserDetails(user2);
printUserDetails(user3);
