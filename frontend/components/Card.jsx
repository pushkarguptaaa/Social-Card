
export const Card = ({card}) => {
    return (
        <div style={cardStyle}>
            <h2>{card.name}</h2>
            <p>{card.description}</p>

            <div style={socialMediaStyle}>
                {card.socialMedia.map(handle =>(
                    <a href = {handle.link} target="_blank" rel="noopener noreferrer">
                        {handle.platform}
                    </a>
                ))}
            </div>

            <div>
                <h3>Interests:</h3>
                <ul>
                    {card.interests.map(interest => (
                        <li>{interest}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    maxWidth: '300px',
  };

  const socialMediaStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '8px',
  };