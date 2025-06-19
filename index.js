let counter = 0;
const success = document.querySelector(".success");
const button = document.querySelector(".success>button");
const body = document.querySelector("body");
const invalid = document.querySelector(".email>p:nth-of-type(2)");
const form = document.querySelector("form");
const main=document.querySelector("main");
const email_div=document.querySelector(".email");
const input=document.querySelector("input");
// console.log('success is',success);
success.remove();
invalid.remove();
// Define media queries
const mobileQuery = window.matchMedia("(max-width:73.0625em)");
const desktopQuery = window.matchMedia("(min-width:73.0625em)");

// Handler function
function handleDeviceChange(e) {
    const emailRegExp = /^[\w.!#$%&'*+/=?^`{|}~-]+@[a-z\d-]+(?:\.[a-z\d-]+)*$/i;
    if (mobileQuery.matches) {
        if (counter == 0) {
            e.stopPropagation();
            e.preventDefault()
            // body.appendChild(clicked);
            // check email
            const data = Object.fromEntries(new FormData(form));
            console.log(data);
            if(data.email.length!==0 && emailRegExp.test(data.email)){
                counter = 1;
                main.remove();
                body.appendChild(success);
            }else{
                console.log("hello");
                email_div.appendChild(invalid);
                input.style.backgroundColor="rgba(255,232,230,255)";
                input.style.outlineColor="hsl(4, 100%, 67%)";
                input.style.color="hsl(4, 100%, 67%)";
                input.addEventListener("keydown",(e)=>{
                    invalid.remove();
                    input.style.color="rgb(0, 0, 0)";
                    input.style.outlineColor="rgb(54, 56, 78)";
                    input.style.backgroundColor="rgb(255, 255, 255)";
                })
            }
            // console.log(data.email.validity.typeMismatch);

            // 
            
        } else {
            success.remove();
            body.appendChild(main);
            input.value="";
            counter = 0;
        }
    } else if (desktopQuery.matches) {
        if (counter == 0) {
            e.stopPropagation();
            e.preventDefault(e)
            body.appendChild(clicked);
            // check email
            const data = Object.fromEntries(new FormData(form));
            console.log(data);

            // 
            counter = 1;
        } else {
            e.stopPropagation();
            clicked.remove();
            counter = 0;
        }

    }
}

// Attach listeners
// mobileQuery.addEventListener("change", handleDeviceChange);
// desktopQuery.addEventListener("change", handleDeviceChange);
form.addEventListener("submit", (e) => handleDeviceChange(e));
button.addEventListener('click',(e)=>handleDeviceChange(e));
// document.addEventListener("click", (e) => {
//     counter = 0;
//     clicked.remove();
// })  