const { response } = require('express');
const Course = require('../models/Course');
const {mongooseToObject, mutipleMongooseToObject} = require('../../util/mongoose.js')

class CourseController{
    // GET /courses/:slug
    show(req, res, next){

        Course.findOne({slug: req.params.slug})
            .then((course) => {
                res.render('courses/show', {course:mongooseToObject(course)})
            })  
            .catch(next)
    }
    //[GET] courses/create

    create(req, res, next){
        res.render('courses/create')
    }
    //[POST] courses/store
    store(req, res, next){
        // res.json(req.body)
        const course = new Course(req.body)
        course.save()
        
        res.send('SAVE')
    }
}

module.exports = new CourseController