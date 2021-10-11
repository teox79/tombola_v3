import { ITSnackbar } from "./TSnackbar.interface";
import { ILoader } from "./loader.interface";
import { IAlert } from "./alert.interface";

export interface ITemplate {
    ITSnackbar: ITSnackbar;
    ILoader: ILoader;
    IAlert: IAlert;
}