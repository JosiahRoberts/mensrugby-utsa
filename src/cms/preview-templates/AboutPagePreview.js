import React from 'react'
import PropTypes from 'prop-types'
import { SimplePageTemplate } from '../../templates/simple-page'

const AboutPagePreview = ({ entry, widgetFor }) => (
  <SimplePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
