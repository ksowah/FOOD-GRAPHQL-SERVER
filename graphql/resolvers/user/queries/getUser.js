const Authenticate = require("../../../../middleware/auth");
const User = require("../../../../models/User");

async function getUser(_, { ID }, context) {
 
    Authenticate(context)

    try {
        const user = await User.findById(ID);
        user.token = "";
        user.password = "";

        console.log("the user", user);
        return user;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    getUser,
};
