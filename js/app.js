let links = document.querySelectorAll("header nav a"),
 nav = document.querySelector("header nav"),
 bar = document.querySelector("header .bar")
// THIS FOR CLEAR THE ACTIVE FROM ONE LINK TO ANTHER LINK 
for (const iterator of links) {
    iterator.addEventListener("click", _=>{
        clear(links , "active")
        iterator.classList.add("active");
        nav.classList.remove("active_nav") 
    })
}

function clear (arr , class_name){
    for (const iterator of arr) {
        iterator.classList.remove(class_name)
    }
}

bar.addEventListener("click", _=>{
    nav.classList.toggle("active_nav") 
})