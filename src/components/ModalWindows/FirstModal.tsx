import React, { FC, useState} from 'react'
import { IFirstModal } from '../interfaces'
import './index.css'

const FirstModal: FC<IFirstModal> = ({open, setOpen}: IFirstModal) => {
    const dontShowAgain = Boolean(localStorage.getItem('dontShowAgain')) || false
    const [isShowAgain, setIsShowAgain] = useState<boolean>(dontShowAgain)

    const handleClose = (e:React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
        setOpen(false)
    }

    const handleShowAgain = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.stopPropagation()
        let value = e.target.checked
        setIsShowAgain(!value)
        localStorage.setItem('dontShowAgain', value.toString())
    }

  return (
    <>
        { (open && !isShowAgain) &&
            <div className='firstmodal-container' onClick={handleClose}>
                <div className='firstmodal' onClick={(e)=>  e.stopPropagation()}>
                    <span className='firstmodal-title'>Вот, что тебя ждет в игре:</span>
                    <span className='firstmodal-subtitle'>Двигайся в лабиринте по стрелкам.</span>
                    <span className='firstmodal-about'>Уровень сложности: 1</span>
                    <span className='firstmodal-about'>Скорость: 1</span>
                    <span className='firstmodal-about'>Кол-во ходов: 10</span>
                    <div className='firstmodal-labyrinth'/>
                    <div className='firstmodal-flex'>
                        <input type="checkbox" onChange={handleShowAgain}/>
                        <span className='firstmodal-about_checkbox'>Не показывать</span>
                    </div>
                    <button className='firstmodal-button'  onClick={handleClose}>Понятно</button>
                </div>
            </div>
        }
    </>
  )
}

export default FirstModal