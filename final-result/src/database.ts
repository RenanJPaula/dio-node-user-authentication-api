
import config from 'config';
import { Pool } from 'pg';

const connectionString = config.get<string>('database.uri');
const db = new Pool({ connectionString });

export default db;
