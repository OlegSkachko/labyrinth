export interface IFirstModal {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IInputCheckbox {
    target: {
        checked: boolean
    }
}