function openNav() {
    document.getElementById("mySidenav").style.width = "70%";
    document.body.style.backgroundColor = "rgba(0,0,0)";
    
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("left").style.backgroundColor = "white";
}

function openTab(evento,escolha){
  var i, tabContent, tabs;

  tabContent = document.getElementsByClassName("right-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabs = document.getElementsByClassName("tabs-p");
  
  for (i = 0; i < tabs.length; i++) {
    tabs[i].className = tabs[i].className.replace(" active", "");
  }

  document.getElementById(escolha).style.display = "block";
  evento.currentTarget.className += " active";
  

}