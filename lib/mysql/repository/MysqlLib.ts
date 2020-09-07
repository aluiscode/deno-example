class MysqlLib {
  private model:any;

  constructor(model:any) {
    this.model = model;
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