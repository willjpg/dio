import { Pool } from "pg";

const connectionString = `postgres://vgwxdklc:2iCdwcMGvT9QdGlmac9nXaDR09CmC0d4@kesavan.db.elephantsql.com/vgwxdklc`;

const db = new Pool({ connectionString});

export default db;