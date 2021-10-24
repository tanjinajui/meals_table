function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);

    table_body.append(tr_clone);
    clean_first_tr(table_body.firstElementChild);
    // table_body.style.marginBottom="20px";
}

function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
}
function remove_tr(This) {
    if(This.closest('tbody').childElementCount == 1)
    {
        alert("You Don't have Permission to Delete This ?");
    }else{
        This.closest('tr').remove();
    }
}
// meals js 
//popup
document.querySelector(".breakfast-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".lunch-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".dinner-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.add("active");
});
document.querySelector(".popup .close-btn").addEventListener("click",function(){
    document.querySelector(".popup").classList.remove("active");
});
// save 
// let saturday = document.querySelector(".saturday");
// let sunday = document.querySelector(".sunday");
// let monday = document.querySelector(".monday");
// let tuesday = document.querySelector(".tuesday");
// let wednusday = document.querySelector(".wednusday");
// let thursday = document.querySelector(".thursday");
// let friday = document.querySelector(".friday");
// let breakfast_btn = document.querySelector(".breakfast-btn");
// let lunch_btn = document.querySelector(".lunch-btn");
// let dinner_btn = document.querySelector(".dinner-btn");
// let meal = document.querySelector(".meal");
// let meal_time = document.querySelector(".meal-time");
// let day = document.querySelector(".day");
let save_button = document.querySelector(".save-button");
save_button.addEventListener("click",save_data);
function save_data(){
    // console.log("data");
    var meal_time = document.getElementsById("meal-time").value;
    var meal = document.getElementsById("meal").value;
    if(!meal_time|| !meal){
        alert("Please fill all the boxes");
    }
}
