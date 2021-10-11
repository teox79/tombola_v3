export interface IAlert {
    /**
    * open true close false 
    */
    open: boolean;
    /**
    * message
    */
    message: string;
    /**
    * time to visualiztion
    */
    showTime: number;
    /**
    * warning - info - success - error
    */
    severity: string,
    onClose: () => void
}