const CUSTOM_FUNCTIONS = `
    CREATE OR REPLACE FUNCTIONS on_update_timestamp()
    RETURNS trigger AS $$
    BEGIN 
        NEW.update_at = now();
        RETURN NEW; 
    END
    $$ languege 'plpgsql';    
`;

const DROP_CUSTOM_FUNCTIONS = `
DROP FUNCTIONS on_update_timestamp()
`;

exports.up = async (knex) => knex.raw(CUSTOM_FUNCTIONS);

exports.down = async (knex) => knex.raw(DROP_CUSTOM_FUNCTIONS);
