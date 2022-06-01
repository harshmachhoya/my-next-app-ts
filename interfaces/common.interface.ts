import { IBlog } from "./blog.interface";
import { IHomePage } from "./home.interface";

export interface IIndexPage {
    allBlogs: IBlog[],
    homePage: IHomePage
    navigation: INavItem[],
    children: React.ReactNode
}
export interface IMedia {
    className: string,
    url: string,
    alternativetext: string,
    width: number,
    height: number,
    layout: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined
}

export interface ISEO {
    id: number,
    metaTitle: string,
    metaDescription: string
}

export interface INavItem {
    id: number,
    title: string,
    path: string,
    items: INavItem[]
}
