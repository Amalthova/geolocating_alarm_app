const e = require("express");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  return await knex.schema.createTable('alarms', (table) => {
    table.increments('id', 255);
    table.string('alarm_name', 255).notNullable;
    table.date('alarm_days', 255);
    table.time('alarm_time', 255).notNullable;
    table.decimal('alarm_latitude', 255);
    table.decimal('alarm_longitude', 255);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  return await knex.schema.dropTable('alarms');
};
