exports.up = function(knex, Promise) {
    //DB CHANGE
      return knex.schema.createTable('customers',
          table => {
              table.increments()
              table.string('username').notNullable();
              table.string('password', 30).notNullable();

          });
  };
  
  exports.down = function(knex, Promise) {
    //ROLLBACK DB
      return knex.schema.dropTableIfExists('customers');
  };