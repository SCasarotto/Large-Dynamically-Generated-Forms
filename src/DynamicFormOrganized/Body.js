import React, { PureComponent } from 'react'

import { fields } from './../formData'

import Input from './Input'
import styles from './../styles'

class Body extends PureComponent {
	render() {
		const { albumId, state, setState } = this.props
		return (
			<div style={styles.body}>
				{fields.map((field) => {
					const { fieldId, fieldName } = field

					return (
						<div style={styles.formRow} key={fieldId}>
							<label htmlFor={fieldId} style={styles.rowLabel}>
								{fieldName}
							</label>
							<Input {...field} albumId={albumId} state={state} setState={setState} />
						</div>
					)
				})}
			</div>
		)
	}
}

export default Body
