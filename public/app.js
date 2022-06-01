

document.addEventListener('alpine:init', () => {
    Alpine.data('garments', () => ({
		gender: 'All',
		season: 'All',
		price: 0,
		genderFilter: [
			{id: 1, name: 'gender', item: 'All'},
			{id: 2, name: 'gender', item: 'Female'},
			{id: 3, name: 'gender', item: 'Male'},
			{id: 4, name: 'gender', item: 'Unisex'}
		],

		seasonFilter : [
			{id: 5, name: 'season', item: 'All'},
			{id: 6, name: 'season', item: 'Summer'},
			{id: 7, name: 'season', item: 'Winter'},
			{id: 8, name: 'season', item: 'All seasons'}
		],

		async filterData(){
			let data = []
			await axios
			.get(`/api/garments?gender=${this.gender}&season=${this.season}`, {
			})
			.then(function(result) {
				data = result.data.data
			})
			console.log(data)
			return data
		},

		async garmentsLength(){
			let text = ''
			await axios
			.get(`/api/garments?gender=${this.gender}&season=${this.season}`, {
			})
			.then((result) => {
				text = result.data.data.length + ' garments found'
			})
			return text
		},

		async getPrice(){
			axios
			.get(`/api/garments/price/${this.price}`)
			.then(function(result) {
				console.log(result.data)
				return result.data.garments
			})
		},

		getGenderFilter(){
			return this.genderFilter
		},

		getSeasonFilter(){
			return this.seasonFilter
		},

		getSetPrice(){
			return this.price
		}
    }))
})