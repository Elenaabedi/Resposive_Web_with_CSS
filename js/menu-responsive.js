
var visible = true;

function menuResponsive(){
    if(visible){
      document.getElementById('menu-responsive').innerHTML = '<ul><li><a href="">Precision irrigation</a></li><li><a href="">Products & Solutions</a></li><li><a href="">Netafim Projects</a></li><li><a href="">Netafim Services</a></li><li><a href="">Greenhouse Projects</a></li><li><a href="">Crop Solutions</a></li><li><a href="">Digital Farming</a></li><li><a href="">Sustainable Agriculture</a></li><li><a href="">About us</a></li><li><a href="">Search</a></li></ul>'  
      visible = false;
    } else {
      document.getElementById('menu-responsive').innerHTML = '';
      visible = true;
    }
}