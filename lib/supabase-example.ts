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

// Exemplo: Buscar obras/portfolio
export async function buscarObras() {
  const { data, error } = await supabase
    .from('obras')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Erro ao buscar obras:', error)
    return []
  }
  
  return data || []
}

// Exemplo: Upload de imagem para Storage
export async function uploadImagem(file: File, path: string) {
  const { data, error } = await supabase.storage
    .from('project')
    .upload(path, file)
  
  if (error) {
    console.error('Erro ao fazer upload:', error)
    return null
  }
  
  return data
}
