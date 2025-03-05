import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();
  const client = await clientPromise;
  const db = client.db("shortLinks");
  const collection = db.collection("url");

  let doc = await collection.findOne({
    shorturl: body.shorturl,
  });
  if (!doc) {
    let result = await collection.insertOne({
      url: body.url,
      shorturl: body.shorturl,
    });
    return Response.json({ success: true, error: false, message: "Url generated successfully" });
  } else {
    return Response.json({
      success: false,
      error: true,
      message: "shorturl already exists",
    });
  }
}
