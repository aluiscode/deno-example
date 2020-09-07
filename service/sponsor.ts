import MysqlLib from '../lib/mysql/repository/MysqlLib.ts';
import Sponsor from '../lib/mysql/models/sponsor.ts';

class SponsorService {
  mysqlLib: MysqlLib;

  constructor() {
    this.mysqlLib = new MysqlLib(Sponsor);
    console.log(this.mysqlLib)
  }

  async getSponsors() {
    const sponsors = await this.mysqlLib.getAll();
    return sponsors || [];
  }

}

export default SponsorService;
