function changeBackground(){
    var selectbox = document.getElementById('backgroundSelect').value;

    if(selectbox == "Mountain"){
        document.body.style.backgroundImage = 'url(Pics/Mount-Timpanogos.jpg)';
        document.getElementById("PowellInfo").style.display = 'none';
        localStorage.setItem("powellShow","hidden");
        document.getElementById("timpInfo").style.display = 'block';
        localStorage.setItem("timpShow","visable");
        

    }
    else{
        document.body.style.backgroundImage = 'url(Pics/LakePowell.jpg)';

        document.getElementById("PowellInfo").style.display = 'block';
        localStorage.setItem("powellShow","visable");

        document.getElementById("timpInfo").style.display = 'none';
        localStorage.setItem("timpShow","hidden");
    }
}
function rememberBackground(){
    //Test to see if my local storage for powellShow is set to visable
    if(localStorage.getItem("powellShow") == "visable"){

        document.body.classList.toggle('Powell');

        //Supposed to have the option of Lake view on the select instead of mountain view
        document.getElementById("lakeOption").selected = true;
    }
    else{
        document.body.classList.toggle('Timp');
        
        //Supposed to change the default select to Mountain view instead
        document.getElementById("mountainOption").selected = true;
    }
}