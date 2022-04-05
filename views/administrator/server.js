const generalBlock = document.getElementById("colorlib-main");

function editData(elem){
    event.preventDefault();
    generalBlock.style.transition = ".5s";
    generalBlock.style.opacity = "0";
    clearMenu(elem);
    setTimeout(() => {
        $.ajax({
            type: 'POST',
            url: elem.getAttribute("href"),
            success: (response) => {
                if (response) {
                    generalBlock.innerHTML = response;
                    generalBlock.style.opacity = "1";
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








/*

    setTimeout(() => {
        generalBlock.innerHTML = `<section class="ftco-section pt-4 mb-5 ftco-intro">
  <div class="container-fluid px-3 px-md-0">
    <div class="row">
      <div class="col-md-12 mb-4">
        <h1 class="h2">Список всіх кураторів</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque est assumenda illum ratione nesciunt ullam non accusantium voluptas soluta veniam, quam, praesentium suscipit eos amet nisi natus nostrum, iusto expedita?</p>
      </div>
      <div class="col-md-6">
        <h2 class="h4">Перша крупа кураторів</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maxime nisi commodi consequuntur pariatur qui reprehenderit aperiam deserunt, impedit veniam sapiente voluptas minus, ipsum. Ipsum minima sunt provident! Esse, quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maxime nisi commodi consequuntur pariatur qui reprehenderit aperiam deserunt, impedit veniam sapiente voluptas minus, ipsum. Ipsum minima sunt provident! Esse, quae.</p>
      </div>
      <div class="col-md-6">
        <h2 class="h4">Друга група кураторів</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maxime nisi commodi consequuntur pariatur qui reprehenderit aperiam deserunt, impedit veniam sapiente voluptas minus, ipsum. Ipsum minima sunt provident! Esse, quae.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maxime nisi commodi consequuntur pariatur qui reprehenderit aperiam deserunt, impedit veniam sapiente voluptas minus, ipsum. Ipsum minima sunt provident! Esse, quae.</p>
      </div>
    </div>
  </div>
</section>`;
        generalBlock.style.opacity = "1";
    }, 500);
 */