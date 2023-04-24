const Authenticate = require("../../../../middleware/auth");
const User = require("../../../../models/User");

async function getUsers(_, _, context ) {

    Authenticate(context)

    try {
        const users = await User.find()
            .select("-password -token")

        console.log("the users", users);
        return users;
    } catch (err) {
        throw new Error(err);
    }
}

module.exports = {
    getUsers,
};
