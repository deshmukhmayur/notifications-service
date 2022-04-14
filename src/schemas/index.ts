import { readFileSync, readdirSync } from 'fs';
import { resolve, extname } from 'path';

/* Read all the schema files and export as strings */
const schemas = readdirSync(resolve(__dirname))
  .filter(filename => extname(filename) === '.gql' || extname(filename) === '.graphql')
  .map(file => {
    return readFileSync(resolve(__dirname, file)).toString()
  });

export default schemas;
