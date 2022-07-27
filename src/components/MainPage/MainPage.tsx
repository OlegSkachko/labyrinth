import React, {useEffect, useState} from 'react'
import { GAME_FIELD } from '../consts'
import { IGameField } from '../interfaces'
import FirstModal from '../ModalWindows/FirstModal'
import './index.css'

const MainPage = () => {
    const [paths, setPaths] = useState<string[]>([])
    const [openFirstTime,setOpenFirstTime] = useState<boolean>(true)
    const [startPoint, setStartPoint] = useState<number>(1)
    const [answer, setAnswer] = useState<boolean>(false)
    const [gameFields,setGameFields] =useState<IGameField[]>(GAME_FIELD)

    useEffect(()=> generateNewPath(),[])

    const generateNewPath = () => {
        let newPaths: string[] = []
        let start = Math.trunc(Math.random()*9)+1
        setStartPoint(start)
        let pathVariables = ['right', 'left', 'up', 'down']
        while(newPaths.length < 10) {
            let path = Math.trunc(Math.random()*4)+1
            if(pathVariables[path] !== undefined) {
                newPaths.push(pathVariables[path])
            }
        }
        setPaths(newPaths)
    }

    const handleGameField = (field:number) => {
        setAnswer(true)
        let finishPoint = 5
        let newGamefields = GAME_FIELD.map((gamefield)=> {
                if(gamefield.field === field) {
                    if(finishPoint === field) return {...gamefield, addContent: 'like'}
                    else return {...gamefield, addContent: 'dislike'}
                }
                if(gamefield.field === finishPoint) {
                    return {...gamefield, addContent: 'finish'}
                }
                return gamefield
            })
        setGameFields(newGamefields)
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
            { gameFields.map((gamefield: IGameField)=> 
                <div 
                    key={gamefield.id}
                    className={gamefield.className}
                    onClick={()=> handleGameField(gamefield.field)}
                >
                    { gamefield.content }
                    { answer && <div className={gamefield.addContent}/>}
                    { (startPoint === gamefield.field) && !answer && <div className='start'/>}
                </div>
            )}
        </div>
        <div className='path-container'>
            { paths.map((path, index) => 
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
