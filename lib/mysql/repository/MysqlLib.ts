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

  async create(data: any) {
    try {
      const created = await this.model.create(data);
      return created;
    } catch (error) {
      console.log(error)
      return error;
    }
  }

}

export default MysqlLib;