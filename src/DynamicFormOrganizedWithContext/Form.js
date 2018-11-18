import React, { PureComponent } from 'react'

import { FormDataContext } from './Context'
import Title from './Title'
import Body from './Body'

import { albums } from './../formData'
import styles from './../styles'

class Form extends PureComponent {
	static contextType = FormDataContext
	constructor(props) {
		super(props)
		this.handleSubmit = this.handleSubmit.bind(this)
	}
	handleSubmit(e) {
		e.preventDefault()
		console.log('Submitting Form! Form data:', this.context.formData)
	}
	render() {
		return (
			<form style={styles.form} onSubmit={this.handleSubmit}>
				<h1 style={styles.formTitle}>Big Dynamic Form</h1>
				<div style={styles.accordian}>
					{albums.map((album) => {
						const { albumId, albumName } = album
						return (
							<div key={albumId} style={styles.accordianItem}>
								<Title albumName={albumName} />
								<Body albumId={albumId} />
							</div>
						)
					})}
				</div>
				<button type="submit">Submit</button>
			</form>
		)
	}
}

export default Form
