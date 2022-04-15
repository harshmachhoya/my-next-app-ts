// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs';
import { IBlog } from '../../interfaces/blog.interface';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<IBlog[]>
) {
    let data = await fs.promises.readdir("blogdata")
    let myfile;
    let allBlogs: Array<IBlog> = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        myfile = await fs.promises.readFile('blogdata/' + item, 'utf-8');
        allBlogs.push(JSON.parse(myfile));
    }
    res.status(200).json(allBlogs);
}