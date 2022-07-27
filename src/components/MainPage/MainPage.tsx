import React, { useEffect, useState} from 'react'
import { GAME_FIELD, PATH_DIRECTIONS } from '../consts'
import { IGameField } from '../interfaces'
import FirstModal from '../ModalWindows/FirstModal'
import './index.css'

const MainPage = () => {
    const firstStart = Math.trunc(Math.random()*9)+1
    const [paths, setPaths] = useState<string[]>([])
    const [openFirstTime,setOpenFirstTime] = useState<boolean>(true)
    const [startPoint, setStartPoint] = useState<number>(firstStart)
    const [finishPoint, setFinishPoint] = useState<number>(1)
    const [gameFields,setGameFields] =useState<IGameField[]>(GAME_FIELD)
    // eslint-disable-next-line 
    useEffect(()=> generateNewPath(),[])

    const generateNewPath = () => {
            setPaths([])
            let newPaths: string[] = []
            let finish = startPoint
            while(newPaths.length < 10) {
            const curDirections = PATH_DIRECTIONS[finish-1]
            let path = Math.trunc(Math.random()*4)
            if(path!== undefined && curDirections?.directions[path] !== undefined) {
                const newDir = curDirections?.directions[path] 
                finish = newDir.field
                newPaths.push(newDir.path)
            }
        }
            let newGamefields = GAME_FIELD.map((gamefield)=> {
                if(startPoint === gamefield.field) {
                    return {...gamefield, addContent: 'start'}
                }
                return gamefield
            })
           
        setTimeout(()=>{
            setFinishPoint(finish)
            setGameFields(newGamefields)
            setPaths(newPaths)
        },1000)   
    }

    const handleGameField = (field:number) => {
        let start = Math.trunc(Math.random()*9)+1
        if(start === startPoint) start = 10-start
        setStartPoint(start) 
            let newGamefields = GAME_FIELD.map((gamefield)=> {
                if(gamefield.field === field) {
                    if(finishPoint === field) return {...gamefield, addContent: 'like'}
                    else return {...gamefield, addContent: 'dislike'}}
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
                    <div className={gamefield.addContent}/>
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
