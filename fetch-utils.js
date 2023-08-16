const SUPABASE_URL = 'https://ucbhjegmnpmhfsfryfos.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjYmhqZWdtbnBtaGZzZnJ5Zm9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIwNjQzNzksImV4cCI6MjAwNzY0MDM3OX0._lam0-TSSW-yl0lBwoT4Iz9xA6f_gQQPbmLTjprKipE';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function createPollRecord(poll) {
  const { data, error } = await client.from('polls').insert(poll);
  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error creating record:', error.message);
  }
  // eslint-disable-next-line no-console
  console.log('Created record:', data);
  return data;
}

export async function getAllPollRecords() {
  const { data, error } = await client.from('polls').select('*');
  if (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching all poll records:', error.message);
  }
  // eslint-disable-next-line no-console
  console.log('All poll records returned:', data);
  return data;
}
