import * as yup from 'yup';

const validationSchema = yup.object().shape({
    players: yup.string(),
    /*giocatore: yup.string()
        .required('Campo obbligatorio')
        .max(30, 'Sono ammessi al massimo 30 caratteri')
        .min(5, 'Minimo 5 caratteri'),*/
    giocatore: yup.string().when('players', {
        is: (players: string) => players === 'add',
        then: yup.string().required('Campo obbligatorio')
            .max(30, 'Sono ammessi al massimo 30 caratteri')
            .min(5, 'Minimo 5 caratteri'),
        //otherwise: yup.string(),
    }),
    /*title_second: yup.string()
        .required('Campo obbligatorio')
        .max(30, 'Sono ammessi al massimo 30 caratteri')
        .min(5, 'Minimo 5 caratteri'),*/
    ncartelle: yup.string()
        .required('Campo obbligatorio')
    /*number: yup.string()
        .required('Campo obbligatorio')
        .matches(/^[0-9]+\/[0-9]+$/, 'Formato Errato'),
    email: yup.string()
        .required('Campo obbligatorio')
        .email('Email non valida'),
    referente: yup.string()
        .required('Campo obbligatorio')
        .max(30, 'Sono ammessi al massimo 30 caratteri')
        .min(5, 'Minimo 5 caratteri'),*/
});

export default validationSchema;