
/**
 * export `timestamps`
 */

module.exports = timestamps;

/**
 * sets up `created_at` n `updated_at`
 * prior to saving.
 *
 * example:
 *
 *      timestamps(mySchema);
 *
 * @param {Schema} schema
 * @param {Object} opts
 */

function timestamps(schema, opts) {
  schema.add({ updated_at: Date, created_at: Date });
  schema.pre('save', function (next) {
    var timestamp = new Date();
    this.created_at = this.created_at || timestamp;
    this.updated_at = timestamp;
    next();
  });
};
