import { type SchemaTypeDefinition } from 'sanity'
import products from './products';
import order from './order';
import blog from './blog';



export const schema: { types: SchemaTypeDefinition[] } = {
  types: [products, order, blog],
}
