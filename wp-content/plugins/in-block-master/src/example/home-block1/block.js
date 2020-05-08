import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor

const BLOCK_NAME = `${PLUGIN_NAME}/home-block1`

registerBlockType(BLOCK_NAME, {
  title: __('Home block 1'),
  description: __('Example block!'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    title1: {
      type: 'string'
    },
    title2: {
        type: 'string'
      },
      text: {
        type: 'string'
      }
  },

  edit: props => {
    const { attributes: { title1, title2, text }, setAttributes, className } = props
    return (
      <>
        <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Titre principal')}
          className={className}
          value={title1}
          onChange={(title1) => {
            setAttributes({ title1 })
          }}
        />
        <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Titre secondaire')}
          className={className}
          value={title2}
          onChange={(title2) => {
            setAttributes({ title2 })
          }}
        />
        <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Texte')}
          className={className}
          value={text}
          onChange={(text) => {
            setAttributes({ text })
          }}
        />
      </>
    )
  },

  save: ({ attributes: { title1, title2, text } }) => 
  <div class="section-2">
<div class="content-2">
<div class="title">
<h1>{title1}</h1>
<div class="rectangle-bleu"></div>
</div>
<div class="text"><h1>{title2}</h1>
<p>{text}</p>
</div></div>
</div>
})
