
exports.up = function(knex, Promise) {
    //DB CHANGE
      return knex.schema.createTable('people10',
          table => {
              table.increments()
              table.string('email').notNullable();
              table.string('first_name', 30).nullable();
              table.string('last_name', 50).nullable();
              table.string('ip', 15).nullable();
              table.float('latitude', 10).nullable();
              table.float('longitude', 10).nullable();
              table.timestamp('created_at').notNullable();
              table.timestamp('updated_at').nullable();
          });
  };
  
  exports.down = function(knex, Promise) {
    //ROLLBACK DB
      return knex.schema.dropTableIfExists('people10');
  };
  