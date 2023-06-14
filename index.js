import mongoose, { Schema, SchemaTypes, model } from "mongoose";
await mongoose.connect("mongodb://localhost:27017/userpost");

// SCHEMA USER
const userSchema = new Schema
    ({
        name: String,
        alter: Number
    });

const userModel = model("User", userSchema)


// SCHEMA POST

const postSchema = new Schema
    ({
        titel: String,
        inhalt: String,
        author: [{ type: SchemaTypes.ObjectId, ref: userModel }],

    });

const postModel = model("Post", postSchema)



// DATEN ERSTELLEN (User)

const userOne = await userModel.create({
    name: "Manni",
    alter: 25,
})

const userTwo = await userModel.create({
    name: "Karl",
    alter: 27,
})
const userThree = await userModel.create({
    name: "Berta",
    alter: 80,
})

// POSTS ERSTELLEN 

const post1 = await postModel.create({
    titel: "Titel des Posts 1",
    inhalt: "Inhalt des Posts 1",
    author: userOne._id,
});

// Variante mit Save//

const post2 = new postModel({
    titel: "Titel des Posts 2",
    inhalt: "Inhalt des Posts 2",
    author: userOne._id,
});
await post2.save()

const post3 = await postModel.create({
    titel: "Titel des Posts 3",
    inhalt: "Inhalt des Posts 3",
    author: userTwo._id,
});

const post4 = await postModel.create({
    titel: "Titel des Posts 4",
    inhalt: "Inhalt des Posts 4",
    author: userTwo._id,
});

const post5 = await postModel.create({
    titel: "Titel des Posts 5",
    inhalt: "Inhalt des Posts 5",
    author: userThree._id,
});

const post6 = await postModel.create({
    titel: "Titel des Posts 6",
    inhalt: "Inhalt des Posts 6",
    author: userThree._id,
});


// await post1.save()


await mongoose.disconnect()