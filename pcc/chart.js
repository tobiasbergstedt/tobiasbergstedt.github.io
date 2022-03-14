const chart = new Chart(document.querySelector('canvas').getContext('2d'), {
  type: 'bar',
  data: {
    labels: [],
    datasets: [
      {
        label: 'Total number of smartphones',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(201, 203, 207, 0.2)'],
        borderColor: [
          'rgb(255, 99, 132)',
          'rgb(255, 159, 64)',
          'rgb(255, 205, 86)',
          'rgb(75, 192, 192)',
          'rgb(54, 162, 235)',
          'rgb(153, 102, 255)',
          'rgb(201, 203, 207)'],
        borderWidth: 1
      }
    ]
  }
})

const clearIcon = document.querySelector('.clear-icon')
const brandsList = document.querySelector('#brands_list')
const searchBar = document.querySelector('input')
const loading = document.querySelector('#loading')
let filter = document.querySelector('#search_bar')

f()

let phones

function f() {
  loading.style.display = 'block'
  brandsList.style.display = 'none'

  fetch('https://api-mobilespecs.azharimm.site/v2/brands')
    .then((response) => response.json())
    .then((result) => {
      phones = result.data

      renderPhones(result.data)

      loading.style.display = 'none'
      if (filter.value === '') {
        brandsList.style.display = 'block'
      }
    })
}

window.addEventListener('load', function () {
  if (searchBar.value && clearIcon.style.visibility !== 'visible') {
    clearIcon.style.visibility = 'visible'
  } else if (!searchBar.value) {
    clearIcon.style.visibility = 'hidden'
  }
  if (clearIcon.style.visibility === 'visible') {
    brandsList.style.display = 'none'
  }
})

searchBar.addEventListener('keyup', () => {
  if (searchBar.value && clearIcon.style.visibility != 'visible') {
    clearIcon.style.visibility = 'visible'
  } else if (!searchBar.value) {
    clearIcon.style.visibility = 'hidden'
  }
})

clearIcon.addEventListener('click', () => {
  searchBar.value = ''
  clearIcon.style.visibility = 'hidden'
  brandsList.style.display = 'none'
})

filter.addEventListener('input', function () {
  if (filter.value !== '') {
    brandsList.style.display = 'block'
  }

  const newPhones = phones.filter((phone) =>
    phone.brand_name.toLowerCase().includes(filter.value.toLowerCase())
  )

  renderPhones(newPhones)
})

function renderPhones(phones) {
  brandsList.innerHTML = ''

  if (filter.value === '') {
    return
  }

  phones.sort((a, b) => {
    return a.brand_name.localeCompare(b.brand_name, 'sv')
  })

  for (let i = 0; i < phones.length; i++) {
    let li = document.createElement('li')

    let a = document.createElement('a')
    li.appendChild(a)

    a.textContent = phones[i].brand_name + ' (' + phones[i].device_count + ')'
    a.setAttribute('href', '')

    brandsList.appendChild(li)

    a.addEventListener('click', (event) => {
      event.preventDefault()

      chart.data.datasets[0].data.push(phones[i].device_count)
      chart.data.labels.push(phones[i].brand_name)
      chart.update()
    })
  }
}

document.querySelector('#reset-chart').addEventListener('click', () => {
  chart.data.datasets[0].data = []
  chart.data.labels = []
  chart.update()
})
