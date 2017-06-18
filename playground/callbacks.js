let getUser = (id, callback) => {
    let user = {
        id: id,
        name: 'Leo'
    };

    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(12, (userObject) => {
    console.log(userObject);
});