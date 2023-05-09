var circle_check_btn=document.querySelectorAll(".circle-check button");

for (const i of circle_check_btn) {
    i.addEventListener("click",function(){
        for (const j of circle_check_btn) {
            j.classList.remove("active");
        }
        i.classList.add("active");
    })
}