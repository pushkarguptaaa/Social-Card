import { useEffect, useState } from "react"
import { CardForm } from "../components/CardForm"
import { Card } from "../components/Card"

function App() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/cards")
    .then(async res => {
      const json = await res.json()
      console.log(json)
      setCards(json)
    })
    .catch((error) => console.error("Error fetching cards:", error))
  },[])

  const addCard = ((newCard) => {
    fetch("http://localhost:3000/cards",{
      method: "POST",
      body: JSON.stringify(newCard),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(async res => {
      const addedCard = await res.json()
      setCards([...cards, addedCard])
    })
    .catch((error) => console.error('Error adding card:', error))

  })

  return (
    <div>
      <h1>Card Management App</h1>
      <CardForm addCard = {addCard}/>

      {cards.map((card) => (
        <Card name={card.name} description={card.description} socialMedia={card.socialMedia} interests={card.interests}/>
      ))}
    </div>
  )
}

export default App
