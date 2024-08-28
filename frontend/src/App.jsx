import { useEffect, useState } from "react"
import { CardForm } from "../components/CardForm"
import { CardList } from "../components/CardList"

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

  const updateCard = ((updatedCard) => {
    fetch(`http://localhost:3000/cards/${updatedCard._id}`,{
      method: "PUT",
      body: JSON.stringify(updatedCard),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => async () => {
      const newCard = res.json()
      setCards(cards.map(card => newCard._id === card._id ? newCard : card))
    })
    .catch((error) => console.error('Error updating card:', error))
  })

  const deleteCard = ((id) => {
    fetch(`http://localhost:3000/cards/${id}`,{
      method: "DELETE"
    })
    .then(()=>{
      setCards(cards.filter(card => card._id !== id))
    })
    .catch((error) => console.error('Error deleting card:', error))
  })

  return (
    <div>
      <h1>Card Management App</h1>
      <CardForm addCard={addCard}/>
      <CardList cards={cards} updateCard={updateCard} deleteCard={deleteCard}/>
    </div>
  )
}

export default App
