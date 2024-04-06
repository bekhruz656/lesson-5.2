function getUserData(promptMessage) {
    return prompt(promptMessage);
}

const name = getUserData('Ismingizni yozing:');
const spaceId = getUserData('Space ID yozing:');
const spacePassword = getUserData('Space Password yozing:');

const userData = {
    name: name,
    ID: spaceId,
    password: spacePassword
};

console.log(userData);