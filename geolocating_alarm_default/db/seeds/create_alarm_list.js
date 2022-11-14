/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('alarms').del()
  await knex('alarms').insert([
    {alarm_name: 'Greenwich'},
    {alarm_days: 'null'},
    {alarm_time: '00:00:00'},
    {alarm_latitude: '51.4825766'},
    {alarm_longitude: '-0.0076589'},
    
  ]);
};

/*

  table.increments('id', 255);
  table.string('alarm_name', 255).notNullable;
  table.date('alarm_days', 255);
  table.time('alarm_time', 255).notNullable;
  table.decimal('alarm_latitude', 255);
  table.decimal('alarm_longitude', 255);

*/