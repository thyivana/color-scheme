const seedColorInput = document.getElementById("seed-color")
const modeSelect = document.getElementById("mode")
const getSchemeBtn = document.getElementById("get-scheme")
const colorSchemeDiv = document.getElementById("color-scheme")

getSchemeBtn.addEventListener("click", () => {
  const seedColor = seedColorInput.value.slice(1)
  const mode = modeSelect.value
  fetch(`https://www.thecolorapi.com/scheme?hex=${seedColor}&mode=${mode}&count=5`)
    .then(res => res.json())
    .then(data => {
      colorSchemeDiv.innerHTML = ""
      data.colors.forEach(color => {
        const colorDiv = document.createElement("div")
        colorDiv.className = "color"
        colorDiv.style.backgroundColor = color.hex.value
        colorDiv.innerHTML = `<span>${color.hex.value}</span>`
        colorDiv.addEventListener("click", () => {
          navigator.clipboard.writeText(color.hex.value)
          alert(`Copied ${color.hex.value} to clipboard!`)
        })
        colorSchemeDiv.appendChild(colorDiv)
      })
    })
})
