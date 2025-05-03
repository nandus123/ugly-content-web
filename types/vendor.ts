import type React from "react"
// Definición de tipos para el sistema de vendedores

// Cliente
export interface Client {
  name: string
  phone: string
  email: string
  businessName?: string
  notes?: string
}

// Servicio
export interface Service {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  category: string
  options: ServiceOption[]
}

// Opción de servicio
export interface ServiceOption {
  id: string
  name: string
  price: number
  isHourly?: boolean
}

// Ítem del carrito
export interface CartItem {
  service: Service
  selectedOption: string
  quantity: number
  price: number
}

// Tipo de contrato
export type ContractType = "1year" | "2year" | "3year"
