
exports.up = function(knex) {
  return knex.schema.createTable('game_showcases', t => {
  	t.increments('id').unsigned().primary()
  	t.string('title').default('Flip Card')
  	t.string('wallpaper').default('flipcard.jpg')
  	t.string('players').default('30 players')
  	t.timestamps(false, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('game_showcases');
};
