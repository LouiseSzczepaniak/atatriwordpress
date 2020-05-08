import { PLUGIN_NAME } from '../../constants'

const { wp } = window
const { registerBlockType } = wp.blocks
const { __ } = wp.i18n
const { PlainText, MediaUpload, InspectorControls, MediaPlaceholder, InnerBlocks } = wp.blockEditor
const { Button, BaseControl, ToggleControl } = wp.components

const BLOCK_NAME = `${PLUGIN_NAME}/home-block3`

registerBlockType(BLOCK_NAME, {
  title: __('Home block 3'),
  description: __('Another example with text and image'),
  icon: 'media-document',
  category: 'common',
  attributes: {
    title: {
      type: 'string'
    },
    descr: {
      type: 'string'
    },
    name: {
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
    const { attributes: { title, descr, name, imageUrl, imageId, switchDisplay }, setAttributes, className } = props
    const classNameContainer = className + '__container'
    return (
      <>
        <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Titre')}
          className={className}
          value={title}
          onChange={(title) => {
            setAttributes({ title })
          }}
        />

        <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Description')}
          className={className}
          value={descr}
          onChange={(descr) => {
            setAttributes({ descr })
          }}
        />

        <PlainText
          keepPlaceholderOnFocus='true'
          placeholder={__('Nom client')}
          className={className}
          value={name}
          onChange={(name) => {
            setAttributes({ name })
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

  save: ({ attributes: { title, descr, name, imageUrl } }) => (
    <>
        <div class="section-7">
      <div class="title"><h1>{title}</h1>
          <div class="rectangle-bleu"></div>
          </div>
          <div class="client">
          <img src={imageUrl} class="img-client"></img>
          <div class="txt-client"><p>{descr}</p>
              <h2>{name}</h2>
              <div class="google"></div></div></div>
      </div>
    </>
  )
})
