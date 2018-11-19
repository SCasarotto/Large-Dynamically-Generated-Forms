import React, { PureComponent } from 'react'

import { albums, fields } from './../formData'

export const FormDataContext = React.createContext()
export class FormDataProvider extends PureComponent {
  constructor(props) {
    super(props)

    //Setup initial State
    const formData = {}
    for (let i = 0; i < albums.length; i++) {
      for (let j = 0; j < fields.length; j++) {
        formData[`${albums[i].albumId}_${fields[j].fieldId}`] = ''
      }
    }

    this.state = { formData, setState: this.handleSetState }
  }
  handleSetState = (object) => {
    const { formData } = this.state
    this.setState({ formData: { ...formData, ...object } })
  }

  render() {
    return (
      <FormDataContext.Provider value={this.state}>{this.props.children}</FormDataContext.Provider>
    )
  }
}
