import { jsPDF } from "jspdf"
import "jspdf-autotable" // Opcional para tablas

export interface PDFUserData {
  name?: string
  email?: string
  platform?: string
  date: string
}

export const generateMarketingGuidePDF = (userData: PDFUserData) => {
  const doc = new jsPDF()

  // Añadir logo (si tienes uno)
  // doc.addImage("/logo.png", "PNG", 20, 10, 40, 40)

  // Título y encabezado
  doc.setFontSize(22)
  doc.setTextColor(0, 0, 0)
  doc.text("UGLY Content", 105, 20, { align: "center" })

  doc.setFontSize(16)
  doc.text("Guía Exclusiva de Marketing Digital", 105, 30, { align: "center" })

  // Información del usuario
  doc.setFontSize(10)
  doc.setTextColor(100, 100, 100)
  doc.text(`Generado para: ${userData.name || "Miembro de la comunidad"}`, 20, 40)
  doc.text(`Fecha: ${userData.date}`, 20, 45)
  doc.text(`Plataforma: ${userData.platform || "Web"}`, 20, 50)

  // Contenido principal
  doc.setFontSize(14)
  doc.setTextColor(0, 0, 0)
  doc.text("Estrategias de Marketing Digital", 20, 65)

  // Añadir el resto del contenido...

  return doc
}
