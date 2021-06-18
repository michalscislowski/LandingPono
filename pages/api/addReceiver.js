import { connectToDatabase } from "../../util/mongodb";
const User  = require("../../models/userModel");

export default async (req, res) => {
    console.log(JSON.stringify(req.body))
    const { db } = await connectToDatabase();
    const users = db.collection("token-reveivers");
    const email = req.body.email;
    const wallet = req.body.wallet;
    const status = req.body.status;
    const date = req.body.date;
    let newUser = new User({
        email,
        wallet,
        status,
        date
    });
    const result = await users.insertOne(newUser);

    console.log(
        `${result.insertedCount} user was inserted with the _id: ${result.insertedId}`,
    );
    res.status(200).end();
};
