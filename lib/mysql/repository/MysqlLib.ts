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

  async update(query: any, data: any) {
    console.log(data)
    try {
      const result = await this.model.where(...query).update(data);
      return result;
    } catch (error) {
      return error;
    }
  }

  async delete(dataId: any) {
    try {
      const deleted = await this.model.deleteById(dataId);
      return deleted;
    } catch (error) {
      return error;
    }
  }
}

export default MysqlLib;