import { Pool } from 'pg';

const connectionString = 'postgres://jmcnebnv:wYIxVJfUARnSYojuaDgr2-rSKXVGeB-n@kesavan.db.elephantsql.com/jmcnebnv';

const db = new Pool({ connectionString });

export default db;
