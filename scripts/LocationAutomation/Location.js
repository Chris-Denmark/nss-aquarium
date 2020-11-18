export const Location = (location) => {
  return `
  <section class="location">
          <div class="location__image"><img src="./Images/${location.image}" alt=""></div>
          <div class="location__name">${location.name}</div>
          <div class="location__url"><a href=${location.url}></a></div>
          <div class="location__desc">${location.desc}</div>
        </section>
  `
}