import { ISEO } from "./common.interface"

export interface IHomePage {
    id: number,
    attributes: {
        "title": string,
        "quotes": string,
        "createdAt": Date,
        "updatedAt": Date,
        "publishedAt": Date,
        "locale": string,
        "photo": IImage,
        "seo": ISEO
    }
}
export interface IImage {
    data: {
        id: number,
        attributes: {
            name: string,
            url: string
        }
    }
}
