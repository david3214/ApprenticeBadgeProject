function changeBackground(){
    var selectbox = document.getElementById('backgroundSelect').value;

    if(selectbox == "Mountain"){
        document.body.style.backgroundImage = 'url(Pics/Mount-Timpanogos.jpg)';
        $("#PowellInfo").hide();
        $("#timpInfo").show();

    }
    else{
        document.body.style.backgroundImage = 'url(Pics/LakePowell.jpg)';
        $("#PowellInfo").show();
        $("#timpInfo").hide();
    }
}