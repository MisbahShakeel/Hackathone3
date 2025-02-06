
import {groq} from 'next-sanity';

export const allProducts = groq`*[_type == 'product']`;
export const four = groq`*[_type == 'product'][0..3]`;

export const order = groq`*[_type == 'order'] {
 total, firstName, lastName}`;

 export const blog = groq`*[_type == 'blog']`;