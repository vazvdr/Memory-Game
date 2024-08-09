document.addEventListener('DOMContentLoaded', () => {
  //opções de cartas
  const cards = [
    {
      name: 'anthrax',
      img: 'images/anthrax.png'
    },
    {
      name: 'kreator',
      img: 'images/kreator.jpg'
    },
    {
      name: 'lamb-of-god',
      img: 'images/lambofgod.jpg'
    },
    {
      name: 'metallica',
      img: 'images/metallica.png'
    },
    {
      name: 'sepultura',
      img: 'images/sepultura.jpg'
    },
    {
      name: 'slayer',
      img: 'images/slayer.jpg'
    },
    {
      name: 'testament',
      img: 'images/Testament.jpg'
    },
    {
      name: 'anthrax',
      img: 'images/anthrax.png'
    },
    {
      name: 'kreator',
      img: 'images/kreator.jpg'
    },
    {
      name: 'lamb-of-god',
      img: 'images/lambofgod.jpg'
    },
    {
      name: 'metallica',
      img: 'images/metallica.png'
    },
    {
      name: 'sepultura',
      img: 'images/sepultura.jpg'
    },
    {
      name: 'slayer',
      img: 'images/slayer.jpg'
    },
    {
      name: 'testament',
      img: 'images/Testament.jpg'
    }    
  ]

  //embaralhar todas as cartas
  cards.sort(() => 0.5 - Math.random())

  //recupaerar elementos
  const board = document.querySelector('.board')
  const resultView = document.querySelector('#result')
  let cardsChosen = [] //cartas escolhidas
  let cardsChosenId = [] //ids das cartas escolhidas para caso de click na mesma imagem
  let cardsWon = [] //cartas combinadas

  //criar o quadro de cartas
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/boardBlack.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
    }
  }

  //checagem de combinações
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    //verificar clique na mesma imagem 
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/boardBlack.png')
      cards[optionTwoId].setAttribute('src', 'images/boardBlack.png')
      alert('Você clicou na mesma imagem')
    }
    //verificar combinação se click em imagens diferentes
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou uma combinação')
      cards[optionOneId].setAttribute('src', 'images/checkBlack.png')
      cards[optionTwoId].setAttribute('src', 'images/checkBlack.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/boardBlack.png')
      cards[optionTwoId].setAttribute('src', 'images/boardBlack.png')
      alert('Errou, tente novamente')
    }
    cardsChosen = []
    cardsChosenId = []
    //mostrar placar
    resultView.textContent = 'Pares Encontrados: '+cardsWon.length
    if  (cardsWon.length === cards.length/2) {
      resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas!'
    }
  }

  //virar as cartas
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
