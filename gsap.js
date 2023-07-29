const container = document.querySelector(".scroll-container")
const sections = gsap.utils.toArray(".scroll-container section")

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-container",
    pin: true,
    scrub: 1,
    end: "+=3000",
    snap: 1 / (sections.length - 1),
  },
})

// hero text style
const heroTitle = new SplitType(".hero__title", { types: "lines, words" })
console.log(heroTitle)
gsap.from(heroTitle.lines, {
  y: 300,
  stagger: 1,
  duration: 0.8,
  ease: "power3.inOut",
})

// RANDOM MOVEMENT
const randomX = random(10, 20)
const randomY = random(20, 30)
const randomDelay = random(0, 1)
const randomTime = random(3, 5)
const randomTime2 = random(5, 10)
const randomAngle = random(8, 12)

const images = [...document.querySelectorAll(".hero__bg img")]

gsap.from(images, {
  y: 1000,
  ease: "bounce",
})

images.forEach((img) => {
  gsap.set(img, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1),
  })

  moveX(img, 1)
  moveY(img, -2)
  rotate(img, 1)
})

function rotate(target, direction) {
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1],
  })
}

function moveX(target, direction) {
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1],
  })
}

function moveY(target, direction) {
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1],
  })
}

function random(min, max) {
  const delta = max - min
  return (direction = 1) => (min + delta * Math.random()) * direction
}
