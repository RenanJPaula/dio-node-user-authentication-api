import { Pool } from 'pg';

const connectionString = 'postgres://xxxxx:xxxxxx@xxxxxx/xxxxx';

const db = new Pool({ connectionString });

export default db;
