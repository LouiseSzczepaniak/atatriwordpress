import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText, MediaPlaceholder } = wp.blockEditor
const { Button } = wp.components

const BLOCK_NAME = `${PLUGIN_NAME}/home-block4`

registerBlockType(BLOCK_NAME, {
  title: __('Home block 4'),
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

<MediaPlaceholder
                  onSelect={(media) => {
                    const newContent = [...content]
                    newContent[index].imageUrl = media.url
                    newContent[index].imageId = media.id
                    setAttributes({ content: newContent })
                  }}
                  allowedTypes={['image']}
                  multiple={false}
                  labels={{ title: 'The Image' }}
                  value={{ id: value.imageId }}
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
        <div class="section-8"><h1>Le Blog</h1>
          
        <div class="articles">
        {content.map((item, index) => {
          return (
            <div class='article' key={`example-${index}`}>
              
             <img class="img-article" src={item.imageUrl}></img>
    <h2>{item.title}</h2>
    <p>{item.date}</p>
    </div>
          )
        })}
      </div>
      <input class="input-button-3 center" value="Plus d'articles"/>
      </div>
    )
  }
})






