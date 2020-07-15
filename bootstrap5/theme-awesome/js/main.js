 //dark mode

 const darkModeSwitchBtn = document.querySelector('.btn-toggle');

 const sun = `<svg class="bi" width="25" height="25" fill="currentColor">
         <use xlink:href="img/svg/bootstrap-icons.svg#sun"/></svg>`;
 const moon = `<svg class="bi" width="25" height="25" fill="currentColor">
         <use xlink:href="img/svg/bootstrap-icons.svg#moon"/></svg>`;

 // Listen for a click on the button
 darkModeSwitchBtn.addEventListener('click', function () {
     if (document.body.hasAttribute('data-theme')) {
         document.body.removeAttribute("data-theme");
        darkModeSwitchBtn.innerHTML = sun;
     } else {
        document.body.setAttribute("data-theme", "dark");
        darkModeSwitchBtn.innerHTML = moon;

     }
 })


 // online code
 const darkSwitch = document.getElementById("darkSwitch");

function initTheme() {
    const e = null !== localStorage.getItem("darkSwitch") && "dark" === localStorage.getItem("darkSwitch");
    darkSwitch.checked = e, e ? document.body.setAttribute("data-theme", "dark") : document.body.removeAttribute("data-theme")
}

function resetTheme() {
    darkSwitch.checked ? (document.body.setAttribute("data-theme", "dark"), localStorage.setItem("darkSwitch", "dark")) : (document.body.removeAttribute("data-theme"), localStorage.removeItem("darkSwitch"))
}
window.addEventListener("load", () => {
    darkSwitch && (initTheme(), darkSwitch.addEventListener("change", () => {
        resetTheme()
    }))
});