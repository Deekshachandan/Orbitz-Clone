const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

document.querySelector("button").addEventListener("click", myfuct);

  function myfuct(event) {
    event.preventDefault();

    a = document.querySelector("#location").value;

    b = document.querySelector("#cheackin").value;

    c = document.querySelector("#cheackout").value;

    d = document.querySelector("#travellers").value;

    console.log(a, b, c, d);

    if ((a == "mumbai" && d >= 1, a == "delhi" && d >= 1)) {
      window.open("stay.js.html");
    } else {
      alert("Please Enter correct city and Travellers greater than 1");
    }
  }