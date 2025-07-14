let menu = ()=>{
    let button = document.getElementById("menu-list")
  if(button.classList[0] == "not-visible"){
   button.classList.remove ("not-visible")
   button.classList.add("visible")
  }else{
   button.classList.add ("not-visible")
   button.classList.remove("visible")
  }
}