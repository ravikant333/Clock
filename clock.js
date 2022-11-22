
function gettime(){
    const time= new Date()
    const hrs= time.getHours()
    const min= time.getMinutes()
    const sec=time.getSeconds()
    
    document.getElementById("hrs").innerHTML=hrs
    document.getElementById("min").innerHTML=min
    document.getElementById('sec').innerHTML=sec
}

setInterval(gettime,100)
