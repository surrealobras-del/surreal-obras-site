import { supabase } from './supabase'

export interface Obra {
  id: string
  created_at: string
  title: string
  is_active: boolean
  main_image: string | null
}

export interface ObrasResponse {
  status: boolean
  message: string
  data: Obra[]
  pagination: {
    total_items: number
    total_pages: number
    current_page: number
  }
}

export interface ObrasParams {
  page?: number
  items_page?: number
  title?: string
  status?: 'in_progress' | 'completed'
  is_active?: boolean
  order?: 'most_recent' | 'oldest'
}

/**
 * Busca obras do Supabase usando a função RPC get_building_works_site
 */
export async function getObras(params: ObrasParams = {}): Promise<ObrasResponse> {
  const {
    page = 1,
    items_page = 10,
    title = null,
    status = null,
    is_active = null,
    order = 'most_recent',
  } = params

  try {
    const { data, error } = await supabase.rpc('get_building_works_site', {
      p_page: page,
      p_items_page: items_page,
      p_title: title,
      p_status: status,
      p_is_active: is_active,
      p_order: order,
    })

    if (error) {
      console.error('Erro ao buscar obras:', error)
      return {
        status: false,
        message: error.message || 'Erro ao buscar obras',
        data: [],
        pagination: {
          total_items: 0,
          total_pages: 0,
          current_page: page,
        },
      }
    }

    // A função RPC retorna um JSONB, então precisamos verificar o formato
    if (typeof data === 'object' && data !== null) {
      return data as ObrasResponse
    }

    // Fallback caso a resposta não esteja no formato esperado
    return {
      status: false,
      message: 'Formato de resposta inválido',
      data: [],
      pagination: {
        total_items: 0,
        total_pages: 0,
        current_page: page,
      },
    }
  } catch (err) {
    console.error('Erro ao buscar obras:', err)
    return {
      status: false,
      message: err instanceof Error ? err.message : 'Erro desconhecido',
      data: [],
      pagination: {
        total_items: 0,
        total_pages: 0,
        current_page: page,
      },
    }
  }
}

/**
 * Busca todas as obras ativas para exibição no site
 */
export async function getObrasAtivas() {
  return getObras({
    page: 1,
    items_page: 50, // Busca mais obras para o carrossel
    is_active: true,
    order: 'most_recent',
  })
}

export interface ObraMedia {
  id: string
  url: string
  order: number
  created_at: string
}

export interface ObraDetalhes {
  id: string
  created_at: string
  title: string
  description: string | null
  address: string | null
  status: string
  is_active: boolean
  images: ObraMedia[]
  videos: ObraMedia[]
}

export interface ObraDetalhesResponse {
  status: boolean
  message: string
  data: ObraDetalhes[]
}

/**
 * Busca os detalhes completos de uma obra pelo ID
 */
export async function getObraById(id: string): Promise<ObraDetalhesResponse> {
  try {
    const { data, error } = await supabase.rpc('get_building_work_site', {
      p_id: id,
    })

    if (error) {
      console.error('Erro ao buscar obra:', error)
      return {
        status: false,
        message: error.message || 'Erro ao buscar obra',
        data: [],
      }
    }

    // A função RPC retorna um JSONB
    if (typeof data === 'object' && data !== null) {
      return data as ObraDetalhesResponse
    }

    return {
      status: false,
      message: 'Formato de resposta inválido',
      data: [],
    }
  } catch (err) {
    console.error('Erro ao buscar obra:', err)
    return {
      status: false,
      message: err instanceof Error ? err.message : 'Erro desconhecido',
      data: [],
    }
  }
}
