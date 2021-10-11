import { ICartella } from "interface/cartelle.interface";
import _ from "lodash";

const decina1 = ["01", "02", "03", "04", "05", "06", "07", "08", "09"];
const decina2 = ["10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
const decina3 = ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];
const decina4 = ["30", "31", "32", "33", "34", "35", "36", "37", "38", "39"];
const decina5 = ["40", "41", "42", "43", "44", "45", "46", "47", "48", "49"];
const decina6 = ["50", "51", "52", "53", "54", "55", "56", "57", "58", "59"];
const decina7 = ["60", "61", "62", "63", "64", "65", "66", "67", "68", "69"];
const decina8 = ["70", "71", "72", "73", "74", "75", "76", "77", "78", "79"];
const decina9 = ["80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"];
const decine = {
    decina1,
    decina2,
    decina3,
    decina4,
    decina5,
    decina6,
    decina7,
    decina8,
    decina9
}

export const generateCartelle = (params) => {

    let cloneDecine = [] as any[];
    const numeriCartella = 15;
    const nPerRiga = 5;

    const cartelle = [] as ICartella[];
    const nCartelle = params.ncartelle || 0;
    const giocatore = params.giocatore || "";
    const tombola_id = params.tombola_id || "";
    const totaleCartelle = params.totaleCartelle;
    let ncartella = totaleCartelle || 0;

    for (let index = 1; index <= parseInt(nCartelle); index++) {

        if ((index % 6) === 1) {
            cloneDecine = _.cloneDeep(decine) as unknown as any[];
        }
        ncartella = parseInt(ncartella) + 1;
        /*const cartella = {
            tombola_id,
            ncartella,
            giocatore,
            r1n1: "",
            r1n2: "",
            r1n3: "",
            r1n4: "",
            r1n5: "",
            r1n6: "",
            r1n7: "",
            r1n8: "",
            r1n9: "",
            r2n1: "",
            r2n2: "",
            r2n3: "",
            r2n4: "",
            r2n5: "",
            r2n6: "",
            r2n7: "",
            r2n8: "",
            r2n9: "",
            r3n1: "",
            r3n2: "",
            r3n3: "",
            r3n4: "",
            r3n5: "",
            r3n6: "",
            r3n7: "",
            r3n8: "",
            r3n9: "",
        }*/
        const cartella = {
            tombola_id,
            ncartella,
            giocatore,
            righe: {
                '1': {
                    n1: "",
                    n2: "",
                    n3: "",
                    n4: "",
                    n5: "",
                    n6: "",
                    n7: "",
                    n8: "",
                    n9: "",
                },
                '2': {
                    n1: "",
                    n2: "",
                    n3: "",
                    n4: "",
                    n5: "",
                    n6: "",
                    n7: "",
                    n8: "",
                    n9: "",
                },
                '3': {
                    n1: "",
                    n2: "",
                    n3: "",
                    n4: "",
                    n5: "",
                    n6: "",
                    n7: "",
                    n8: "",
                    n9: "",
                }
            }
        }
        let righe: number = 1;
        let indiciNumeriRiga = [] as any[];
        for (let indexNumber = 0; indexNumber < numeriCartella; indexNumber++) {
            const maxLength = _.max(Object.values(cloneDecine).map(decina => decina.length));
            const bigDecine = [] as any[];

            const tmpRiga = _.split((indexNumber / nPerRiga).toString(), ".");
            const riga: number = parseInt(tmpRiga[1]) !== 0 ? parseInt(tmpRiga[0]) + 1 : parseInt(tmpRiga[1]);
            if (righe !== riga) {
                righe = riga;
                indiciNumeriRiga = [];
            }

            Object.values(cloneDecine).map((decina, index) => {
                if (decina.length === maxLength && !_.includes(indiciNumeriRiga, index)) {
                    bigDecine.push(decina);
                }
                return false;
            })

            const randomIndex = _.random(1, bigDecine.length) - 1;
            const randomDecina = bigDecine[randomIndex];
            const randomNumber: string = _.sample(randomDecina);
            _.remove(randomDecina, (n) => {
                return n === randomNumber;
            });

            let numero = parseInt(randomNumber.charAt(0));
            numero = numero === 9 ? numero : numero === 0 ? 1 : numero + 1;
            //cartella[`r${riga}n${numero}`] = randomNumber;
            cartella.righe[`${riga}`][`n${numero}`] = randomNumber;
            const indiceNumeroRiga = parseInt(randomNumber.charAt(0)) === 9 ? 8 : parseInt(randomNumber.charAt(0));
            indiciNumeriRiga.push(indiceNumeroRiga);
        }
        cartelle.push(cartella as ICartella);
    }
    return cartelle;
}