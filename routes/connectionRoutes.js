const express =require('express');
const controller=require('../controllers/connectionController');
const router=express.Router();



//CRUD

//CREATE
//GET /stories/new:send html form
router.get('/new',controller.new);

//POST /stories:create new story
router.post('/',controller.create);


//READ//////////////////////////////////////////////

//GET /connections
//GET /connections
router.get('/',controller.index);
//router.get('/',controller.index);
//GET /connections/:id

router.get('/:id',controller.show);


//GET /stories/:id/edits:send html form for editing an id
router.get('/:id/edit',controller.edit);

//PUT /connections/:id : update the story identified by id
router.put('/:id',controller.update);

//DELETE /connections/:id, delete the story identified by ID
router.delete('/:id',controller.delete);

module.exports=router;
