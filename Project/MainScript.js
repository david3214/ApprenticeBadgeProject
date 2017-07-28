function changeBackground(){
    var selectbox = document.getElementById('backgroundSelect').value;

    if(selectbox == "Mountain"){
        document.body.classList.add('Timp');
        document.body.classList.remove('Powell');        

        localStorage.setItem("powellShow","hidden");
        localStorage.setItem("timpShow","visable");
        

    }
    else{
        document.body.classList.add('Powell');
        document.body.classList.remove('Timp');

        localStorage.setItem("powellShow","visable");

        localStorage.setItem("timpShow","hidden");
    }
}
function rememberBackground(){
    //Test to see if my local storage for powellShow is set to visable
    if(localStorage.getItem("powellShow") == "visable"){

        document.body.classList.remove('Timp');
        document.body.classList.add('Powell');


        //Supposed to have the option of Lake view on the select instead of mountain view
        document.getElementById("lakeOption").selected = true;
    }
    else{
        document.body.classList.remove('Powell');
        
        //Supposed to change the default select to Mountain view instead
        document.getElementById("mountainOption").selected = true;
    }
}