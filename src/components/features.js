import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './features.module.css'

const Features = (props) => {
  return (
    <div className={styles['features']}>
      <div className={styles['heading-container']}>
        <h2
          className={` ${styles['text']} ${projectStyles['section-Heading']} `}
        >
          {props.heading}
        </h2>
        <span
          className={` ${styles['text1']} ${projectStyles['section-Text']} `}
        >
          {props.text}
        </span>
      </div>
      <div className={styles['cards-container']}>
        <div className={styles['card']}>
          <div className={styles['icon-container']}>
            <svg
              viewBox="0 0 1170.2857142857142 1024"
              className={styles['icon']}
            >
              <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
            </svg>
          </div>
          <div className={styles['content-container']}>
            <span
              className={` ${styles['heading']} ${projectStyles['card-Heading']} `}
            >
              {props.heading1}
            </span>
            <span
              className={` ${styles['text2']} ${projectStyles['card-Text']} `}
            >
              {props.text1}
            </span>
          </div>
        </div>
        <div className={styles['card1']}>
          <div className={styles['icon-container1']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
              <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
            </svg>
          </div>
          <div className={styles['content-container1']}>
            <span
              className={` ${styles['heading1']} ${projectStyles['card-Heading']} `}
            >
              {props.heading2}
            </span>
            <span
              className={` ${styles['text3']} ${projectStyles['card-Text']} `}
            >
              {props.text2}
            </span>
          </div>
        </div>
        <div className={styles['card2']}>
          <div className={styles['icon-container2']}>
            <svg
              viewBox="0 0 865.7188571428571 1024"
              className={styles['icon4']}
            >
              <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
            </svg>
          </div>
          <div className={styles['content-container2']}>
            <span
              className={` ${styles['heading2']} ${projectStyles['card-Heading']} `}
            >
              {props.heading3}
            </span>
            <span
              className={` ${styles['text4']} ${projectStyles['card-Text']} `}
            >
              {props.text3}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Features.defaultProps = {
  text1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  text: 'Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  text3:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  heading2: 'Wireframes',
  text2:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  heading: 'Deliverables',
  heading3: 'Design',
  heading1: 'Diagrams',
}

Features.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  heading2: PropTypes.string,
  text2: PropTypes.string,
  heading: PropTypes.string,
  heading3: PropTypes.string,
  heading1: PropTypes.string,
}

export default Features
