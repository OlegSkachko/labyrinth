export interface IFirstModal {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IInputCheckbox {
    target: {
        checked: boolean
    }
}

export interface IGameField {
    id: number;
    className: string;
    content: string;
    field: number;
    addContent?: string
}

type DirectionTypes = "up" | "right" | "left"| "down"

interface IDirections {
    path: DirectionTypes
    field: number
}

export interface IPathDirections {
    field: number;
    directions:  IDirections[]
}