import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText, MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks } = wp.blockEditor
const { Button, BaseControl, ToggleControl } = wp.components

const BLOCK_NAME = `${PLUGIN_NAME}/home-block2`

registerBlockType(BLOCK_NAME, {
  title: __('Home block 2'),
  description: __('Another example with text and image'),
  icon: 'media-document',
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
    },
    linkname: {
      type: 'string'
    },
    link: {
      type: 'string'
    },
    imageUrl: {
      type: 'string'
    },
    imageId: {
      type: 'integer'
    },
    switchDisplay: {
      type: 'boolean',
      default: false
    }
  },

  edit: props => {
    const { attributes: { title1, title2, text, linkname, link, imageUrl, imageId, switchDisplay }, setAttributes, className } = props
    const classNameContainer = className + '__container'
    return (
      <>
      <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Petit titre')}
          className={className}
          value={title1}
          onChange={(title1) => {
            setAttributes({ title1 })
          }}
        />
        <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Grand titre')}
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
          <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Texte du bouton')}
          className={className}
          value={linkname}
          onChange={(linkname) => {
            setAttributes({ linkname })
          }}
        />

<PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Lien du bouton')}
          className={className}
          value={link}
          onChange={(link) => {
            setAttributes({ link })
          }}
        />
        <div className={classNameContainer}>
          <div className={className + '__image'}>
            {imageUrl ? (
              <img src={imageUrl} alt='' />
            ) : (
              <MediaPlaceholder
                onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
                allowedTypes={['image']}
                multiple={false}
                labels={{ title: 'The Image' }}
              />
            )}
          </div>
          <div className={className + '__text'}>
            <InnerBlocks allowedBlocks={['core/paragraph']} />
          </div>
        </div>
        <InspectorControls>
          <BaseControl>
            <MediaUpload
              onSelect={(media) => setAttributes({ imageUrl: media.url, imageId: media.id })}
              type='image'
              value={imageId}
              className='file'
              render={({ open }) => (
                <Button
                  className={!imageUrl && 'button button-large'}
                  onClick={open}
                >
                  {
                    imageUrl ? (
                      <div className='inspector-controls-flex'>
                        <img className='inspector-controls-flex-img' src={imageUrl} alt='' />
                        <p>{__('Replace image')}</p>
                      </div>
                    ) : (
                      __('Select image')
                    )
                  }
                </Button>
              )}
            />
          </BaseControl>
          <BaseControl>
            <ToggleControl
              label={__("Alterner l'image et le texte")}
              checked={switchDisplay}
              onChange={(switchDisplay) => { setAttributes({ switchDisplay }) }}
            />
          </BaseControl>
        </InspectorControls>

      
      </>
    )
  },

  save: ({ attributes: { title1, title2, text, linkname, link, imageUrl } }) => (
    <>
      <div class="section-3">
<div class="text-3"><h1>{title1}</h1>
<h2>{title2}</h2>
<p>{text}</p>
<a href={link}><input type="button" class="input-button-2" value={linkname}/></a>
</div>
<img src={imageUrl} class="img-1"></img>
</div>
    </>
  )
})
