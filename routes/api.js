const db = require("../models/workout.js");

module.exports = function (app) {
    app.get("/api/workouts", (_req, res) => {
        db.find({}).then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
    app.post("/api/workouts", (_req, res) => {
        
        db.create({}).then(data => {
            console.log(data)
            res.json(data)
        })
        .catch(err =>{
            console.log("err: >>", err)
            res.json(err)
        })
    });
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        console.log(body)
        db.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
        })
    });
};