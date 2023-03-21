const express=require('express');
const route=express.Router();
const { deleteby_time1,deleteby_work_type1,updateby_time1,updateby_work_type1,deleteby_id1,updateby_id1,readwork1,readall1,readby_time1,readby_id1,post_data1 }=require('../contollers/controller.js');

route.get('/readby_work_type',readwork1);
route.get('/readall',readall1);
route.get('/readby_time',readby_time1);
route.get('/readby_id/:id',readby_id1);

route.post('/post',post_data1);
route.put('/updateby_id/:id',updateby_id1);
route.put('/updateby_work_type/:work_type',updateby_work_type1);
route.put('/updateby_time/:t',updateby_time1);

route.delete('/deleteby_id/:id',deleteby_id1);
route.delete('/deleteby_work_type/:work_type',deleteby_work_type1);
route.delete('/deleteby_time',deleteby_time1)             

module.exports={route};
