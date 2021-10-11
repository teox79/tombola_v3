export interface ICartellaFormData {
    tombola_id?: number,
    ncartelle: number,
    giocatore: string,
    //totaleCartelle: number,
}

export interface ICartelleForm {
    handleSubmitForm?: (data: ICartellaFormData) => void,
    setForm: any,
    form: ICartelleFormState
}

export interface ICartelleFormState {
    isDirty: boolean,
    isValid: boolean,
}

export interface ICartella {
    id?: number,
    tombola_id?: number,
    ncartella: number,
    giocatore: string,
    righe: {
        "1": IRiga,
        "2": IRiga,
        "3": IRiga
    }
}

export interface ICartelle {
    cartelle: [ICartella]
}

export interface IRiga {
    n1: string,
    n2: string,
    n3: string,
    n4: string,
    n5: string,
    n6: string,
    n7: string,
    n8: string,
    n9: string,
    e1: string,
    e2: string,
    e3: string,
    e4: string,
    e5: string,
    e6: string,
    e7: string,
    e8: string,
    e9: string,
}

