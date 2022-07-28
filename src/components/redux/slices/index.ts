import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GAME_FIELD, PATH_DIRECTIONS } from '../../consts';
import { IGameField } from '../../interfaces';
import { AppThunk, RootState } from './../store';

export interface LabyrinthState {
    labyrinth: number;
    gameField: IGameField[]
    start: number
    finish: number
    paths: string[] 
}

const initialState: LabyrinthState = {
    labyrinth: 0,
    gameField: GAME_FIELD,
    start: Math.trunc(Math.random()*9)+1,
    finish: 1,
    paths: []
};


export const labyrinthSlice = createSlice({
  name: 'labyrinth',
  initialState,
  reducers: {
    updateGameField: (state, action: PayloadAction<number>) => {
        let start = Math.trunc(Math.random()*9)+1
        if(start === state.start) start = 10-start
        state.start = start
            let newGamefields = GAME_FIELD.map((gamefield)=> {
                if(gamefield.field === action.payload) {
                    if(state.finish === action.payload) return {...gamefield, addContent: 'like'}
                    else return {...gamefield, addContent: 'dislike'}}
                if(gamefield.field === state.finish) {
                    return {...gamefield, addContent: 'finish'}
                }
                return gamefield
            })
        state.gameField = newGamefields
    },
    resetPath: (state) => {
        state.paths = []
    },
    createNewPath: (state) => {
        let newPaths: string[] = []
        let finish = state.start
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
            if(state.start === gamefield.field) {
                return {...gamefield, addContent: 'start'}
            }
            return gamefield
        })
        state.finish = finish
        state.gameField = newGamefields
        state.paths = newPaths
    },
   
  },
});


export const asyncCreateNewPath = (): AppThunk => 
  (dispatch) => {
    setTimeout(()=>  dispatch(createNewPath()), 1000 )
}

export const { updateGameField, createNewPath, resetPath } = labyrinthSlice.actions;

export const selectlabyrinth = (state: RootState) => state.labyrinth;



export default labyrinthSlice.reducer;


