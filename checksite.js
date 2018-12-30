async function getVisits(){
    let lastsite=await fetch("lsite.php");
    let l= await lastsite.json();
    return (l.visits[0]);
}



//check for unvisited site
async function checksite(){
    visitdata= await getVisits();
   //alert(visitdata.visited);
    if(visitdata.visited==0){
        await fetch("lsite.php?update="+visitdata.id);
        let searchurl="http://google.com/search?tbm=isch&q=";
        window.location.href=searchurl+visitdata.name;
    }
    else{
        setTimeout(checksite,2000);
        console.log("checksite");
    }
}
checksite(); 

document.addEventListener('DOMContentLoaded',function(){
    b=document.getElementById('searchbtn');
    t=document.getElementById('searchtxt');
    b.addEventListener('click',async function(){
        await fetch("lsite.php?push="+t.value.replace(" ","+"));
        let searchurl="http://google.com/search?tbm=isch&q=";
        window.location.href=searchurl+t.value.replace(" ","+");
    });
    tsf=document.getElementById('tsf');
    tsf.addEventListener('submit',async function(e){
        await fetch("lsite.php?push="+t.value.replace(" ","+"));
        let searchurl="http://google.com/search?tbm=isch&q=";
        window.location.href=searchurl+t.value.replace(" ","+");
    })
});
