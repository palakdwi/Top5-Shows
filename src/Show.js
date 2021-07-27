import React from 'react'
import Card from './components/Card'

const Show = () => {
    const shows = [
        {
            id: 1,
            name: 'Friends',
            img: "https://i.pinimg.com/736x/a0/70/b6/a070b684e47e4d5c8a94302b269e574a.jpg",
            link: 'https://www.netflix.com/title/70153404'
        },
        {
            id: 2,
            name: 'Money Heist',
            img: 'https://wallpapercave.com/wp/wp6201564.jpg',
            link: 'https://www.netflix.com/title/80192098'
        },
        {
            id: 3,
            name: 'Dark',
            img: 'https://wallpapercave.com/wp/wp4056407.jpg',
            link: 'https://www.netflix.com/title/80100172'
        },
        {
            id: 4,
            name: 'This is Us',
            img: 'https://picfiles.alphacoders.com/256/thumb-256432.jpg',
            link: ''
        },
        {
            id: 5,
            name: 'Sex Education',
            img: 'https://wallpapercave.com/wp/wp5152709.png',
            link: 'https://www.netflix.com/title/80197526'
        }
    ]

    const showList = shows.map(show => <Card show={show} /> )
    return (
        <div>
            {showList}
        </div>
    )

}

export default Show
