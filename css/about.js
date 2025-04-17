document.addEventListener('DOMContentLoaded', () => {

    var buttonAdded = false;
        
    if ( !buttonAdded ) {
        var newButton = document.createElement("button");
        newButton.setAttribute("style", "visibility: hidden");
        newButton.setAttribute("class", "btn btn-warning");
        newButton.innerHTML = "What's this then";
        document.getElementsByTagName('div')[0].appendChild(newButton);
        buttonAdded = true;
    }

    var button = document.getElementsByTagName("button");
    //console.log(button[1].innerHTML);
    button[1].addEventListener("click", (event) => {
        button[2].setAttribute("style", "visibility: visible;");
    });
    button[0].addEventListener("click", (event) => {
        button[2].setAttribute("style", "visibility: hidden;");
    });
    button[2].addEventListener("click", (event) => {
     event.preventDefault();
     location.href="https://shattereddisk.github.io/rickroll/rickroll.mp4";
     
     // Sorry, I had to try ¯\_(ツ)_/¯
   });
 });