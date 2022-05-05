import { IImage } from "./home.interface";

export interface IAboutPage {
    title: string,
    description: string,
    contacts: IContact[],
}

export interface IContact {
    name: string,
    designation: string,
    description: string,
    email: string,
    photo: IImage
}