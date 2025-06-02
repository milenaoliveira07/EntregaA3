export class GenericRepository {
  constructor(connection, tableName) {
    this.connection = connection;
    this.tableName = tableName;
  }

  async create(data) {
    const keys = Object.keys(data).join(", ");
    const values = Object.values(data);
    const placeholders = values.map(() => "?").join(", ");

    const query = `INSERT INTO ${this.tableName} (${keys}) VALUES (${placeholders})`;
    const [result] = await this.connection.query(query, values);

    return {
      id: result.insertId,
      ...data
    };
  }

  async findAll() {
    const [rows] = await this.connection.query(
      `SELECT * FROM ${this.tableName};`
    );
    return rows;
  }

  async findById(id) {
  const [rows] = await this.connection.query(
    `SELECT * FROM ${this.tableName} WHERE id = ?;`,
    [id]
  );
  return rows[0];
}

  async update(id, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const setClause = keys.map(key => `${key} = ?`).join(", ");

    const query = `UPDATE ${this.tableName} SET ${setClause} WHERE id = ?;`;
    await this.connection.query(query, [...values, id]);

    return { id, ...data };
  }

  async delete(id) {
    await this.connection.query(
      `DELETE FROM ${this.tableName} WHERE id = ?;`,
      [id]
    );
    return { message: "Deleted successfully", id };
  }
}
