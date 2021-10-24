function searchEco() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('data');
      
    for (i = 0; i < x.length; i++) { 
        if (x[i].innerHTML.toLowerCase().includes(input) && input != "") {
			console.log(input);
            x[i].style.display="list-item";
        }
        else {
            x[i].style.display="none";                 
        }
    }
}