import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const reveivers = await db
    .collection("token-receivers")
    .find()
    .sort( { date: -1 } )
    .toArray();

  res.json(reveivers);
};