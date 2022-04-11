const generalBlock = document.getElementById("colorlib-main");
let checkMenu = true;
function editData(elem){
    event.preventDefault();

    if(!checkMenu) return;
    checkMenu = false;

    generalBlock.style.transition = ".5s";
    generalBlock.style.opacity = "0";
    clearMenu(elem);
    setTimeout(() => {
        $.ajax({
            type: 'POST',
            url: elem.getAttribute("href"),
            success: (response) => {
                if (response) {
                    localStorage.setItem("POSTLink", elem.getAttribute("href"));
                    generalBlock.innerHTML = response;
                    generalBlock.style.opacity = "1";
                    checkMenu = true;

                    new AJAX_DATA(elem.getAttribute("href"));

                }
                else alert("ERR");
            }
        });
    }, 500);
}

function clearMenu(element){
    document.querySelectorAll("#colorlib-main-menu li").forEach(elem => {
        elem.removeAttribute("class");
    })
    element.parentElement.setAttribute("class", "colorlib-active");
}


function addCurator(){
    let check = true;
    document.querySelectorAll("#addCuratorForm input").forEach(input => {
        if(!input.value){
            input.style.borderColor = "red";
            check = false;
        }else{
            input.style.borderColor = "#ced4da";
        }
    })
    if(check) {
        $.ajax({
            type: 'POST',
            url: '/addCuratorUser',
            data: $('#addCuratorForm').serialize(),
            dataType: "json",
            success: (response) => {
                if (response) {
                    $('#curatorAddModal').modal('show');
                    $('#addCuratorForm').trigger("reset");
                } else alert("ERR");
            }
        });
    }
}

function checkPage(){
    const url = (localStorage.getItem("POSTLink")) ? localStorage.getItem("POSTLink") : "/mainPage";
    generalBlock.style.transition = "0s";
    generalBlock.style.opacity = "0";
    $.ajax({
        type: 'POST',
        url: url,
        success: (response) => {
            if (response) {
                generalBlock.innerHTML = response;
                generalBlock.style.opacity = "1";
                checkMenu = true;

                new AJAX_DATA(url);
                clickLink(url);
            }
            else alert("ERR");
        }
    });
}

checkPage();

function clickLink(href){
    document.querySelectorAll("#colorlib-main-menu li").forEach(elem => {
        if(elem.querySelector('a').getAttribute('href') === href)
            elem.setAttribute("class", "colorlib-active");
        else
            elem.removeAttribute("class");
    })

}

class AJAX_DATA{
    constructor(link) {
        this.link = link;
        switch (this.link){
            case "/addCurator":
                this.addCuratorForm();
                break;
        }
    }

    addCuratorForm() {
        document.querySelectorAll("#addCuratorForm input").forEach(input => {
            input.addEventListener('change', (event) => {
                input.style.borderColor = "#ced4da";
            });
        });
    }

}