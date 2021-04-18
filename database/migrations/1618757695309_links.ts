import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Links extends BaseSchema {
  protected tableName = 'links'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('code').notNullable()
      table.string('target').notNullable()
      table.integer('visit_count').defaultTo(0)
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
