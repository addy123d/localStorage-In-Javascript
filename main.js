console.log("Localstorage !");

// BRING ALL HTML ELEMENTS
const editHeader = document.getElementById("editheader"),
      editContent = document.getElementById("editcontent"),
      wholePage = document.getElementById("page"),
      form = document.getElementById("Theform");



// ADD EVENT LISTENERS   
window.addEventListener("load",applyProperty);   
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    let title = event.target.title.value;
    let content = event.target.content.value;
    let color = event.target.color.value;
    console.log(title,content,color);
    
    localStorage.clear();
    collectItems(title,content,color);

    event.target.title.value = "";
    event.target.content.value = "";
    event.target.color.value = "";
})


function collectItems(title,content,color){
    //FIRST STORE TITLE INTO LOCALSTORAGE !
    localStorage.setItem("title",title);

    // STORE CONTENT INTO LOCALSTORAGE !
    localStorage.setItem("content",content);

    // STORE COLOUR INTO LOCALSTORAGE !
    localStorage.setItem("color",color);

    applyProperty();
}


function applyProperty(){
    // APPLY TITLE
    if(localStorage.getItem("title"))
    editHeader.innerText = localStorage.getItem("title");
    else
    editHeader.innerText = editHeader.innerText;

    // APPLY CONTENT
    if(localStorage.getItem("content"))
    editContent.innerText = localStorage.getItem("content");
    else
    editContent.innerText = editContent.innerText;

    //APPLY COLOR
    if(localStorage.getItem("color"))
    wholePage.style.backgroundColor = localStorage.getItem("color");
    else
    wholePage.style.backgroundColor = wholePage.style.backgroundColor;
}
