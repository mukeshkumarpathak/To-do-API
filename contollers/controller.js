const { deleteby_time2,deleteby_work_type2,updateby_time2,updateby_work_type2,deleteby_id2,updateby_id2,readwork2,readall2,readby_time2,readby_id2,post_data2 }=require('../services/service.js');

let readwork1=async (req,resp,next)=>{
    let work_type=await req.headers.work_type;
    let  data=await readwork2(work_type);
    if(data.length==0)
        resp.send("not found");
    else
        resp.send({data:data});
}

let readall1=async (req,resp,next)=>{
    let d=await readall2();
    if(d.length==0)
        resp.send("empty database");
    else
        resp.send(d);
}

let readby_time1=async (req,resp,next)=>{
    let x=await req.headers.time;
    let result=await readby_time2(x);
    if(result.length==0)
        resp.send("not found");
    else
        resp.send({data:result});
    }
let readby_id1=async (req,resp,next)=>{
    let x=await req.params.id;
    let resul=await readby_id2(x);
    if(resul.length==0)
        resp.send("data is not present");
    else
        resp.send({data:resul});
}

let post_data1=async (req,resp,next)=>{
    let work_type=await req.body.work_type;
    let time=await req.body.time;
    let r=await post_data2(work_type,time);
    if(r==-1)
        resp.send("data is already present");
    else if(r["affectedRows"]==1)
        resp.send("inserted");
    else
        resp.send("error in inserting");
}

let updateby_id1=async (req,resp,next)=>{
    let time=await req.body.time;
    let work_type=await req.body.work_type;
    let id=await req.params.id;
    let result= await updateby_id2(id,work_type,time);
    if(result==-1)
        resp.send("id is not present");
    else
        resp.send("updated\n");

}

let updateby_time1=async (req,resp,next)=>{
    let work_type=await req.body.work_type;
    let time=await req.body.time;
    let t=await req.params.t;

    let z=await updateby_time2(time,work_type,t);
    if(z==-1)
        resp.send("not found");
    else
        resp.send("updated");
}

let updateby_work_type1=async (req,resp,next)=>{
    let time=await req.body.time;
    let wt=await req.body.work_type;
    let work_type=await req.params.work_type;
    let x=await updateby_work_type2(work_type,wt,time);
    if(x==-1)
        resp.send("this is not present");
    else
        resp.send("updated");
}


let deleteby_id1=async (req,resp,next)=>{
    let id=await req.params.id;
    let r=await deleteby_id2(id);
    if(r==-1)
        resp.send("id is not found");
    else
        resp.send("deleted");
}
let deleteby_work_type1=async (req,resp,next)=>{
    let work_type=await req.params.work_type;
    let r=await deleteby_work_type2(work_type);
    if(r==-1)
        resp.send("this is not present");
    else
        resp.send("deleted");
}
let deleteby_time1=async (req,resp,next)=>{
    let time=await req.query.time;
    let c=await deleteby_time2(time);
    if(c==-1)
        resp.send("not present data");
    else
        resp.send("deleted");
}



module.exports={deleteby_time1,deleteby_work_type1,updateby_time1,updateby_work_type1,deleteby_id1,updateby_id1,readwork1,readall1,readby_time1,readby_id1,post_data1};

