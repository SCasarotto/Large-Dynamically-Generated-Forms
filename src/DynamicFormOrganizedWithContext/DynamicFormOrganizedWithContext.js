import React, { Component } from 'react'

import { FormDataProvider } from './Context'
import Form from './Form'

class DynamicFormOrganizedWithContext extends Component {
  render() {
    return (
      <FormDataProvider>
        <Form />
      </FormDataProvider>
    )
  }
}

export default DynamicFormOrganizedWithContext
