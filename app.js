// // by basic JS
// let todo = [];
// let req = prompt("enter the new request");
// while (true) {
//     if (req == "quit") {
//         console.log("quitting the todo...");
//         break;
//     }
//     if (req == "list") {
//         console.log("--------------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("--------------------");
//     }
//     else if (req == "add") {
//         let task = prompt("enter the task you want to add");
//         todo.push(task);
//         console.log("task added...");
//     }
//     else if (req == "delete") {
//         let index = prompt("enter the index you want to delete");
//         todo.splice(index, 1);
//         console.log("task deleted...");
//     }
//     else {
//         console.log("wrong request..!!!");
//     }
//     req = prompt("enter the new request");
// }

//-----------------------------------------------------------------------------

let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");


btn.addEventListener("click", function () {
    addTask();
});

window.addEventListener("keypress", (e) => {
    if (e.code == "Enter" && inp.value != "") {
        addTask();
    }
});

function addTask() {
    if (inp.value == "") {
        alert("Please enter yr task !!");
    }
    else if (inp.value.length > 20) {
        alert("Task length exceeded !!");
    }
    else {
        let pre = document.createElement("pre");
        pre.className = "text";
        let check = document.createElement("input");
        check.type = "checkbox";
        check.className = "cb";
        let li = document.createElement("li");
        pre.innerText = inp.value;
        let del = document.createElement("button");
        del.innerText = "delete";
        del.className = "btn btn-outline-danger";
        li.appendChild(check);
        li.appendChild(pre);
        li.appendChild(del);
        ul.prepend(li);
        console.log("Task added...");
        inp.value = "";
        inp.placeholder = "Enter new task";


        // // add event listener to new ckeckbox of new tasks
        // check.addEventListener("change", () => {

        //     if (check.checked) {
        //         check.parentElement.childNodes[1].className = "strike_text";
        //     }
        //     else {
        //         check.parentElement.childNodes[1].className = "text";
        //     }
        // });
    }
}


ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Task deleted...");
    }
});


ul.addEventListener("change", (e) => {
    if (e.target.nodeName == "INPUT") {  //checkno
        if (e.target.checked) {
            e.target.parentElement.childNodes[1].className = "strike_text";
        }
        else {
            e.target.parentElement.childNodes[1].className = "text";
        }
    }
});

// // event listener for pretask's checkbox
// document.querySelectorAll(".cb").forEach(check => {
//     check.addEventListener("change", () => {

//         if (check.checked) {
//             check.parentElement.childNodes[1].className = "strike_text";
//         }
//         else {
//             check.parentElement.childNodes[1].className = "text";
//         }
//     });
// });
