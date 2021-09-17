export interface ITombola {
    id?: number,
    title_first: string,
    title_second: string,
    ncartelle: number,
}

export interface ITombolaForm {
    handleSubmitForm?: (data: ITombola) => void,
    setForm: any,
    form: ITombolaFormState
}

export interface ITombolaFormState {
    isDirty: boolean,
    isValid: boolean,
}