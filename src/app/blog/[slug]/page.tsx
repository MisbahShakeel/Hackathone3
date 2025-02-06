import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"


const blogs = async ({ params }: any) => {

  const blogQuery = `*[_type == 'blog' && slug.current == '/${params.slug}'] {
    heading,
    image,
    description,
    blogDate}`

  const sanityData = await client.fetch(blogQuery)
  return (
    <div className='bg-gray-100 pt-36 pb-10 relative top-10 mb-10'>
      <div className='mx-10 md:mx-40'>
        {sanityData.map((blog, index: string) => (
          <div key={index}>
             <h2 className="text-center text-4xl font-lato font-bold mb-6 text-[#151875]">{blog.heading}</h2>
            <Image src={urlFor(blog.image).url()} alt={blog.title} width={400} height={400} className="sm:w-[600px] md:w-[700px] lg:w-full" />
           
            <p className="text-gray-600 text-sm mt-4">{new Date(blog.blogDate).toDateString()}</p>
            <p className="text-gray-600 w-[350px] sm:w-[550px] md:w-[600px] lg:w-[900px] mt-2 text-center">{blog.description}</p>
          </div>
        )
        )
        }
      </div>
    </div>
  )
}

export default blogs