import BButton from 'components/Button'

export default {
	/**
	 * Name of the component
	 */
	name: 'B-Alert',

	/**
	 * Public properties
	 */
	props: {
		type: {type: String, default: 'primary'},
		withButton: { coerce(value){ return value == "" || value ? true : false} },
		show: { default: true },
		dismiss: {type: Number, default: 5, coerce(value) { return parseInt(value * 1000) } },

		// @Todo: extract to base component and extend
		primary: { coerce(value){ return value == "" || value  ? true : false } },
		secondary: { coerce(value){return value == "" || value  ? true : false } },
		success: { coerce(value){return value == "" || value  ? true : false } },
		error: { coerce(value){return value == "" || value  ? true : false } },
	},

	computed: {
		// @Todo: extract to base component and extend
		modifier () {
			return {
			 'c-alerts__alert--primary' : this.primary,
			 'c-alerts__alert--secondary': this.secondary,
			 'c-alerts__alert--success' : this.success,
			 'c-alerts__alert--error': this.error,
			}
		},

	},
	/**
	 * The attributes of this component
	 * @returns Object
	 */
	data () {
		return {}
	},

	ready () {
		console.log("B-Alert is ready");

		if(this.dismiss)
		{
			setTimeout(() => {
				this.hide()
			}, this.dismiss)
		}

	},

	components:{
		BButton
	} ,

	methods: {
		hide () {
			console.log('hide')
			this.show = false
		}
	}
}