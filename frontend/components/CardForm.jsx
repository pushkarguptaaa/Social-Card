import { useState } from "react"

export const CardForm = (({addCard}) => {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [socialMedia, setSocialMedia] = useState([{platform: "", link: ""}])
    const [interests, setInterests] = useState([""])

    const handleSubmit = ((e) => {
        e.preventDefault()
        const newCard = {name, description, socialMedia, interests}
        addCard(newCard)
        setName("")
        setDescription("")
        setSocialMedia([{platform:"", link:""}])
        setInterests([""])
    })

    const handleSocialMedia = ((index, field, value) => {
        const updatedSocialMedia = [...socialMedia]
        updatedSocialMedia[index][field] = value
        setSocialMedia(updatedSocialMedia)
    })

    const handleInterest = (index, value) => {
        const updatedInterests = [...interests]
        updatedInterests[index] = value
        setInterests(updatedInterests)
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} required/>
            </div>

            <div>
                <label>Description: </label>
                <input type="text" value={description} onChange={e => setDescription(e.target.value)} required/>
            </div>

            <div>
                <label>Social Media: </label>
                {socialMedia.map((handle, index) => (
                    <div key={index}>
                        <input type="text" value={handle.platform} placeholder="Platform" onChange={e => handleSocialMedia(index, "platform", e.target.value)} required/>

                        <input type="text" value={handle.link} placeholder="Link" onChange={e => handleSocialMedia(index, "link", e.target.value)} required/>
                    </div>
                ))}

                <button type="button" onClick={ () => setSocialMedia([...socialMedia, {platform: "", link: ""}])}>
                    Add Social Media Handle
                </button>
            </div>

            <div>
                <label>Interests: </label>
                {interests.map((interest, index) => (
                    <input key={index} type="text" value={interest} placeholder="Interest" onChange={e => handleInterest(index, e.target.value)}/>
                ))}

                <button type="button" onClick={() => setInterests([...interests, ""])}>
                    Add Interest
                </button>
            </div>

            <button type="submit">Add Card</button>
        </form>
    )
})