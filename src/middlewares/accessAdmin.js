let admins = ['Greta', 'Ada', 'Vim', 'Tim']

module.exports = (req,res,next) => {
    if(admins.includes(req.query.user)){
        next()
    }else{res.render('errorAdmin')
}}