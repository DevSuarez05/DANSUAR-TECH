import { ContactFormData, ContactFormErrors } from "@/types";

/**
 * Obtiene el número de WhatsApp configurable desde la variable de entorno NEXT_PUBLIC_WHATSAPP_NUMBER.
 * No hardcodea el número y sanitiza caracteres como espacios, guiones o signos '+'.
 */
export function getWhatsAppNumber(): string {
  const envNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!envNumber) {
    // Si no está configurada, retorna un valor de demostración que alerta sobre configurar la variable
    return "573000000000";
  }
  // Elimina cualquier caracter no numérico (espacios, guiones, +, paréntesis)
  return envNumber.replace(/\D/g, "");
}

/**
 * Mensaje inicial solicitado:
 * "Hola DANSUAR TECH, quiero hablar sobre un proyecto."
 */
export const DEFAULT_WHATSAPP_MESSAGE = "Hola DANSUAR TECH, quiero hablar sobre un proyecto.";

/**
 * Genera el enlace directo a WhatsApp con el número configurable y el mensaje inicial.
 * Formato: https://wa.me/[NUMERO]?text=[MENSAJE]
 */
export function getWhatsAppUrl(customMessage: string = DEFAULT_WHATSAPP_MESSAGE): string {
  const number = getWhatsAppNumber();
  const encodedText = encodeURIComponent(customMessage);
  return `https://wa.me/${number}?text=${encodedText}`;
}

/**
 * Genera un enlace a WhatsApp que incluye los detalles diligenciados en el formulario.
 */
export function getWhatsAppFormUrl(data: ContactFormData): string {
  const message = [
    `Hola DANSUAR TECH, quiero hablar sobre un proyecto.`,
    ``,
    `*Nombre:* ${data.name.trim()}`,
    `*Empresa:* ${data.company.trim()}`,
    `*Correo:* ${data.email.trim()}`,
    `*WhatsApp:* ${data.whatsapp.trim()}`,
    ``,
    `*Mensaje:*`,
    `${data.message.trim()}`,
  ].join("\n");

  return getWhatsAppUrl(message);
}

/**
 * Validador para el formulario de contacto de DANSUAR TECH.
 */
export function validateContactForm(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};

  // Validación de Nombre
  if (!data.name.trim()) {
    errors.name = "Por favor ingresa tu nombre completo.";
  } else if (data.name.trim().length < 2) {
    errors.name = "El nombre debe tener al menos 2 caracteres.";
  }

  // Validación de Empresa
  if (!data.company.trim()) {
    errors.company = "Por favor ingresa el nombre de tu empresa u organización.";
  }

  // Validación de Correo
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email.trim()) {
    errors.email = "El correo electrónico es requerido.";
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = "Ingresa un correo electrónico corporativo válido.";
  }

  // Validación de WhatsApp / Teléfono
  const phoneDigits = data.whatsapp.replace(/\D/g, "");
  if (!data.whatsapp.trim()) {
    errors.whatsapp = "El número de WhatsApp es requerido.";
  } else if (phoneDigits.length < 7) {
    errors.whatsapp = "Ingresa un número telefónico o WhatsApp válido (mín. 7 dígitos).";
  }

  // Validación de Mensaje
  if (!data.message.trim()) {
    errors.message = "Por favor describe brevemente qué quieres construir.";
  } else if (data.message.trim().length < 10) {
    errors.message = "El mensaje debe contener al menos 10 caracteres.";
  }

  return errors;
}

/**
 * Adaptador preparado para conectar backend (Formspree, Resend, Supabase o API propia).
 * Actualmente simula la llamada y entrega una respuesta exitosa sin backend requerido.
 */
export async function submitContactForm(_data: ContactFormData): Promise<{ success: boolean; message: string }> {
  // Simular latencia de red para dar feedback de envío
  void _data;
  await new Promise((resolve) => setTimeout(resolve, 800));


  // ============================================================================
  // GUÍA DE INTEGRACIÓN PARA CUANDO SE REQUIERA BACKEND:
  // ============================================================================
  //
  // 1. OPCIÓN FORMSPREE:
  //    const response = await fetch("https://formspree.io/f/TU_FORM_ID", {
  //      method: "POST",
  //      headers: { "Content-Type": "application/json" },
  //      body: JSON.stringify(data),
  //    });
  //    return { success: response.ok, message: response.ok ? "Enviado con éxito" : "Error al enviar" };
  //
  // 2. OPCIÓN RESEND (Next.js Server Action o Route Handler /api/contact):
  //    const response = await fetch("/api/contact", {
  //      method: "POST",
  //      headers: { "Content-Type": "application/json" },
  //      body: JSON.stringify(data),
  //    });
  //    return await response.json();
  //
  // 3. OPCIÓN SUPABASE:
  //    const { data: record, error } = await supabase.from('leads').insert([data]);
  //    if (error) throw error;
  // ============================================================================

  return {
    success: true,
    message: "Solicitud registrada con éxito. Nos pondremos en contacto a la brevedad.",
  };
}
