let User = require('../model/user');
const { render } = require('../server');


// Sign up avec (POST)
function signup(req, res){
    let user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    user.admin = req.body.admin;

    console.log("POST user reçu :");
    console.log(user)

    user.save( (err) => {
        if(err){
            res.send('can\'t register user', err);
        }
        res.json({ message: `${user.username} saved!`})
    })
}

// Login avec (PUT)
function login(req, res) {
    console.log("login recu : ");
    console.log(req.body);
    User.findOne({username: req.body.username, password: req.body.password }, (err, user) =>{
        if(err){res.send(err)}
        res.json({username: user.username, admin: user.admin});
    })

}


module.exports = { signup, login };
