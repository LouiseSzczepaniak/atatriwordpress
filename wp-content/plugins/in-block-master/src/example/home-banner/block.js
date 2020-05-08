import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText, MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks } = wp.blockEditor
const { Button, BaseControl, ToggleControl } = wp.components

const BLOCK_NAME = `${PLUGIN_NAME}/home-banner`

registerBlockType(BLOCK_NAME, {
  title: __('Home banner'),
  description: __('Another example with text and image'),
  icon: 'media-document',
  category: 'common',
  attributes: {
    title: {
      type: 'string'
    },
    subtitle: {
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
    const { attributes: { title, subtitle, imageUrl, imageId, switchDisplay }, setAttributes, className } = props
    const classNameContainer = className + '__container'
    return (
      <>
      <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Texte')}
          className={className}
          value={title}
          onChange={(title) => {
            setAttributes({ title })
          }}
        />
        <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Texte')}
          className={className}
          value={subtitle}
          onChange={(subtitle) => {
            setAttributes({ subtitle })
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

  save: ({ attributes: { title, subtitle, imageUrl } }) => (
    <>
      <div class="section-1">
        <div class="content">
            <h1>{title}</h1>
            <p>{subtitle}</p>
            
            <input type="email" class="input-email" placeholder="Votre email"/><input type="button" class="input-button" value="Demander une démo"/>
        </div>
        <img src={imageUrl} class="img-1"></img>
      </div>   
      <div class="arrow"></div>
    </>
  )
})
