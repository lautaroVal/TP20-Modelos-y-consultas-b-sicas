const db = require('../database/models');

module.exports = {
    list: (req,res) => {
    db.Actor.findAll()
    .then(function(actors){
        return res.render('actorsList', {
            actors
        })
     })
     .catch((error) => console.log(error));
},
    detail: (req,res) => {
        db.Actor.findByPk(req.params.id)
        .then(function(actor){
            return res.render('actorsDetail',{
                actor
            })
        })
             .catch((error) => console.log(error));
    }
}