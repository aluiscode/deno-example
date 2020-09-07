import Sponsor from '../models/sponsor.ts';
import db from '../repository/connection.ts';

db.link([Sponsor]);
await db.sync();