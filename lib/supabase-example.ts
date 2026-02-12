// Exemplo de uso do Supabase
// Este arquivo é apenas para referência, você pode deletá-lo

import { supabase } from './supabase'

// Exemplo: Buscar dados de uma tabela
export async function exemploBuscarDados() {
  const { data, error } = await supabase
    .from('sua_tabela')
    .select('*')
  
  if (error) {
    console.error('Erro ao buscar dados:', error)
    return null
  }
  
  return data
}

// Exemplo: Inserir dados
export async function exemploInserirDados(dados: any) {
  const { data, error } = await supabase
    .from('sua_tabela')
    .insert(dados)
  
  if (error) {
    console.error('Erro ao inserir dados:', error)
    return null
  }
  
  return data
}
