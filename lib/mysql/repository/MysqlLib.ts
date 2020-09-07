class MysqlLib {
  private model:any;

  constructor(model:any) {
    this.model = model;
  }

  async get(sponsorId: any) {
    try {
      const listData = await this.model.find(sponsorId);
      return listData;
    } catch (error) {
      return error;
    }
  }

  async getAll() {
    try {
      const listData = await this.model.all();
      return listData;
    } catch (error) {
      return error;
    }
  }

}

export default MysqlLib;