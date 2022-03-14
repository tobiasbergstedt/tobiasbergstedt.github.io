let citiesList = document.querySelector('#cities_list')
let loading = document.querySelector('#loading')
let filter = document.querySelector('#search_bar')
let reloadCities = document.querySelector('#reload_cities')
let addCity = document.querySelector('#add_city')
let buttons = document.querySelector('#buttons')
let addFormSection = document.querySelector('#add_form_section')
let updateFormSection = document.querySelector('#update_form_section')
let updateForm = document.querySelector('#update_form')
let sendNewCity = document.querySelector('#send_new_city')
let newCityName = document.querySelector('#cityName')
let newCityPopulation = document.querySelector('#populationValue')
let updateCityId = document.querySelector('#city_id')
let updateCityName = document.querySelector('#update_city_name')
let updatePopulation = document.querySelector('#update_population')

f()

reloadCities.addEventListener('click', f)

function f() {
  loading.style.display = 'block'
  citiesList.style.display = 'none'
  buttons.style.display = 'none'
  addFormSection.style.display = 'none'
  updateFormSection.style.display = 'none'

  fetch('https://avancera.app/cities/')
    .then((response) => response.json())
    .then((result) => {
      cities = result

      renderCities(result)

      loading.style.display = 'none'
      buttons.style.display = 'grid'
      citiesList.style.display = 'block'
    })
}

function renderCities(cities) {
  citiesList.innerHTML = ''

  cities.sort((a, b) => {
    return a.name.localeCompare(b.name, 'sv')
  })

  for (let i = 0; i < cities.length; i++) {
    let li = document.createElement('li')
    li.textContent = cities[i].name + ' (' + cities[i].population + ')'
    let editLink = document.createElement('a')
    li.appendChild(editLink)
    editLink.setAttribute('href', '')
    editLink.setAttribute('class', 'edit')
    editLink.textContent = ' Edit'

    let removeLink = document.createElement('a')
    removeLink.setAttribute('href', '')
    removeLink.setAttribute('class', 'remove')
    removeLink.textContent = ' Remove'
    li.appendChild(removeLink)

    citiesList.appendChild(li)

    editLink.addEventListener('click', (event) => {
      event.preventDefault()
      if (updateFormSection.style.display === 'block') {
        updateFormSection.style.display = 'none'
      } else {
        updateFormSection.style.display = 'block'
      }
      addFormSection.style.display = 'none'
      updateCityName.value = cities[i].name
      updateCityId.textContent = cities[i].id
      updatePopulation.value = cities[i].population
    })

    removeLink.addEventListener('click', async (event) => {
      event.preventDefault()
      let cityId = cities[i].id
      await fetch('https://avancera.app/cities/' + cityId, {
        method: 'DELETE'
      })
      f()
    })
  }
}

addCity.addEventListener('click', (event) => {
  event.preventDefault()
  updateFormSection.style.display = 'none'
  if (addFormSection.style.display === 'block') {
    addFormSection.style.display = 'none'
  } else {
    addFormSection.style.display = 'block'
  }
})

sendNewCity.addEventListener('click', async (event) => {
  event.preventDefault()
  let cityName = newCityName.value
  let cityPopulation = newCityPopulation.value
  await fetch('https://avancera.app/cities/', {
    body: JSON.stringify({ "name": cityName, "population": parseInt(cityPopulation) }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  f()
})

updateForm.addEventListener('submit', async (event) => {
  event.preventDefault()
  let cityName = updateCityName.value
  let cityId = updateCityId.textContent
  let cityPopulation = updatePopulation.value
  await fetch('https://avancera.app/cities/' + cityId, {
    body: JSON.stringify({ "id": cityId, "name": cityName, "population": parseInt(cityPopulation) }),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PATCH'
  })
  f()
})
