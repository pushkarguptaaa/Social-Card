import { useState } from "react"
import { Card } from "./Card"

export const CardList = (({cards, updateCard, deleteCard})=> {
    const [editCardId, setEditCardId] = useState(null)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [socialMedia, setSocialMedia] = useState([{platform:"", link: ""}])
    const [interests, setInterests] = useState([""])

    const handleUpdate= (() => {
        const updatedCard = {_id: editCardId, name, description, socialMedia, interests}
        updateCard(updatedCard)
        setEditCardId(null)
    })

    const handleEdit = ((card) => {
        setEditCardId(card._id)
        setName(card.name)
        setDescription(card.description)
        setSocialMedia(card.socialMedia)
        setInterests(card.interests)
    })

    return(
        <div>
            {cards.map((card)=>(
                <div key={card._id}>
                    {editCardId == card._id ? (
                        <div>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} />
                            <textarea value={description} onChange={e => setDescription(e.target.value)} />

                            {socialMedia.map((handle, index) => (
                                <div key={index}>
                                    <input type="text" value={handle.platform} 
                                    onChange={e => (setSocialMedia(handles => (
                                        handles.map((h,i) => (
                                            i == index ? {...h, platform: e.target.value} : h
                                        ))
                                    )))}/>

                                    <input type="text" value={handle.link} 
                                    onChange={e => (setSocialMedia(handles => (
                                        handles.map((h, i) => (
                                            i == index ? {...h, link: e.target.value} : h
                                        ))
                                    )))}/>
                                </div>
                            ))}

                            {interests.map((interest, index) => (
                                <input key={index} type="text" value={interest} 
                                onChange={e => (setInterests(interests => (
                                    interests.map((int, i) => (
                                        i == index ? e.target.value : int
                                    ))
                                )))}/>
                            ))}

                            <button onClick={handleUpdate}>Update Card</button>
                        </div>
                    ) : (
                        <Card card={card}/>
                    )}
                    <button onClick={() => deleteCard(card._id)}>Delete Card</button>
                    <button onClick={() => handleEdit(card)}>Edit Card</button>
                </div>
            ))}
        </div>
    )
})