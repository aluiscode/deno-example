import { DataTypes, Model } from '../../../denodb-master/mod.ts';
import db from '../repository/connection.ts'

class Sponsor extends Model {
  static table = 'sponsors';
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    name_sponsor: DataTypes.STRING,
    url_sponsor: DataTypes.STRING,
  };
}

db.link([Sponsor]);

export default Sponsor;