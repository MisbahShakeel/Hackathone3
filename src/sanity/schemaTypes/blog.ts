


export default {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
              hotspot: true,
            },
            description: 'Upload an image for blog.',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
        },
        {
            name: 'blogDate',
            title: 'Blog Date',
            type: 'datetime',
        },
    ]
}