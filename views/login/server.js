$(document).ready(() => {
    $("form").submit((event) => {
        event.preventDefault();
        $.ajax({
            type: 'POST',
            url: '/login',
            data: $('form').serialize(),
            dataType: "json",
            success: (response) => {
                if (response) {
                    $('form')[0].reset();
                    window.location.href = "/profile";
                }
                else{
                    const block = document.getElementById('blockPage');
                    const button = document.querySelector('button');
                    button.setAttribute("disabled", "disabled");
                    block.style.transition = "1s";
                    block.classList.add('wrongPass');
                    setTimeout(() => {
                        block.classList.remove('wrongPass');
                        setTimeout(() => {
                            block.style.transition = null;
                            button.removeAttribute('disabled');
                        }, 1000)
                    },1500)

                }
            }
        })
    });
});