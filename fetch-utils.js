const SUPABASE_URL = 'https://fjidvhxajekcfrrjsnla.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZqaWR2aHhhamVrY2ZycmpzbmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjAxNDU2ODYsImV4cCI6MTk3NTcyMTY4Nn0._zi_gZoOt0ksKYa3J9htU9w6oH8ojf_WkKrLHWGaswo';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPoll(poll){
    const resp = await client.from('polls').insert(poll);
    if (resp.error) {
        throw new Error(resp.error.message);
    } 
// return checkError(response);
    return resp.data;  
}
export async function getpolls() {
    const resp = await client.from('polls').select('*');
    if (resp.error) {
        throw new Error(resp.error.message);
    } 
    return resp.data; 
}