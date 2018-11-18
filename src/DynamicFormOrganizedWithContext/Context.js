import React, { PureComponent } from 'react'

export const FormDataContext = React.createContext()
export class FormDataProvider extends PureComponent {
	constructor(props) {
		super(props)
		this.state = { formData: {}, setState: this.handleSetState }
	}
	handleSetState = (object) => {
		const { formData } = this.state
		this.setState({ formData: { ...formData, ...object } })
	}

	render() {
		return (
			<FormDataContext.Provider value={this.state}>
				{this.props.children}
			</FormDataContext.Provider>
		)
	}
}
