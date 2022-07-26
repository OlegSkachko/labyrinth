import React, {useState} from 'react'
import FirstModal from '../ModalWindows/FirstModal'
import './index.css'

const MainPage = () => {
    const [path, setPath] = useState<string[]>([])
    const [openFirstTime,setOpenFirstTime] = useState<boolean>(true)

    const generateNewPath = () => {
        let newPath = []
        // for(let i)
    }
  return (
    <div className='main-container'>
        <FirstModal open={openFirstTime} setOpen={setOpenFirstTime}/>
        <div className='title-container'>
            <div className='title-decoration'></div>
            <div className='title'>Лабиринт</div>
        </div>

        <div className='game'>
            <div/>
            <div className='game-field-coord'>A</div>
            <div className='game-field-coord'>B</div>
            <div className='game-field-coord'>C</div>
            <div className='game-field-coord'>1</div>
            <div className='game-field'></div>
            <div className='game-field'></div>
            <div className='game-field'></div>
            <div className='game-field-coord'>2</div>
            <div className='game-field'></div>
            <div className='game-field'></div>
            <div className='game-field'></div>
            <div className='game-field-coord'>3</div>
            <div className='game-field'></div>
            <div className='game-field'></div>
            <div className='game-field'></div>
        </div>

        <div className='path-container'>
            <div className='path right'></div>
            <div className='path left'></div>
            <div className='path up'></div>
            <div className='path down'></div>
            <div className='path right'></div>
            <div className='path left'></div>
            <div className='path up'></div>
            <div className='path down'></div>
            <div className='path right'></div>
            <div className='path left'></div>
        </div>

    </div>

  
  )
}

export default MainPage
