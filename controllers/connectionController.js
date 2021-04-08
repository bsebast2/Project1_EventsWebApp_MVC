const express = require('express');
const model=require('../models/connection');

//CRUD- Create(newConnection),Read(get)   , Update(put), Delete

exports.index=(req,res)=>{
    //res.send(model.find());
    let connections=model.find();
    res.render('./connection/index',{connections});//looks at views folder automatically
};

////CREATE 
//GET /newConnection
//POST /newConnection

//GET /stories/new:send html form  
//GET /newConnection
exports.new=(req,res)=>{
    res.render('./connection/newConnection');
}

//POST /stories:create new story
//POST /newConnection
exports.create=(req,res)=>{
    //res.send('Created a new story');
    console.log(req.body);
    let connection=req.body;
    model.save(connection);
    res.redirect('/connections');

};

///READ 
//GET /connections
//GET /connections/:id

//GET /connections
exports.connections=(req,res)=>{
    //res.send(model.find());
    let connections=model.find();
    res.render('./connections',{connections});//looks at views folder automatically
};


//GET /connections/:id
exports.show=(req,res,next)=>{
    //res.send('send story with ID: '+ req.params.id)
    //need to return details of story
    let id=req.params.id;
    let connection=model.findById(id);
    //res.send(story);
    if(connection){
     res.render('./connection/connection',{connection});   
    }
    let err =new Error('Cannot find story with ID: ' + id);
        err.status=404;
        next(err)
    
};


//UPDATE 
//GET /posts/:id/edit
//PUT|PATCH /posts/:id

//GET /stories/:id/edits:send html form for editing an id
exports.edit=(req,res,next)=>{
    //res.send('send the edit form');
    let id=req.params.id;
    let connection=model.findById(id);
    if(connection){
        res.render('./connection/edit',{connection});

    }
    else{
        let err =new Error('Cannot find story with ID: ' + id);
        err.status=404;
        next(err)
    }
};



//PUT
//PUT /stories/:id : update the story identified by id
exports.update=(req,res,next)=>{
    //res.send('update story with ID: '+ req.params.id)
    let story=req.body;
    console.log(story);
    let id=req.params.id;
    if(model.updateById(id,story)){
        res.redirect('/connections/'+id);
    }else{
        let err =new Error('Cannot find story with ID: ' + id);
        err.status=404;
        next(err)
    }
    console.log(story);
};



//DELETE /posts/:id
//DELETE /stories/:id, delete the story identified by ID
exports.delete=(req,res,next)=>{
    // res.send('delete story with id' + req.params.id);
    let id=req.params.id;;
    if(model.deleteById(id)){
        res.redirect('/connections');
    }
    else{
     let err =new Error('Cannot find story with ID: ' + id);
         err.status=404;
         next(err)
    }
 
 };
 

