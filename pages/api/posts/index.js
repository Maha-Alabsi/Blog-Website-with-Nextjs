import {posts} from '../../../apiData'

// for rendering all post
export default function handler (req, res){
    res.status(200).json(posts)
}