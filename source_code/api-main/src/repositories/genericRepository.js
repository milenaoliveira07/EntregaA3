export class GenericRepository {
  constructor(connection, tableName) {
    this.connection = connection;
    this.tableName = tableName;
  }

  async create(data) {}

  async findAll() {
    const [rows] = await this.connection.query(
      `SELECT * FROM ${this.tableName};`
    );
    return rows;
  }

  async findById(id) {}

  async update(data, id) {}

  async delete(id) {}
}
