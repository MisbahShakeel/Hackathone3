

export default interface Blog {
    _id: string;
    heading: string;
    _type: string;
    image? : {
        asset : {
            _ref: string;
            _type: "image";
        }
       
    };
    title: string;
    description : string;
    slug: {
        _type : 'slug'
        current : string;
    };
    blogDate: {
        _type: 'datetime'
        current: string
    }
}