const fruits = [
  {id: 1, title: 'Яблоки', price: 20, img: 'https://lifeglobe.net/x/entry/6259/1a-0.jpg'},
  {id: 1, title: 'Апельсины', price: 30, img: 'https://bipbap.ru/wp-content/uploads/2018/07/apelsini.jpg'},
  {id: 1, title: 'Манго', price: 40, img: 'https://st.depositphotos.com/3260227/4344/i/950/depositphotos_43441807-stock-photo-mango-fruit.jpg'}
]

const modal = $.modal({
  title: 'Modal',
  closable: true,
  content: `
    <p>Modal is working</p>
    <p>Modal text</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      console.log('Primary btn clicked')
      modal.close()
    }},
    {text: 'Cencel', type: 'danger', handler() {
      console.log('Danger btn clicked')
      modal.close()
    }}
  ]
})