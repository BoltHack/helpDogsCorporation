const bcrypt = require("bcrypt");
const fs = require("fs");
const path = require("path");

class PetsController {

    static registerPage = (req, res, next) => {
        try {
            res.render('pets/register');
        } catch (e) {
            next(e);
        }
    }

    static register = async (req, res, next) => {
        try {
            const { email, password, confirmPassword, name, petName, petYears} = req.body;

            const filePath = path.join(__dirname, '../data', email + '.json')

            if(fs.existsSync(filePath)){
                return res.status(400).send(`
                    <link rel="stylesheet" href="/css/login.css">
                    <div class="error-container">
                    <p>Данный Email уже зарегистрирован.</p>
                    <a href="http://localhost:3000/pets/register">Вернуться назад</a>
                    </div>
                    `)
            }

            if(confirmPassword !== password) {
                return res.send(`
                <link rel="stylesheet" href="/css/login.css">
                    <div class="error-container">
                    <p>Пароли не совпадают.</p>
                    <a href="http://localhost:3000/pets/register">Вернуться назад</a>
                    </div>
                `)
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            fs.writeFileSync(filePath, JSON.stringify({
                email, realPassword: password, password: hashedPassword, confirmPassword: hashedPassword, name, petName, petYears
            }))

            res.redirect('/');
        } catch (e) {
            console.error(e);
            next(e);
        }
    }

    static loginPage = (req, res, next) => {
        try {
            res.render('login');
        } catch (e) {
            next(e);
        }
    }
    static login = async(req, res, next) => {
        try{
            const {email, password} = req.body
            const filePath = path.join(__dirname, '../data', email + '.json')
            if(fs.existsSync(filePath)){
                const data = JSON.parse(fs.readFileSync(filePath), 'utf-8')
                const { name } = data
                const passwordMatch = await bcrypt.compare(password, data.password);

                if (passwordMatch) {
                    req.session.user = {email, name, petName: data.petName, petYears: data.petYears};
                }else{
                    res.send(`
                    <link rel="stylesheet" href="/css/login.css">
                    <div class="error-container">
                    <p>Пароль введён неправильно.</p>
                    <a href="http://localhost:3000">Вернуться назад</a>
                    </div>
                    `)
                }
            }else{
                res.send(`
                    <link rel="stylesheet" href="/css/login.css">
                    <div class="error-container">
                    <p>Адрес электронной почты не существует.</p>
                    <a href="http://localhost:3000">Вернуться назад</a>
                    </div>
`)
            }
            res.redirect('/pets/index');
        }catch(e){
            console.log(e)
            next(e)
        }
    }

    static mainPage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/index', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }
    static medicationPage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/medication', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }
    static acepromazineMaleatePage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/acepromazine-maleate', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }
    static acetaminophenTylenolPage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/acetaminophen-tylenol', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }
    static aluminumHydroxidePage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/aluminum-hydroxide', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }

    static foodPage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/food', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }

    static trainingPage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/training', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }

    static rulesPage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/rules', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }

    static privacyPolicyPage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/privacyPolicy', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }

    static aboutPage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/about', { user: { name, email, petName, petYears } });
        } catch (e) {
            next(e);
        }
    }

    static contactPage = (req, res, next) => {
        try {
            const { user } = req.session || {};
            const { name, email, petName, petYears } = user || {};
            res.render('pets/contact', {
                user: { name, email, petName, petYears },
                ititle: "Контакты",
                iemailsVisible: true,
                iname: "test",
                iemails: ["test@gmail.com"],
                iphone: "+486524485",
                ipassword: '123456789',
                ipasswordVisible: false
            })
        } catch (e) {
            next(e);
        }
    }

}


module.exports = PetsController;
