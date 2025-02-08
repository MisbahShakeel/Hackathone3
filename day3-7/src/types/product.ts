
export default interface Product {
    _id: string;
    productName: string;
    _type: string;
    image? : {
        asset : {
            _ref: string;
            _type: "image";
        }
       
    };
    price : number;
    description : string;
    discountPercentage : number;
    isFeaturedProduct : boolean;
    stockLevel : number;
    category : string;
    slug: {
        _type : 'slug'
        current : string;
    };
}