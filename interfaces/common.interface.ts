import { IBlog } from "./blog.interface";
import { IHomePage } from "./home.interface";

export interface IIndexPage {
    allBlogs: IBlog[],
    homePage: IHomePage
}
export interface IMedia {
    className: string,
    url: string,
    alternativetext: string,
    width: number,
    height: number,
    layout: "fixed" | "fill" | "intrinsic" | "responsive" | "raw" | undefined
}