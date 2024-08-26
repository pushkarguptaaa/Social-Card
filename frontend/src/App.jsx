import { Card } from "../components/Card"

function App() {

  const people = [
    {
      name: "Pushkar Gupta",
      description: "Software Developer at XYZ",
      socialMedia: [
        {
          platform: "LinkedIn",
          link: "https://linkedin.com/in/pushkarguptaaa"
        },
        {
          platform: "Instagram",
          link: "https://instagram.com/pushkarguptamusic"
        },
      ],
      interests: ['Coding', 'Singing']
    },

    {
      name: "Rahul Gupta",
      description: "Software Developer at XYZ",
      socialMedia: [
        {
          platform: "LinkedIn",
          link: "https://linkedin.com/in/rahul"
        },
        {
          platform: "Instagram",
          link: "https://instagram.com/rahul"
        },
      ],
      interests: ['Coding', 'Dancing']
    },

  ]

  return (
    <div>
      {people.map(person => (
        <Card 
        name = {person.name}
        description = {person.description}
        socialMedia= {person.socialMedia}
        interests = {person.interests}
        />
      ))}
    </div>
  )
}

export default App
