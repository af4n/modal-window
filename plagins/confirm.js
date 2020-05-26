$.confirm = function(options) {
  return new Promise((resolve, reject) => {
    const modal = $.modal({
      title: options.title,
      width: '400px',
      closable: false,
      content: options.content,
      onClose() {
        modal.destroy()
      },
      footerButtons: [
        {text: 'Отменить', type: 'secondary', handler() {
          console.log('Primary btn clicked')
          modal.close()
          reject()
        }},
        {text: 'Удалить', type: 'danger', handler() {
          console.log('Primary btn clicked')
          modal.close()
          resolve()
        }}
      ]
    })

    setTimeout(() => modal.open(), 100)
  })
} 