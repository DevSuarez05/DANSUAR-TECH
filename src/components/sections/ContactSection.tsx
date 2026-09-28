"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ContactFormData, ContactFormErrors } from "@/types";
import {
  getWhatsAppUrl,
  getWhatsAppFormUrl,
  validateContactForm,
  submitContactForm,
  DEFAULT_WHATSAPP_MESSAGE,
} from "@/lib/contact";
import {
  MessageSquare,
  Mail,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  User,
  Phone,
  AlertCircle,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const whatsAppDirectUrl = getWhatsAppUrl(DEFAULT_WHATSAPP_MESSAGE);


  const handleChange = (
    field: keyof ContactFormData,
    value: string
  ) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);

    // Si el campo ya fue tocado, validar en tiempo real
    if (touched[field]) {
      const fieldErrors = validateContactForm(updated);
      setErrors((prev) => ({
        ...prev,
        [field]: fieldErrors[field],
      }));
    }
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldErrors = validateContactForm(formData);
    setErrors((prev) => ({
      ...prev,
      [field]: fieldErrors[field],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Marcar todos los campos como tocados
    setTouched({
      name: true,
      company: true,
      email: true,
      whatsapp: true,
      message: true,
    });

    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      // Envía a través de la capa abstraída (preparada para Formspree, Resend, Supabase o API propia)
      const result = await submitContactForm(formData);
      if (result.success) {
        setIsSuccess(true);
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      whatsapp: "",
      message: "",
    });
    setErrors({});
    setTouched({});
    setIsSuccess(false);
  };

  return (
    <section
      className="py-24 sm:py-32 bg-[#050505] relative border-t border-white/[0.06] overflow-hidden"
      id="contacto"
    >
      {/* Glow ambiental de fondo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[360px] bg-red-600/[0.04] rounded-full blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-tech-dots opacity-25 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          badge="Contacto Directo"
          badgeVariant="red"
          title="¿Tienes un proyecto en mente?"
          highlightedText="Hagámoslo realidad"
          highlightVariant="red"
          subtitle="Cuéntanos qué quieres construir y exploremos juntos cómo convertirlo en una solución tecnológica."
          align="center"
          className="mb-14 sm:mb-18"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {/* ======================================================== */}
          {/* COLUMNA IZQUIERDA: Alternativa WhatsApp & Confianza B2B */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 space-y-6">
            {/* Card Alternativa WhatsApp */}
            <div className="rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#0e0e13] via-[#09090c] to-[#070709] border border-white/[0.1] relative overflow-hidden group hover:border-red-500/40 transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]">
              {/* Resplandor decorativo de esquina */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-all duration-500 pointer-events-none" />

              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399] animate-pulse" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-semibold">
                  Atención Inmediata
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                ¿Prefieres una respuesta directa?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal mb-6">
                Chatea en tiempo real con nuestro equipo técnico sobre requerimientos, tiempos y alcances sin intermediarios.
              </p>

              {/* Botón Alternativa: "Escríbenos por WhatsApp" */}
              <a
                href={whatsAppDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-zinc-900 border border-white/15 hover:border-emerald-500/50 hover:bg-emerald-950/20 text-white font-medium text-sm transition-all duration-300 group/btn shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
                id="contact-whatsapp-direct-button"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 group-hover/btn:scale-110 transition-transform" />
                <span className="font-semibold tracking-wide">Escríbenos por WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover/btn:text-emerald-400 group-hover/btn:translate-x-0.5 transition-all" />
              </a>

              <div className="mt-4 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Canal oficial B2B</span>
                <span className="text-zinc-400 font-sans">Tiempo resp.: &lt; 2 hrs</span>
              </div>
            </div>

            {/* Canal de Correo & Garantías */}
            <Card variant="glass" className="border-white/[0.08] p-6 space-y-5">
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all group"
                id="contact-email-card"
              >
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-white group-hover:text-red-400 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">
                    Correo Corporativo
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-white truncate">
                    {siteConfig.contact.email}
                  </p>
                </div>
              </a>

              <div className="pt-2 border-t border-white/[0.06] space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block">
                  Compromiso de Ingeniería:
                </span>
                <div className="space-y-2.5 text-xs text-zinc-300">
                  <div className="flex items-start gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>Acuerdo de Confidencialidad (NDA) disponible antes de cualquier intercambio de datos sensibles.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#e50914] flex-shrink-0 mt-0.5" />
                    <span>Diagnóstico de viabilidad técnica y estimación inicial sin costo ni compromiso.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>Arquitectura a medida enfocada en retorno de inversión y escalabilidad operativa.</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* ======================================================== */}
          {/* COLUMNA DERECHA: Formulario de Contacto Principal */}
          {/* ======================================================== */}
          <div className="lg:col-span-7">
            <Card
              variant="glass"
              className="border-white/[0.09] p-6 sm:p-8 relative overflow-hidden"
            >
              {isSuccess ? (
                /* Estado de Éxito / Confirmación */
                <div className="py-10 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300">
                  <div className="h-16 w-16 bg-red-950/40 border border-red-500/50 rounded-2xl flex items-center justify-center mx-auto text-[#e50914] shadow-[0_0_30px_-5px_rgba(229,9,20,0.5)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#e50914] font-semibold block mb-1">
                      Solicitud Recibida
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      ¡Gracias por contactar a DANSUAR TECH!
                    </h3>
                    <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                      Hemos registrado tus requerimientos para <strong className="text-white">{formData.company}</strong>. Un arquitecto de soluciones se comunicará contigo a la brevedad para coordinar la sesión técnica.
                    </p>
                  </div>

                  {/* Acciones de conveniencia */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppFormUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-white transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Reenviar copia a WhatsApp</span>
                    </a>
                    <Button
                      onClick={resetForm}
                      variant="outline"
                      size="sm"
                      className="w-full sm:w-auto"
                    >
                      <span>Enviar otro mensaje</span>
                    </Button>
                  </div>
                </div>
              ) : (
                /* Formulario Principal */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                  noValidate
                  id="contact-project-form"
                >
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                      Formulario de Diagnóstico
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400">
                      * Campos obligatorios
                    </span>
                  </div>

                  {/* Nombre y Empresa */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5"
                      >
                        Nombre *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="contact-name"
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          onBlur={() => handleBlur("name")}
                          placeholder="Tu nombre completo"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900/90 border text-white text-sm placeholder:text-zinc-600 focus:outline-none transition-colors ${
                            errors.name && touched.name
                              ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-zinc-800 focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914]"
                          }`}
                        />
                      </div>
                      {errors.name && touched.name && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Empresa */}
                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5"
                      >
                        Empresa *
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="contact-company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          onBlur={() => handleBlur("company")}
                          placeholder="Nombre de tu empresa"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900/90 border text-white text-sm placeholder:text-zinc-600 focus:outline-none transition-colors ${
                            errors.company && touched.company
                              ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-zinc-800 focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914]"
                          }`}
                        />
                      </div>
                      {errors.company && touched.company && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Correo y WhatsApp */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Correo */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5"
                      >
                        Correo *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="contact-email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          onBlur={() => handleBlur("email")}
                          placeholder="nombre@empresa.com"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900/90 border text-white text-sm placeholder:text-zinc-600 focus:outline-none transition-colors ${
                            errors.email && touched.email
                              ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-zinc-800 focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914]"
                          }`}
                        />
                      </div>
                      {errors.email && touched.email && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label
                        htmlFor="contact-whatsapp"
                        className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5"
                      >
                        WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          id="contact-whatsapp"
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) => handleChange("whatsapp", e.target.value)}
                          onBlur={() => handleBlur("whatsapp")}
                          placeholder="+57 300 000 0000"
                          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900/90 border text-white text-sm placeholder:text-zinc-600 focus:outline-none transition-colors ${
                            errors.whatsapp && touched.whatsapp
                              ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                              : "border-zinc-800 focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914]"
                          }`}
                        />
                      </div>
                      {errors.whatsapp && touched.whatsapp && (
                        <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.whatsapp}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5"
                    >
                      Mensaje *
                    </label>
                    <div className="relative">
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        onBlur={() => handleBlur("message")}
                        placeholder="Cuéntanos brevemente qué deseas desarrollar, automatizar o integrar en tu operación..."
                        className={`w-full px-4 py-3 rounded-xl bg-zinc-900/90 border text-white text-sm placeholder:text-zinc-600 focus:outline-none transition-colors resize-none ${
                          errors.message && touched.message
                            ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500"
                            : "border-zinc-800 focus:border-[#e50914] focus:ring-1 focus:ring-[#e50914]"
                        }`}
                      />
                    </div>
                    {errors.message && touched.message && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Botón Principal: "Hablar con DANSUAR TECH" */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full justify-center group glow-red-button cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                      id="submit-contact-button"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          <span>Procesando solicitud...</span>
                        </span>
                      ) : (
                        <span className="flex items-center gap-2 font-semibold">
                          <span>Hablar con DANSUAR TECH</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </div>

                  {/* Micro texto de seguridad */}
                  <p className="text-[11px] text-zinc-400 text-center font-mono pt-1">
                    Información protegida bajo estrictos estándares de confidencialidad empresarial.
                  </p>
                </form>
              )}
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}

