
const List = Array.from(document.querySelectorAll('li')); //creating array from list of profiles
const ArrLength = List.length; 

pageButtons();
function pageButtons() {
    const PageNum = Math.floor(ArrLength / 10) + 1; //this gives number of pages

    var div = document.createElement("div");    //creating a div element    
    div.style.margin = '25px';
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.classList.add('PageNo');  //adding class name to div element
    
    //creating buttons for each page number
    for (var i = 1; i <= PageNum; i++) {
        var x = document.createElement("button");      
        var y = document.createTextNode(i); 
        div.appendChild(x);  
        x.appendChild(y);     
        document.querySelector('div.page').appendChild(div);
    }
}

const PNumber = Array.from(document.querySelectorAll('.PageNo button')); //creating an array from page number buttons
PNumber.map(button => {        
    button.style.margin = '1px'; 
    button.addEventListener('click', pageBtn); //adding an event listener to button
});


function show(btnClick) {
    var first = (btnClick * 10) - 10; //first profile displayed from list
    var last = btnClick * 10;   //last profile displayed on a page 
   
    List.forEach((profile,i) => {      
        if(i >= first && i < last){
            profile.style.display = 'block'; //making profiles visible when its between first and last
        }else{
            profile.style.display = 'none'; //hiding rest of the profiles
        }
    });
}

show(1); //displaying first 10 profiles when page loads for the first time

function pageBtn(e) {
    show(this.innerText); //calling display function when page button is clicked
}