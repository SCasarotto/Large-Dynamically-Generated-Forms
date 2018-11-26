import React, { PureComponent, Fragment } from 'react'

import { FormDataContext } from './Context'

import styles from './../styles'

class Input extends PureComponent {
  static contextType = FormDataContext

  render() {
    const { fieldId, fieldType, fieldOptions, albumId } = this.props
    const { formData, setState } = this.context
    switch (fieldType) {
      case 'text':
        return (
          <input
            type="text"
            id={fieldId}
            style={styles.textInput}
            onChange={(event) =>
              setState({
                [`${albumId}_${fieldId}`]: event.target.value,
              })
            }
            value={formData[`${albumId}_${fieldId}`]}
          />
        )
      case 'textarea':
        return (
          <textarea
            id={fieldId}
            style={styles.textareaInput}
            onChange={(event) =>
              setState({
                [`${albumId}_${fieldId}`]: event.target.value,
              })
            }
            value={formData[`${albumId}_${fieldId}`]}
          />
        )
      case 'radio':
        return (
          <Fragment>
            {fieldOptions.map((option, index) => (
              <div style={styles.radioOptionRow} key={`option_${index}`}>
                <input
                  type="radio"
                  id={`${albumId}_${fieldId}_${option}`}
                  value={option}
                  onChange={(event) =>
                    setState({
                      [`${albumId}_${fieldId}`]: event.target.value,
                    })
                  }
                  checked={formData[`${albumId}_${fieldId}`] === option}
                />
                <label htmlFor={`${albumId}_${fieldId}_${option}`}>{option}</label>
              </div>
            ))}
          </Fragment>
        )
      default:
        return null
    }
  }
}

export default Input
