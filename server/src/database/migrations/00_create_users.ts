import Knex from 'knex'

export async function up (knex: Knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable().unique()
    table.string('avatar').notNullable()
    table.string('whatsapp').notNullable()
    table.string('bio').notNullable()
    table.string('password').notNullable()

    table.string('password_reset_token').defaultTo(null)
    table.timestamp('password_reset_expires').defaultTo(null)
  })
}

export async function down (knex: Knex) {
  return knex.schema.dropTable('users')
}
