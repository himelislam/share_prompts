import Link from "next/link"

const blogs = [
  {
    id : 1,
    title : "Blog 1",
    description : "blog description for one"
  },
  {
    id : 2,
    title : "Blog 2",
    description : "blog description for two"
  },
  {
    id : 3,
    title : "Blog 3",
    description : "blog description for three"
  },
  {
    id : 4,
    title : "Blog 4",
    description : "blog description for four"
  }
]

export default function Blog() {
  return (
    <div>
      
      <h2>Blog</h2>

      <ul>
          {
            blogs.map(blog => <li>
              <Link href={`/blog/${blog.id}`}>
              {blog.title}
              </Link>
              </li>)
          }
      </ul>

    </div>
  
  )
}
