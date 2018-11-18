import React, { PureComponent } from 'react'

import styles from './../styles'

class Title extends PureComponent {
	render() {
		const { albumName } = this.props
		return (
			<div style={styles.accordianTitleWrapper}>
				<h3 style={styles.accordianTitle}>{albumName}</h3>
				<div className="accordion__arrow" role="presentation" style={styles.sectionArrow} />
			</div>
		)
	}
}

export default Title
