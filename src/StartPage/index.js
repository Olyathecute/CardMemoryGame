import { useState } from 'react'
import Chooser from './Chooser'
import { boardImage, boardSizes } from '../data'
import './StartPage.css'

const startSettings = { size: 'small', images: 'animals' }

const selectPreferences = [
  {
    title: 'Choose board size',
    items: boardSizes,
    preferenceName: 'size',
  },
  {
    title: 'Choose board image',
    items: boardImage,
    preferenceName: 'images',
  },
]

function StartPage({ startGame }) {
  const [preferences, setPreferences] = useState({ ...startSettings })

  return (
    <div className='preferences'>
      <form>
        {selectPreferences.map(({ title, items, preferenceName }, index) => (
          <Chooser key={index} title={title} chooseValue={(value) => setPreferences({ ...preferences, [preferenceName]: value })} items={items} />
        ))}

        <div className='block'>
          <input
            type='submit'
            className='btn'
            onClick={(event) => {
              event.preventDefault()
              startGame(preferences)
            }}
            value='Start New Game'
          />
        </div>
      </form>
    </div>
  )
}

export default StartPage
