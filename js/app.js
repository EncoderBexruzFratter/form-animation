let form__left = document.querySelector("#form__left");
let form__right = document.querySelector(".form__right");
let form__left__btn = document.querySelector(".form__left__btn");
form__left__btn.addEventListener("click", function () {
  form__left.style.alignItems = "end";
  form__left.style.left = "660px";
  form__right.style.right = "660px";
  form__right.style.padding = "50px";
  form__left.innerHTML = `
    <h1 class="fotm__title">Hi My friend</h1>
    <p class="form__text">Lorem ipsum dolor sit amet.</p>
    <button  class="form__left__btn__2">login</button>
    `;
  form__right.innerHTML = `
    <form class="form">
    <input type="text" class="form__inp" placeholder="Username" />
    <input type="text" class="form__inp" placeholder="Name" />
    <input type="email" class="form__inp" placeholder="Email" />
    <input type="password" class="form__inp" placeholder="Pasword" />
    <button class="form__push__btn">Submit</button>
  </form>
    `;
  let form__left__btn__2 = document.querySelector(".form__left__btn__2");

  form__left__btn__2.addEventListener("click", function () {
    form__left.style.left = "40px";
    form__right.style.right = "40px";
    form__left.style.alignItems = "start";
    form__left.innerHTML = `
        <h1 class="fotm__title">Hi My friend</h1>
        <p class="form__text">Lorem ipsum dolor sit amet.</p>
        <button  class="form__left__btn">Sign in</button>
        `;
    form__right.style.padding = "100px";

    form__right.innerHTML = `
        <form class="form">
        <input type="text" class="form__inp" placeholder="Username" />
        <input type="password" class="form__inp" placeholder="Pasword" />
        <button class="form__push__btn">Submit</button>
      </form>
        `;
  });
});
