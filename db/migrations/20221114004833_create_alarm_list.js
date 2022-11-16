const e = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable('alarms', (table) => {
    table.increments('id', 255);
    table.string('alarm_name', 255).notNullable;
    table.date('alarm_days');
    table.time('alarm_time').notNullable;
    table.decimal('alarm_latitude', 11, 8);
    table.decimal('alarm_longitude', 11, 8)
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable('alarms');
};
