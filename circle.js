const rText = document.querySelector(".hero__pointer-text")

rText.innerHTML = rText.innerText
  .split("")
  .map(
    (char, i) => `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
  )
  .join("")
