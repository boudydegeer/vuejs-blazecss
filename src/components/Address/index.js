export default {
	/**
	 * Name of the component
	 */
	name: 'B-Address',

	props: {
		title: {type: String, default: ''}
	},
	/**
	 * The attributes of this component
	 * @returns Object
	 */
	data() {
		return {
		}
	},

	ready() {
		console.log("B-Address is ready");
	}
}