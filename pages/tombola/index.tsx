import { Box, Button, ButtonGroup, Grid, Paper, Typography } from "@material-ui/core";
import { ITombola, ITombolaFormState } from "interface/tombola.interface";
import React, { useState } from "react";

import TForm from "../../components/tombola/TForm"
import styles from '../../styles/Template.module.scss'

const TTombola: React.FC = (props) => {

    const [form, setForm] = useState({} as ITombolaFormState)

    const handleSubmitForm = (data: ITombola) => {
        console.log("handleSubmitForm : ", data);
    }

    return (
        <Paper elevation={3} >
            <Box m={2}>
                <Grid container >
                    <Grid item xs={8} md={8} lg={8}>
                        <Typography variant="h4" component="div">
                            Tombola
                        </Typography>
                    </Grid>
                    <Grid item xs={4} md={4} lg={4} className={styles.alignRightBottom}>
                        <ButtonGroup variant="contained" color="primary" aria-label="small contained primary button group">
                            <Button form="tombola-form" type="submit" disabled={!form.isDirty || !form.isValid}>
                                Salva
                            </Button>
                            <Button>Cancella</Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                        <Box m={2}>
                            <TForm handleSubmitForm={handleSubmitForm} setForm={setForm} form={form} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Paper>
    )

}


export default TTombola;