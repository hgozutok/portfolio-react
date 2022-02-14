import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './pricing.module.css'

const Pricing = (props) => {
  return (
    <div className={styles['pricing']}>
      <div className={styles['heading-container']}>
        <h1
          className={` ${styles['text']} ${projectStyles['section-Heading']} `}
        >
          {props.heading}
        </h1>
        <span
          className={` ${styles['text1']} ${projectStyles['section-Text']} `}
        >
          {props.text}
        </span>
      </div>
    </div>
  )
}

Pricing.defaultProps = {
  text: 'Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  heading: 'Ask for a quote',
}

Pricing.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
}

export default Pricing
