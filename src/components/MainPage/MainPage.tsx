import React, { FC, useEffect, useState} from 'react'
import { IGameField } from '../interfaces'
import FirstModal from '../ModalWindows/FirstModal'
import { useAppDispatch, useAppSelector } from '../redux/hooks/reduxHooks'
import { asyncCreateNewPath, resetPath, selectlabyrinth, updateGameField } from '../redux/slices'
import './index.css'

const MainPage: FC = () => {
    const [openFirstTime,setOpenFirstTime] = useState<boolean>(true)
    const labyrinth = useAppSelector(selectlabyrinth);
    const dispatch = useAppDispatch()

    // eslint-disable-next-line 
    useEffect(()=> generateNewPath(),[])

    const generateNewPath = () => {
        dispatch(resetPath())
        dispatch(asyncCreateNewPath())
    }

    const handleGameField = (field:number) => {
        dispatch(updateGameField(field))
        generateNewPath()
    }

  return (
    <div className='main-container'>
        <FirstModal open={openFirstTime} setOpen={setOpenFirstTime}/>
        <div className='title-container'>
            <div className='title-decoration'></div>
            <div className='title'>Лабиринт</div>
        </div>
        <div className='game'>
            { labyrinth.gameField.map((gamefield: IGameField)=> 
                <div 
                    key={gamefield.id}
                    className={gamefield.className}
                    onClick={()=> handleGameField(gamefield.field)}
                >
                    { gamefield.content }
                    <div className={gamefield.addContent}/>
                </div>
            )}
        </div>
        <div className='path-container'>
            { labyrinth.paths.map((path, index) => 
                <div 
                    key={index} 
                    className={`path ${path}`}
                    style={{animationDuration: `${(0.5+0.2*index).toFixed(1)}s`}}
                />  
            )}
        </div>

    </div>

  
  )
}

export default MainPage
