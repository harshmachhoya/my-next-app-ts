export interface IBlog {
    id: number,
    attributes: {
        title: string,
        content: string,
        author: string,
        slug: string
    }
}

export interface IPropDataArray {
    allBlogs: IBlog[];
}
export interface IPropData {
    myBlog: IBlog;
}