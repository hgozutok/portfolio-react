import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './faqs.module.css'

const Faqs = (props) => {
  return (
    <div className={styles['faqs']}>
      <h2 className={` ${styles['text']} ${projectStyles['section-Heading']} `}>
        {props.heading}
      </h2>
      <div className={styles['content-container']}>
        <div className={styles['faq']}>
          <div className={styles['question-container']}>
            <span className={styles['question']}>{props.question}</span>
          </div>
          <div className={styles['answer-container']}>
            <span
              className={` ${styles['answer']} ${projectStyles['card-Text']} `}
            >
              {props.answer}
            </span>
            <span className={projectStyles['card-Text']}>{props.answer1}</span>
          </div>
        </div>
        <div className={styles['faq1']}>
          <div className={styles['question-container1']}>
            <span className={styles['question1']}>{props.question1}</span>
          </div>
          <div className={styles['answer-container1']}>
            <span
              className={` ${styles['answer2']} ${projectStyles['card-Text']} `}
            >
              {props.answer2}
            </span>
            <span className={projectStyles['card-Text']}>{props.answer3}</span>
          </div>
        </div>
        <div className={styles['faq2']}>
          <div className={styles['question-container2']}>
            <span className={styles['question2']}>{props.question2}</span>
          </div>
          <div className={styles['answer-container2']}>
            <span
              className={` ${styles['answer4']} ${projectStyles['card-Text']} `}
            >
              {props.answer4}
            </span>
            <span className={projectStyles['card-Text']}>{props.answer5}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Faqs.defaultProps = {
  answer1:
    'Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  answer3:
    'Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.',
  heading: 'Check the most common questions',
  answer2:
    'Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  question2: 'Here you would write a frequently asked question?',
  answer:
    'Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet. Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  answer5:
    'Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  question1: 'Here you would write a frequently asked question?',
  answer4:
    'Here you would give the answer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
  question: 'Here you would write a frequently asked question?',
}

Faqs.propTypes = {
  answer1: PropTypes.string,
  answer3: PropTypes.string,
  heading: PropTypes.string,
  answer2: PropTypes.string,
  question2: PropTypes.string,
  answer: PropTypes.string,
  answer5: PropTypes.string,
  question1: PropTypes.string,
  answer4: PropTypes.string,
  question: PropTypes.string,
}

export default Faqs
