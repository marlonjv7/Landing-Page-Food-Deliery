const mostrarMenu = document.getElementById('mostrarMenu');

document.addEventListener('click', ({ target }) => {

    if (target.classList.contains('btnOfertas')) {
        Swal.fire({
            title: 'Compra realizada',
            icon: 'success'
        })
    }

    if (target.classList.contains('btnDomicilio')) {
        Swal.fire({
            title: 'Domicilio agendado',
            icon: 'success'
        })
    }

    if (target.classList.contains('newOrden')) {
        Swal.fire({
            title: 'Nueva orden',
            icon: 'success'
        })
    }

    if (target.id == 1) {
        mostrarMenu.innerHTML = `
    <section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Kebab.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
<section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-4.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
<section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-5.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
<section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-6.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
<section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-7.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
<section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-8.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
<section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-9.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
<section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-10.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>`
    } else if (target.id == 2) {
        mostrarMenu.innerHTML = `
        <section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-4.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
        `
    } else if (target.id == 3) {
        mostrarMenu.innerHTML = `
        <section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-5.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
        `
    } else if (target.id == 4) {
        mostrarMenu.innerHTML = `
        <section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-6.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
        `
    } else if (target.id == 5) {
        mostrarMenu.innerHTML = `
        <section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-7.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
        `
    } else if (target.id == 6) {
        mostrarMenu.innerHTML = `
        <section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-8.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
        `
    } else if (target.id == 7) {
        mostrarMenu.innerHTML = `
        <section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-9.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
        `
    } else if (target.id == 8) {
        mostrarMenu.innerHTML = `
        <section class="d-grid targetaPrincipal targetaPrincipalFiltrado mx-5 mt-5">
    <img class="platilloPrincipal mx-auto d-block" src="./images/Group 8448-10.png" alt="">
    <article class="text-center m rounded-5">
        <div class="d-flex mb-3 mx-auto valoracion">
            <img class="p-1" src="./images/users.png" alt="">
            <img class="p-1" src="./images/star.png" alt="">
            <h4 class="p-1">(4.5)</h4>
        </div>
        <h2 class="mt-5"><span class="tituSpan1">Kebab</span></h2>
        <p class="mx-5 mb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
    </article>

    <div class="d-flex justify-content-center">
        <button class="newOrden rounded-pill btn text-light btnDownlode btnTargetaPrinc">Order Now</button>
    </div>
</section>
        `
    };
});