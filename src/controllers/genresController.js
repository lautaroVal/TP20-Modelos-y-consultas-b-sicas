const db = require('../database/models');

module.exports = {
    list: (req,res) => {
    db.Genre.findAll()
    .then(function(genres){
        return res.render('genresList', {
            genres
        })
     })
     .catch((error) => console.log(error));
},
    detail: (req,res) => {
        db.Genre.findByPk(req.params.id)
        .then(function(genre){
            return res.render('genresDetail',{
                genre
            })
        })
             .catch((error) => console.log(error));
    }
}