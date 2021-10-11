import { Box, CircularProgress, Typography } from '@material-ui/core';
import { ILoader } from "../interface/loader.interface";
import React from "react"
import cn from 'classnames';

const defaultProps: ILoader = {
    show: true,
    progress: 0
}

const Loader: React.FC<Partial<ILoader>> = props => {
    const { show, progress } = props;

    const classes = cn("loader", {
        visible: show
    });

    const classesProgress = cn({
        hide: !(progress && progress > 0)
    });

    return (
        <>
            <div className={classes}>
                <CircularProgress />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    className={classesProgress}
                >
                    <Typography variant="caption" component="div" color="textSecondary">{`${progress}%`}</Typography>
                </Box>
            </div>
        </>
    );
}

Loader.defaultProps = defaultProps;

export default Loader;