import { posts } from '../../../apiData';

// for rendering certain post

function handler(req, res) {
    const id = req.query.id;
  //filter specific post by its id
  const filtered = posts.filter((post) => post.id ===id );
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `Posts with the id of ${id} is not found` });
  }
}

export default handler;