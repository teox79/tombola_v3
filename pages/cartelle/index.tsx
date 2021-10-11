import { Box, Button, ButtonGroup, Grid, Paper, Typography } from "@material-ui/core";
import { AppDispatch } from "@pages/_app";
import { ICartelleFormState, ICartellaFormData } from "interface/cartelle.interface";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCartelle } from "../../components/cartelle/store/cartelle.actions";

import CartelleForm from "../../components/cartelle/cartelleForm"
import styles from '../../styles/Template.module.scss'

const TCartelle: React.FC = (props) => {

    const [form, setForm] = useState({} as ICartelleFormState)
    const dispatch = useDispatch() as AppDispatch

    const handleSubmitForm = (data: ICartellaFormData) => {
        console.log("handleSubmitForm : ", data);
        dispatch(addCartelle(data))
    }

    return (
        <Paper elevation={3} >
            <Box m={2}>
                <Grid container >
                    <Grid item xs={8} md={8} lg={8}>
                        <Typography variant="h4" component="div">
                            Test
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4} className={styles.alignRightBottom}>
                        <ButtonGroup variant="contained" color="primary" aria-label="small contained primary button group">
                            <Button form="cartelle-form" type="submit" disabled={!form.isDirty || !form.isValid}>
                                Salva
                            </Button>
                            <Button>Cancella</Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        <Box m={2}>
                            <CartelleForm handleSubmitForm={handleSubmitForm} setForm={setForm} form={form} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )

}

export default TCartelle;