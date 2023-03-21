const mysql=require('mysql-await');
const con=mysql.createConnection({host:'localhost',user:'root',password:'',database:'work'});

// database-> work,table-> worklist



con.connect((err)=>{
    if(err)
        console.log("not connected");
    else
        console.log("connected");
})


async function readwork2(work_type)
{
    let result=await con.awaitQuery("select * from worklist where work_type=?",[work_type]);
    return(result);
}

async function readall2()
{
    let result=await con.awaitQuery("select * from worklist");
    return(result);
}

async function readby_time2(x)
{
    let r=await con.awaitQuery("select * from worklist where time=?",[x]);
        return(r);
}
async function readby_id2(id)
{
    let r=await con.awaitQuery("select * from worklist where id=?",[id]);
        return(r);
}

async function post_data2(work_type,time)
{
    let z=await con.awaitQuery("select * from worklist where work_type=? && time=?",[work_type,time]);
    if(z.length!=0)
        return(-1);

    let x=await con.awaitQuery("insert into worklist(work_type,time) values(?,?)",[work_type,time]);
    return(x);

}

async function updateby_id2(id,work_type,time)
{
    let z=await con.awaitQuery("select * from worklist where id=?",[id]);
    if(z.length==0)
        return(-1);
    
    let x=await con.awaitQuery("update worklist set work_type=?,time=? where id=?",[work_type,time,id]);
    return(x);

}

async function updateby_work_type2(work_type,wt,time)//
{
    let x=await con.awaitQuery("select * from worklist where work_type=?",[work_type]);
    if(x.length==0)
        return(-1);

    let r=await con.awaitQuery("update worklist set time=?,work_type=? where work_type=?",[time,wt,work_type]);
    return(r);
}

async function updateby_time2(time,work_type,t)
{
    let x=await con.awaitQuery("select * from worklist where time=?",[t]);
    if(x.length==0)
        return(-1);
    let r=await con.awaitQuery("update worklist set work_type=?,time=? where time=?",[work_type,time,t]);
    return(r);

}
async function deleteby_id2(id)
{
    let z=await con.awaitQuery("select * from worklist where id=?",[id]);
    if(z.length==0)
        return(-1);
    let x=await con.awaitQuery("delete from worklist where id=?",[id]);
    return(x);
}

async function deleteby_work_type2(work_type)
{
    let w=await con.awaitQuery("select * from worklist where work_type=?",[work_type]);
    if(w.length==0)
        return(-1);
    let c=await con.awaitQuery("delete from worklist where work_type=?",[work_type]);
        return(c);

}

async function deleteby_time2(time)
{
    let c=await con.awaitQuery("select * from worklist where time=?",[time]);
    if(c.length==0)
            return(-1);
    let e=await con.awaitQuery("delete from worklist where time=?",[time]);
        return(e);

}
module.exports={deleteby_time2,deleteby_work_type2,updateby_time2,updateby_work_type2,deleteby_id2,updateby_id2,readwork2,readall2,readby_time2,readby_id2,post_data2};
