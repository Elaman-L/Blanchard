const telInput = document.querySelector(".input-tel");

telInput.addEventListener("input", function () {
  const regex = /^\d+$/;
  if (!regex.test(telInput.value)) {
    telInput.classList.add("error");
  } else {
    telInput.classList.remove("error");
  }
})
