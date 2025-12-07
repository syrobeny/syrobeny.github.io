const btn = document.getElementById("btnFal");
const falDiv = document.getElementById("fal");
const loading = document.getElementById("loading");

btn.addEventListener("click", () => {
  loading.innerText = "در حال گرفتن فال...";
  falDiv.innerText = "";

  fetch("https://hafez-dxle.onrender.com/fal")
    .then(response => response.json())
    .then(data => {
      loading.innerText = "";

      falDiv.innerHTML = `
        <h3>${data.title}</h3>
        <p>${data.interpreter}</p>
      `;
    })
    .catch(err => {
      loading.innerText = "";
      falDiv.innerText = "خطا در دریافت فال! دوباره امتحان کنید.";
    });
});
