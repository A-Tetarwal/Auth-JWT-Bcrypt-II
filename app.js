const express = require("express");
const app = express();
const userModel = require("./models/user");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const cookieParser = require("cookie-parser");
const path = require("path");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/signup", (req, res) => {
    const { username, email, password, age } = req.body;
    bcrypt.genSalt(10, (err, salt) => {
        console.log(salt);
        bcrypt.hash(password, salt, async (err, hash) => {
            console.log(hash);
            const user = await userModel.create({
                username, 
                email, 
                password: hash, 
                age
            })
            // res.render('login')

            // user create ho chuka hai, automatically login krwa deta hain
            let token = jwt.sign(email, 'securekey');
            res.cookie("token", token);
            res.send(user);
        });
    });
});

app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', async (req, res) => {
    // res.send(user);
    const user = await userModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email or password is incorrect');
    
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) return res.status(400).send('Email or password is incorrect');

    // login hone ke baad token set krenge hain session ke liye
    let token = jwt.sign({email: user.email}, 'securekey');
    res.cookie("token", token);
    res.send(user)
})

app.get('/logout', (req, res) => {
    res.cookie('token', "");
    res.redirect('/login')
})

app.listen(3000, (string = "fired at 3000") => {
    console.log(string);
});
