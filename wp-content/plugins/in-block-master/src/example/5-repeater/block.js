import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText } = wp.blockEditor
const { Button } = wp.components

const BLOCK_NAME = `${PLUGIN_NAME}/repeater-block`

registerBlockType(BLOCK_NAME, {
  title: __('Repeater block'),
  description: __('Example repeater block!'),
  icon: 'nametag',
  category: 'common',
  attributes: {
    content: {
      type: 'array'
    },
    descr: {
      type: 'array'
    },
    
  },

  edit: props => {
    const { attributes: { content = [], descr = [] }, setAttributes, className } = props
    return (
      <>
        {content.map((value, index) => {
          return (
            <>
              <PlainText
                keepplaceholderonfocus
                placeholder={__('Titre du poste')}
                value={value.title}
                onChange={(title) => {
                  const newContent = [...content]
                  newContent[index].title = title
                  setAttributes({ content: newContent })
                }}
              />
                             <PlainText
                keepplaceholderonfocus
                placeholder={__('Description')}
                value={value.descr}
                onChange={(descr) => {
                  const newContent = [...content]
                  newContent[index].descr= descr
                  setAttributes({ content: newContent })
                }}
              />


              
              <Button
                onClick={() => {
                  const newContent = [
                    ...content.slice(0, index),
                    ...content.slice(index + 1)
                  ]
                  setAttributes({ content: newContent })
                }}
              >{__('Supprimer')}
              </Button>
            </>
          )
        })}
        <Button
          onClick={() => {
            const newContent = [...content, {}]
            setAttributes({ content: newContent })
          }}
        >{__('Ajouter')}
        </Button>
      </>


    )
  },

 
  save: props => {
    const { attributes: { content } } = props
    return (
      <div class="section-6">
<h1>Nos solutions sont parfaites pour</h1>
<div class="metiers">
        {content.map((item, index) => {
          return (
            <div class='metier' key={`example-${index}`}>
              
              <h2>{item.title}</h2>
              <p>{item.descr}</p>
            </div>
          )
        })}
      </div>
      </div>
    )
  }
})



