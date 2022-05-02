export interface IHomePage {
    id: number,
    attributes: {
        "title": string,
        "quotes": string,
        "createdAt": Date,
        "updatedAt": Date,
        "publishedAt": Date,
        "locale": string
    }
}