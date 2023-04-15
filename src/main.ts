/* Startup script to wait until the Miro board becomes available */
const startup = () => {
  if (typeof miro !== 'undefined' && miro.board) {
    console.log('Miro board loaded')
    clearInterval(interval)

    main()
  } else {
    console.log('Waiting for Miro initialization...')
  }
}
const interval = setInterval(startup, 1000)

/* Main routine */
const main = () => {
  addButton()
}

/* Add a button */
const addButton = () => {
  const button = document.createElement('button')

  button.textContent = 'Put a Star!!'
  button.style.position = 'absolute'
  button.style.right = '100px'
  button.style.bottom = '100px'
  button.style.fontSize = '16px'
  button.style.background = '#4262FF'
  button.style.color = '#FFFFFF'
  button.style.padding = '10px'
  button.style.borderRadius = '4px'

  button.addEventListener('click', putStar)

  document.body.appendChild(button)
}

/* Put a star */
const putStar = async () => {
  const shape = await miro.board.createShape({
    content: '<p>This is a very yellow star shape.</p>',
    shape: 'star',
    style: {
      fillColor: '#FEFF45'
    },
    x: 3000,
    y: 4500,
    width: 280,
    height: 280
  })

  console.log(shape)

  await miro.board.viewport.zoomTo(shape)
}
