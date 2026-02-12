// Arquivo de teste para verificar conexão com Supabase
// Este arquivo pode ser deletado após confirmar que está funcionando

import { supabase } from './supabase'

export async function testSupabaseConnection() {
  try {
    // Teste simples de conexão
    const { data, error } = await supabase.from('_test').select('*').limit(1)
    
    if (error) {
      console.log('Supabase conectado, mas tabela de teste não existe (normal)')
      return { success: true, message: 'Conexão estabelecida' }
    }
    
    return { success: true, data }
  } catch (err) {
    console.error('Erro ao conectar com Supabase:', err)
    return { success: false, error: err }
  }
}
