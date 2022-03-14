let brands
let fullModels
let models
let brandSlug
let phoneName
let unavailable = 'Information not available'

const clearIcon = document.querySelector('.clear-icon')
const searchBar = document.querySelector('input')
const brandsList = document.querySelector('#brands_list')
const phonesList = document.querySelector('.result_grid')
const loading = document.querySelector('#loading')
const loadingModels = document.querySelector('#loading_models')
const loadingProperties = document.querySelector('#loading_properties')
let filter = document.querySelector('#search_bar')
let phonesResultDiv = document.querySelector('.phones_result')
let phonesResult = document.querySelector('#brand_header')
let resultGrid = document.querySelector('.result_grid')
let compare1 = document.querySelector('#compare1')
let img1 = document.querySelector('#first_image')
let compare2 = document.querySelector('#compare2')
let img2 = document.querySelector('#second_image')
let showHide = document.querySelector('#show_hide')
let propertiesGrid = document.querySelector('.properties_grid')
let status1 = document.querySelector('#status1')
let status2 = document.querySelector('#status2')
let dimensions1 = document.querySelector('#dimensions1')
let dimensions2 = document.querySelector('#dimensions2')
let weight1 = document.querySelector('#weight1')
let weight2 = document.querySelector('#weight2')
let sim1 = document.querySelector('#sim1')
let sim2 = document.querySelector('#sim2')
let resolution1 = document.querySelector('#resolution1')
let resolution2 = document.querySelector('#resolution2')
let screen_type1 = document.querySelector('#screen_type1')
let screen_type2 = document.querySelector('#screen_type2')
let screen_size1 = document.querySelector('#screen_size1')
let screen_size2 = document.querySelector('#screen_size2')
let os1 = document.querySelector('#os1')
let os2 = document.querySelector('#os2')
let processor1 = document.querySelector('#processor1')
let processor2 = document.querySelector('#processor2')
let memory1 = document.querySelector('#memory1')
let memory2 = document.querySelector('#memory2')
let usb_type1 = document.querySelector('#usb_type1')
let usb_type2 = document.querySelector('#usb_type2')
let battery1 = document.querySelector('#battery1')
let battery2 = document.querySelector('#battery2')
let charging1 = document.querySelector('#charging1')
let charging2 = document.querySelector('#charging2')
let price1 = document.querySelector('#price1')
let price2 = document.querySelector('#price2')
let benchmark1 = document.querySelector('#benchmark1')
let benchmark2 = document.querySelector('#benchmark2')

f()

window.addEventListener('load', function () {
	if (searchBar.value && clearIcon.style.visibility !== 'visible') {
		clearIcon.style.visibility = 'visible'
	} else if (!searchBar.value) {
		clearIcon.style.visibility = 'hidden'
	}
	if (clearIcon.style.visibility === 'visible') {
		brandsList.style.display = 'none'
	}

	loadingProperties.style.visibility = 'hidden'

	if (localStorage.getItem('phoneCompare1') === null) {
		compare1.innerHTML =
			'<strong>' + 'Samsung' + ' ' + 'Galaxy M52 5G' + '</strong>'
		img1.setAttribute(
			'src',
			'https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m32-5g-.jpg'
		)
		phonesResultDiv.style.display = 'none'

		status1.textContent = 'Available. Released 2021, October 03'
		dimensions1.textContent = '164.2 x 76.4 x 7.4 mm (6.46 x 3.01 x 0.29 in)'
		weight1.textContent = '173 g (6.10 oz)'
		sim1.textContent = 'Hybrid Dual SIM (Nano-SIM, dual stand-by)'
		resolution1.textContent =
			'1080 x 2400 pixels, 20:9 ratio (~393 ppi density)'
		screen_type1.textContent = 'Super AMOLED Plus, 120Hz'
		screen_size1.textContent =
			'6.7 inches, 108.4 cm2 (~86.4% screen-to-body ratio)'
		os1.textContent = 'Android 11, One UI 3.1'
		processor1.textContent =
			'Octa-core (4x2.4 GHz Kryo 670 & 4x1.8 GHz Kryo 670)'
		memory1.textContent = '128GB 6GB RAM, 128GB 8GB RAM'
		usb_type1.textContent = 'USB Type-C 2.0, USB On-The-Go'
		battery1.textContent = 'Li-Ion 5000 mAh, non-removable'
		charging1.textContent = 'Fast charging 25W'
		price1.textContent = '£ 339.00 / € 414.57 / ₹ 25,999'
		benchmark1.textContent = 'Information not available'
	} else {
		let phoneValue = JSON.parse(localStorage.getItem('phoneCompare1'))
		compare1.innerHTML =
			'<strong>' + phoneValue.brand + ' ' + phoneValue.model + '</strong>'
		img1.setAttribute('src', phoneValue.image)
		phonesResultDiv.style.display = 'none'

		let propertiesValue = JSON.parse(localStorage.getItem('propertiesCompare1'))
		status1.textContent = propertiesValue.status
		dimensions1.textContent = propertiesValue.dimensions
		weight1.textContent = propertiesValue.weight
		sim1.textContent = propertiesValue.sim
		resolution1.textContent = propertiesValue.resolution
		screen_type1.textContent = propertiesValue.type
		screen_size1.textContent = propertiesValue.size
		os1.textContent = propertiesValue.os
		processor1.textContent = propertiesValue.cpu
		memory1.textContent = propertiesValue.memory
		usb_type1.textContent = propertiesValue.usb
		battery1.textContent = propertiesValue.battery
		charging1.textContent = propertiesValue.charging
		price1.textContent = propertiesValue.price
		benchmark1.textContent = propertiesValue.benchmark
	}

	if (localStorage.getItem('phoneCompare2') === null) {
		compare2.innerHTML = '<strong>' + 'Xiaomi' + ' ' + 'Civi' + '</strong>'
		img2.setAttribute(
			'src',
			'https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-.jpg'
		)
		phonesResultDiv.style.display = 'none'

		status2.textContent = 'Available. Released 2021, September 30'
		dimensions2.textContent = '158.3 x 71.5 x 7 mm (6.23 x 2.81 x 0.28 in)'
		weight2.textContent = '166 g (5.86 oz)'
		sim2.textContent = 'Dual SIM (Nano-SIM, dual stand-by)'
		resolution2.textContent =
			'1080 x 2400 pixels, 20:9 ratio (~402 ppi density)'
		screen_type2.textContent =
			'OLED, 1B colors, Dolby Vision, HDR10+, 120Hz, 950 nits (peak)'
		screen_size2.textContent =
			'6.55 inches, 103.6 cm2 (~91.5% screen-to-body ratio)'
		os2.textContent = 'Android 11, MIUI 12.5'
		processor2.textContent =
			'Octa-core (4x2.4 GHz Kryo 670 & 4x1.8 GHz Kryo 670)'
		memory2.textContent = '128GB 8GB RAM, 256GB 8GB RAM, 256GB 12GB RAM'
		usb_type2.textContent = 'USB Type-C 2.0, USB On-The-Go'
		battery2.textContent = 'Li-Po 4500 mAh, non-removable'
		charging2.textContent = 'Fast charging 55W, 100% in 45 min'
		price2.textContent = '$ 625.99'
		benchmark2.textContent = 'Information not available'
	} else {
		let phoneValue2 = JSON.parse(localStorage.getItem('phoneCompare2'))
		compare2.innerHTML =
			'<strong>' + phoneValue2.brand + ' ' + phoneValue2.model + '</strong>'
		img2.setAttribute('src', phoneValue2.image)
		phonesResultDiv.style.display = 'none'

		let propertiesValue2 = JSON.parse(
			localStorage.getItem('propertiesCompare2')
		)
		status2.textContent = propertiesValue2.status
		dimensions2.textContent = propertiesValue2.dimensions
		weight2.textContent = propertiesValue2.weight
		sim2.textContent = propertiesValue2.sim
		resolution2.textContent = propertiesValue2.resolution
		screen_type2.textContent = propertiesValue2.type
		screen_size2.textContent = propertiesValue2.size
		os2.textContent = propertiesValue2.os
		processor2.textContent = propertiesValue2.cpu
		memory2.textContent = propertiesValue2.memory
		usb_type2.textContent = propertiesValue2.usb
		battery2.textContent = propertiesValue2.battery
		charging2.textContent = propertiesValue2.charging
		price2.textContent = propertiesValue2.price
		benchmark2.textContent = propertiesValue2.benchmark
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

showHide.addEventListener('click', function () {
	if (resultGrid.style.display === 'none') {
		resultGrid.style.display = 'grid'
	} else {
		resultGrid.style.display = 'none'
	}
})

function f() {
	loading.style.display = 'block'
	loadingModels.style.display = 'none'
	brandsList.style.display = 'none'

	fetch('https://api-mobilespecs.azharimm.site/v2/brands')
		.then((response) => response.json())
		.then((result) => {
			brands = result.data

			renderBrands(result.data)

			loading.style.display = 'none'
			if (filter.value === '') {
				brandsList.style.display = 'block'
			}
		})
}

filter.addEventListener('input', function () {
	if (filter.value !== '') {
		brandsList.style.display = 'block'
	}

	const newBrands = brands.filter((brand) =>
		brand.brand_name.toLowerCase().includes(filter.value.toLowerCase())
	)

	renderBrands(newBrands)
})

function renderBrands(brands) {
	brandsList.innerHTML = ''

	if (filter.value === '') {
		return
	}

	brands.sort((a, b) => {
		return a.brand_name.localeCompare(b.brand_name, 'en')
	})

	for (let i = 0; i < brands.length; i++) {
		let li = document.createElement('li')

		let a = document.createElement('a')
		li.appendChild(a)

		a.textContent = brands[i].brand_name
		a.setAttribute('href', '')

		brandsList.appendChild(li)

		a.addEventListener('click', (event) => {
			event.preventDefault()
			brandsList.style.display = 'none'
			loadingModels.style.display = 'block'
			phonesResultDiv.style.display = 'none'

			fetch(
				'https://api-mobilespecs.azharimm.site/v2/brands/' +
					brands[i].brand_slug
			)
				.then((response) => response.json())
				.then((result) => {
					phonesResultDiv.style.display = 'grid'
					loadingModels.style.display = 'none'

					phonesList.innerHTML = ''
					fullModels = result.data.phones
					models = fullModels.slice(0, 10)
					phonesResult.style.display = 'block'
					brandName = brands[i].brand_name
					resultGrid.style.display = 'grid'
					phonesResult.textContent = brandName + ' Phone Models'

					for (let i = 0; i < models.length; i++) {
						let p_model = document.createElement('p')
						let p = document.createElement('p')
						let p2 = document.createElement('p')
						let modelSlug = models[i].slug

						p_model.innerHTML = models[i].phone_name
						p.innerHTML = '<a href="">Compare</a>'
						p2.innerHTML = '<a href="">Compare 2</a>'

						phonesList.appendChild(p_model)
						phonesList.appendChild(p)
						phonesList.appendChild(p2)

						p.addEventListener('click', (event) => {
							loadingProperties.style.visibility = 'visible'

							fetch('https://api-mobilespecs.azharimm.site/v2/' + modelSlug)
								.then((response) => response.json())
								.then((result) => {
									let releaseDate
									let dimensions
									let weight
									let sim
									let screenType
									let screenSize
									let screenResolution
									let operatingSystem
									let cpu
									let internalMemory
									let usbType
									let battery
									let charging
									let price
									let benchmark

									var releaseCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Launch'
									)
									if (releaseCategory === -1) {
										releaseDate = unavailable
									} else {
										var releaseIndex = result.data.specifications[
											releaseCategory
										].specs.findIndex((p) => p.key === 'Status')
										if (releaseIndex === -1) {
											releaseDate = unavailable
										} else {
											releaseDate =
												result.data.specifications[releaseCategory].specs[
													releaseIndex
												].val[0]
										}
									}
									var bodyCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Body'
									)
									if (bodyCategory === -1) {
										dimensions = unavailable
										weight = unavailable
										sim = unavailable
									} else {
										var dimensionsIndex = result.data.specifications[
											bodyCategory
										].specs.findIndex((p) => p.key === 'Dimensions')
										if (dimensionsIndex === -1) {
											dimensions = unavailable
										} else {
											dimensions =
												result.data.specifications[bodyCategory].specs[
													dimensionsIndex
												].val[0]
										}
										var weightIndex = result.data.specifications[
											bodyCategory
										].specs.findIndex((p) => p.key === 'Weight')
										if (weightIndex === -1) {
											weight = unavailable
										} else {
											weight =
												result.data.specifications[bodyCategory].specs[
													weightIndex
												].val[0]
										}
										var simIndex = result.data.specifications[
											bodyCategory
										].specs.findIndex((p) => p.key === 'SIM')
										if (simIndex === -1) {
											sim = unavailable
										} else {
											sim =
												result.data.specifications[bodyCategory].specs[simIndex]
													.val[0]
										}
									}
									var displayCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Display'
									)
									if (displayCategory === -1) {
										screenResolution = unavailable
										screenSize = unavailable
										screenType = unavailable
									} else {
										var resolutionIndex = result.data.specifications[
											displayCategory
										].specs.findIndex((p) => p.key === 'Resolution')
										if (resolutionIndex === -1) {
											screenResolution = unavailable
										} else {
											screenResolution =
												result.data.specifications[displayCategory].specs[
													resolutionIndex
												].val[0]
										}
										var screenTypeIndex = result.data.specifications[
											displayCategory
										].specs.findIndex((p) => p.key === 'Type')
										if (screenTypeIndex === -1) {
											screenType = unavailable
										} else {
											screenType =
												result.data.specifications[displayCategory].specs[
													screenTypeIndex
												].val[0]
										}
										var screenSizeIndex = result.data.specifications[
											displayCategory
										].specs.findIndex((p) => p.key === 'Size')
										if (screenSizeIndex === -1) {
											screenSize = unavailable
										} else {
											screenSize =
												result.data.specifications[displayCategory].specs[
													screenSizeIndex
												].val[0]
										}
									}
									var platformCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Platform'
									)
									if (platformCategory === -1) {
										cpu = unavailable
										operatingSystem = unavailable
									} else {
										var osIndex = result.data.specifications[
											platformCategory
										].specs.findIndex((p) => p.key === 'OS')
										if (osIndex === -1) {
											operatingSystem = unavailable
										} else {
											operatingSystem =
												result.data.specifications[platformCategory].specs[
													osIndex
												].val[0]
										}
										var cpuIndex = result.data.specifications[
											platformCategory
										].specs.findIndex((p) => p.key === 'CPU')
										if (cpuIndex === -1) {
											cpu = unavailable
										} else {
											cpu =
												result.data.specifications[platformCategory].specs[
													cpuIndex
												].val[0]
										}
									}
									var memoryCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Memory'
									)
									if (memoryCategory === -1) {
										internalMemory = unavailable
									} else {
										var memoryIndex = result.data.specifications[
											memoryCategory
										].specs.findIndex((p) => p.key === 'Internal')
										if (memoryIndex === -1) {
											internalMemory = unavailable
										} else {
											internalMemory =
												result.data.specifications[memoryCategory].specs[
													memoryIndex
												].val[0]
										}
									}
									var usbCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Comms'
									)
									if (usbCategory === -1) {
										usbType = unavailable
									} else {
										var usbIndex = result.data.specifications[
											usbCategory
										].specs.findIndex((p) => p.key === 'USB')
										if (usbIndex === -1) {
											usbType = unavailable
										} else {
											usbType =
												result.data.specifications[usbCategory].specs[usbIndex]
													.val[0]
										}
									}
									var chargingCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Battery'
									)
									if (chargingCategory === -1) {
										battery = unavailable
										charging = unavailable
									} else {
										var batteryIndex = result.data.specifications[
											chargingCategory
										].specs.findIndex((p) => p.key === 'Type')
										if (batteryIndex === -1) {
											battery = unavailable
										} else {
											battery =
												result.data.specifications[chargingCategory].specs[
													batteryIndex
												].val[0]
										}
										var chargingIndex = result.data.specifications[
											chargingCategory
										].specs.findIndex((p) => p.key === 'Charging')
										if (chargingIndex === -1) {
											charging = unavailable
										} else {
											charging =
												result.data.specifications[chargingCategory].specs[
													chargingIndex
												].val[0]
										}
									}
									var miscCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Misc'
									)
									if (miscCategory === -1) {
										price = unavailable
									} else {
										var priceIndex = result.data.specifications[
											miscCategory
										].specs.findIndex((p) => p.key === 'Price')
										if (priceIndex === -1) {
											price = unavailable
										} else {
											price =
												result.data.specifications[miscCategory].specs[
													priceIndex
												].val[0]
										}
									}
									var testsCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Tests'
									)
									if (testsCategory === -1) {
										benchmark = unavailable
									} else {
										var benchmarkIndex = result.data.specifications[
											testsCategory
										].specs.findIndex((p) => p.key === 'Performance')
										if (benchmarkIndex === -1) {
											benchmark = unavailable
										} else {
											benchmark =
												result.data.specifications[testsCategory].specs[
													benchmarkIndex
												].val[0]
											benchmark = benchmark.replace(/(\n)/, '')
										}
									}

									loadingProperties.style.visibility = 'hidden'
									status1.textContent = releaseDate
									dimensions1.textContent = dimensions
									weight1.textContent = weight
									sim1.textContent = sim
									resolution1.textContent = screenResolution
									screen_type1.textContent = screenType
									screen_size1.textContent = screenSize
									os1.textContent = operatingSystem
									processor1.textContent = cpu
									memory1.textContent = internalMemory
									usb_type1.textContent = usbType
									battery1.textContent = battery
									charging1.textContent = charging
									price1.textContent = price
									benchmark1.textContent = benchmark

									let storeProperties = {
										status: status1.textContent,
										dimensions: dimensions1.textContent,
										weight: weight1.textContent,
										sim: sim1.textContent,
										resolution: resolution1.textContent,
										type: screen_type1.textContent,
										size: screen_size1.textContent,
										os: os1.textContent,
										cpu: processor1.textContent,
										memory: memory1.textContent,
										usb: usb_type1.textContent,
										battery: battery1.textContent,
										charging: charging1.textContent,
										price: price1.textContent,
										benchmark: benchmark1.textContent,
									}
									localStorage.setItem(
										'propertiesCompare1',
										JSON.stringify(storeProperties)
									)
								})
							event.preventDefault()
							img1.setAttribute('src', models[i].image)

							let storePhones = {
								brand: brandName,
								model: models[i].phone_name,
								image: img1.src,
							}
							localStorage.setItem('phoneCompare1', JSON.stringify(storePhones))

							let phoneValue = JSON.parse(localStorage.getItem('phoneCompare1'))
							compare1.innerHTML =
								'<strong>' +
								phoneValue.brand +
								' ' +
								phoneValue.model +
								'</strong>'
						})
						p2.addEventListener('click', (event) => {
							loadingProperties.style.visibility = 'visible'

							fetch('https://api-mobilespecs.azharimm.site/v2/' + modelSlug)
								.then((response) => response.json())
								.then((result) => {
									let releaseDate
									let dimensions
									let weight
									let sim
									let screenType
									let screenSize
									let screenResolution
									let operatingSystem
									let cpu
									let internalMemory
									let usbType
									let battery
									let charging
									let price
									let benchmark

									var releaseCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Launch'
									)
									if (releaseCategory === -1) {
										releaseDate = unavailable
									} else {
										var releaseIndex = result.data.specifications[
											releaseCategory
										].specs.findIndex((p) => p.key === 'Status')
										if (releaseIndex === -1) {
											releaseDate = unavailable
										} else {
											releaseDate =
												result.data.specifications[releaseCategory].specs[
													releaseIndex
												].val[0]
										}
									}
									var bodyCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Body'
									)
									if (bodyCategory === -1) {
										dimensions = unavailable
										weight = unavailable
										sim = unavailable
									} else {
										var dimensionsIndex = result.data.specifications[
											bodyCategory
										].specs.findIndex((p) => p.key === 'Dimensions')
										if (dimensionsIndex === -1) {
											dimensions = unavailable
										} else {
											dimensions =
												result.data.specifications[bodyCategory].specs[
													dimensionsIndex
												].val[0]
										}
										var weightIndex = result.data.specifications[
											bodyCategory
										].specs.findIndex((p) => p.key === 'Weight')
										if (weightIndex === -1) {
											weight = unavailable
										} else {
											weight =
												result.data.specifications[bodyCategory].specs[
													weightIndex
												].val[0]
										}
										var simIndex = result.data.specifications[
											bodyCategory
										].specs.findIndex((p) => p.key === 'SIM')
										if (simIndex === -1) {
											sim = unavailable
										} else {
											sim =
												result.data.specifications[bodyCategory].specs[simIndex]
													.val[0]
										}
									}
									var displayCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Display'
									)
									if (displayCategory === -1) {
										screenResolution = unavailable
										screenSize = unavailable
										screenType = unavailable
									} else {
										var resolutionIndex = result.data.specifications[
											displayCategory
										].specs.findIndex((p) => p.key === 'Resolution')
										if (resolutionIndex === -1) {
											screenResolution = unavailable
										} else {
											screenResolution =
												result.data.specifications[displayCategory].specs[
													resolutionIndex
												].val[0]
										}
										var screenTypeIndex = result.data.specifications[
											displayCategory
										].specs.findIndex((p) => p.key === 'Type')
										if (screenTypeIndex === -1) {
											screenType = unavailable
										} else {
											screenType =
												result.data.specifications[displayCategory].specs[
													screenTypeIndex
												].val[0]
										}
										var screenSizeIndex = result.data.specifications[
											displayCategory
										].specs.findIndex((p) => p.key === 'Size')
										if (screenSizeIndex === -1) {
											screenSize = unavailable
										} else {
											screenSize =
												result.data.specifications[displayCategory].specs[
													screenSizeIndex
												].val[0]
										}
									}
									var platformCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Platform'
									)
									if (platformCategory === -1) {
										cpu = unavailable
										operatingSystem = unavailable
									} else {
										var osIndex = result.data.specifications[
											platformCategory
										].specs.findIndex((p) => p.key === 'OS')
										if (osIndex === -1) {
											operatingSystem = unavailable
										} else {
											operatingSystem =
												result.data.specifications[platformCategory].specs[
													osIndex
												].val[0]
										}
										var cpuIndex = result.data.specifications[
											platformCategory
										].specs.findIndex((p) => p.key === 'CPU')
										if (cpuIndex === -1) {
											cpu = unavailable
										} else {
											cpu =
												result.data.specifications[platformCategory].specs[
													cpuIndex
												].val[0]
										}
									}
									var memoryCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Memory'
									)
									if (memoryCategory === -1) {
										internalMemory = unavailable
									} else {
										var memoryIndex = result.data.specifications[
											memoryCategory
										].specs.findIndex((p) => p.key === 'Internal')
										if (memoryIndex === -1) {
											internalMemory = unavailable
										} else {
											internalMemory =
												result.data.specifications[memoryCategory].specs[
													memoryIndex
												].val[0]
										}
									}
									var usbCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Comms'
									)
									if (usbCategory === -1) {
										usbType = unavailable
									} else {
										var usbIndex = result.data.specifications[
											usbCategory
										].specs.findIndex((p) => p.key === 'USB')
										if (usbIndex === -1) {
											usbType = unavailable
										} else {
											usbType =
												result.data.specifications[usbCategory].specs[usbIndex]
													.val[0]
										}
									}
									var chargingCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Battery'
									)
									if (chargingCategory === -1) {
										battery = unavailable
										charging = unavailable
									} else {
										var batteryIndex = result.data.specifications[
											chargingCategory
										].specs.findIndex((p) => p.key === 'Type')
										if (batteryIndex === -1) {
											battery = unavailable
										} else {
											battery =
												result.data.specifications[chargingCategory].specs[
													batteryIndex
												].val[0]
										}
										var chargingIndex = result.data.specifications[
											chargingCategory
										].specs.findIndex((p) => p.key === 'Charging')
										if (chargingIndex === -1) {
											charging = unavailable
										} else {
											charging =
												result.data.specifications[chargingCategory].specs[
													chargingIndex
												].val[0]
										}
									}
									var miscCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Misc'
									)
									if (miscCategory === -1) {
										price = unavailable
									} else {
										var priceIndex = result.data.specifications[
											miscCategory
										].specs.findIndex((p) => p.key === 'Price')
										if (priceIndex === -1) {
											price = unavailable
										} else {
											price =
												result.data.specifications[miscCategory].specs[
													priceIndex
												].val[0]
										}
									}
									var testsCategory = result.data.specifications.findIndex(
										(p) => p.title === 'Tests'
									)
									if (testsCategory === -1) {
										benchmark = unavailable
									} else {
										var benchmarkIndex = result.data.specifications[
											testsCategory
										].specs.findIndex((p) => p.key === 'Performance')
										if (benchmarkIndex === -1) {
											benchmark = unavailable
										} else {
											benchmark =
												result.data.specifications[testsCategory].specs[
													benchmarkIndex
												].val[0]
											benchmark = benchmark.replace(/(\n)/, '')
										}
									}

									loadingProperties.style.visibility = 'hidden'
									status2.textContent = releaseDate
									dimensions2.textContent = dimensions
									weight2.textContent = weight
									sim2.textContent = sim
									resolution2.textContent = screenResolution
									screen_type2.textContent = screenType
									screen_size2.textContent = screenSize
									os2.textContent = operatingSystem
									processor2.textContent = cpu
									memory2.textContent = internalMemory
									usb_type2.textContent = usbType
									battery2.textContent = battery
									charging2.textContent = charging
									price2.textContent = price
									benchmark2.textContent = benchmark

									let storeProperties = {
										status: status2.textContent,
										dimensions: dimensions2.textContent,
										weight: weight2.textContent,
										sim: sim2.textContent,
										resolution: resolution2.textContent,
										type: screen_type2.textContent,
										size: screen_size2.textContent,
										os: os2.textContent,
										cpu: processor2.textContent,
										memory: memory2.textContent,
										usb: usb_type2.textContent,
										battery: battery2.textContent,
										charging: charging2.textContent,
										price: price2.textContent,
										benchmark: benchmark2.textContent,
									}
									localStorage.setItem(
										'propertiesCompare2',
										JSON.stringify(storeProperties)
									)
								})
							event.preventDefault()
							img2.setAttribute('src', models[i].image)

							let storePhones = {
								brand: brandName,
								model: models[i].phone_name,
								image: img2.src,
							}
							localStorage.setItem('phoneCompare2', JSON.stringify(storePhones))

							let phoneValue = JSON.parse(localStorage.getItem('phoneCompare2'))
							compare2.innerHTML =
								'<strong>' +
								phoneValue.brand +
								' ' +
								phoneValue.model +
								'</strong>'
						})
					}
				})
		})
	}
}
