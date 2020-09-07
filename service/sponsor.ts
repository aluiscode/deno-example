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

  async updateSponsor(sponsorId: any, sponsor: any) {
    const updatedSponsor = await this.mysqlLib.update(['id', sponsorId], sponsor);
    return updatedSponsor || [];
  }

  async deleteSponsor(sponsorId: any) {
    const deletedSponsor = await this.mysqlLib.delete(sponsorId);
    return deletedSponsor || [];
  }
}

export default SponsorService;
