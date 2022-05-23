const toggles=document.querySelectorAll(".toggle")

const good = document.querySelector("#good")
const cheap = document.querySelector("#cheap")
const fast = document.querySelector("#fast")

toggles.forEach(toggle=>{
    toggle.addEventListener("change",(event)=>{
        if(good.checked && fast.checked && cheap.checked){
            if(good === event.target){
                fast.checked=false
            }else if(cheap === event.target){
                good.checked=false
            }else{
                cheap.checked=false
            }
        }
    })
})
