
import { Pool } from 'pg';

const connectionString = 'your_connection_string';

const db = new Pool({ connectionString });

export default db;
