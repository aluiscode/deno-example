import MysqlLib from '../lib/mysql/repository/MysqlLib.ts';
import Sponsor from '../lib/mysql/models/sponsor.ts';

class SponsorService {
  mysqlLib: MysqlLib;

  constructor() {
    this.mysqlLib = new MysqlLib(Sponsor);
  }

  async getSponsor(sponsorId: any) {
    const sponsor = await this.mysqlLib.get(sponsorId);
    return sponsor || [];
  }

  async getSponsors() {
    const sponsors = await this.mysqlLib.getAll();
    return sponsors || [];
  }

  async createSponsor(sponsor: any) {
    const result = await this.mysqlLib.create(sponsor);
    return result;
  }

}

export default SponsorService;
