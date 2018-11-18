import React, { PureComponent, Fragment } from 'react'

import styles from './../styles'

class Input extends PureComponent {
  render() {
    const { fieldId, fieldType, fieldOptions, albumId, state, setState } = this.props
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
            value={state[`${albumId}_${fieldId}`]}
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
            value={state[`${albumId}_${fieldId}`]}
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
                  checked={state[`${albumId}_${fieldId}`] === option}
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
