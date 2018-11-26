import React from 'react'

import { FormDataProvider } from './Context'
import Form from './Form'

const DynamicFormOrganizedWithContextHooks = () => (
	<FormDataProvider>
		<Form />
	</FormDataProvider>
)

export default DynamicFormOrganizedWithContextHooks
