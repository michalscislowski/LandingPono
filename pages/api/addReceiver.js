import { connectToDatabase } from "../../util/mongodb";
const User  = require("../../models/userModel");
const database = process.env.NEXT_PUBLIC_DATABASE;

export default async (req, res) => {
    console.log(JSON.stringify(req.body))
    const { db } = await connectToDatabase();
    const users = db.collection(database);
    const email = req.body.email;
    const wallet_addres = req.body.wallet_addres;
    const status = req.body.status;
    const date = req.body.date;
    let newUser = new User({
        email,
        wallet_addres,
        status,
        date
    });
    const result = await users.insertOne(newUser);

    console.log(
        `${result.insertedCount} user was inserted with the _id: ${result.insertedId}`,
    );
    res.status(200).end();
};
