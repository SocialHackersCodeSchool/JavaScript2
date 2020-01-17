function time(){
        
    let m = setInterval(show, 1000);


    function show(){

        let a = new Date();

        let b = document.getElementById('p');

        b.innerHTML = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
    }

    
}