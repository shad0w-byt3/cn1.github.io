export interface Profile {
  id: string
  email: string
  full_name: string | null
  role: string
  created_at: string
  updated_at: string
}

export interface Blog {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string | null
  cover_image: string | null
  tags: string[]
  published: boolean
  author_id: string | null
  created_at: string
  updated_at: string
}

export interface Project {
  id: string
  title: string
  slug: string
  description: string
  image: string | null
  tags: string[]
  github_url: string | null
  live_url: string | null
  featured: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string | null
  message: string
  read: boolean
  created_at: string
}
