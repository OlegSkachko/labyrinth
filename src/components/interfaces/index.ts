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