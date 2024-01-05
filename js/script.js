const btnDarkMode = document.querySelector(".dark-mode-btn")



// 1. Checking the theme at the level of system settings

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
   btnDarkMode.classList.add("dark-mode-btn--active")
   document.body.classList.add("body-dark-mode")
}

// 2. Checking theme in localStorage

if (localStorage.getItem('darkMode') === 'body-dark-mode') {
   btnDarkMode.classList.add("dark-mode-btn--active")
   document.body.classList.add("body-dark-mode")
} else if (localStorage.getItem('darkMode') === 'light') {
      btnDarkMode.classList.remove("dark-mode-btn--active")
      document.body.classList.remove("body-dark-mode")

}


// 3. When system settings are changed, the theme changes as well

window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) => {
   const newColorScheme = event.matches ? "dark" : "light";

   if (newColorScheme === "dark") {
      btnDarkMode.classList.add("dark-btn-mode--active")
      document.body.classList.add("body-dark-mode")
   } else {
      btnDarkMode.classList.remove("dark-btn-mode--active")
      document.body.classList.remove("body-dark-mode")
   }
})


// 4. Turning on the night mode by button

btnDarkMode.onclick = function () {
   btnDarkMode.classList.toggle("dark-mode-btn--active")

   const isDark = document.body.classList.toggle("body-dark-mode")
   if (isDark) {
      localStorage.setItem('darkMode', 'body-dark-mode')
   } else {
      localStorage.setItem('darkMode', 'light')
   }
}