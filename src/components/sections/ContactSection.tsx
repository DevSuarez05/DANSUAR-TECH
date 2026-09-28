"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { ContactFormData, ContactFormErrors } from "@/types";
import {
  getWhatsAppUrl,
  getWhatsAppFormUrl,
  formatWhatsAppDisplay,
  validateContactForm,
  submitContactForm,
} from "@/lib/contact";
import {
  Mail,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Building2,
  User,
  Phone,
  AlertCircle,
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
  const whatsAppDirectUrl = getWhatsAppUrl();
  const whatsAppDisplayNumber = formatWhatsAppDisplay();

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto">
          {/* ======================================================== */}
          {/* COLUMNA IZQUIERDA: Formulario de Contacto Principal */}
          {/* ======================================================== */}
          <div className="lg:col-span-7 flex flex-col">
            <Card
              variant="glass"
              className="border-white/[0.09] p-6 sm:p-8 relative overflow-hidden flex-1 flex flex-col justify-between"
            >
              {isSuccess ? (
                /* Estado de Éxito / Confirmación */
                <div className="py-10 px-4 text-center space-y-5 animate-in fade-in zoom-in-95 duration-300 my-auto">
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
                      Hemos registrado tus requerimientos para <strong className="text-white">{formData.company}</strong>. Un arquitecto de soluciones se comunicará contigo a la brevedad.
                    </p>
                  </div>

                  {/* Acciones de conveniencia */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={getWhatsAppFormUrl(formData)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-white/10 hover:border-red-500/40 text-xs font-mono text-white transition-colors"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 text-[#25D366]" />
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
                  className="space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between"
                  noValidate
                  id="contact-project-form"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] mb-4">
                      <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">
                        Formulario de Diagnóstico
                      </span>
                      <span className="text-[11px] font-mono text-zinc-400">
                        * Campos obligatorios
                      </span>
                    </div>

                    {/* Nombre y Empresa */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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
                          placeholder="Cuéntanos qué quieres construir y exploremos juntos cómo convertirlo en una solución tecnológica..."
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
                    <p className="text-[11px] text-zinc-500 text-center font-mono pt-2">
                      Información protegida bajo estrictos estándares de confidencialidad empresarial.
                    </p>
                  </div>
                </form>
              )}
            </Card>
          </div>

          {/* ======================================================== */}
          {/* COLUMNA DERECHA: TARJETA VISUAL PREMIUM (LOGO REAL + WHATSAPP + EMAIL) */}
          {/* ======================================================== */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#0e0e13] via-[#09090c] to-[#060608] border border-red-500/25 hover:border-red-500/40 shadow-[0_0_35px_-10px_rgba(229,9,20,0.22)] transition-all duration-300 relative overflow-hidden flex-1 flex flex-col justify-between group">
              {/* Resplandor superior sutil */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e50914]/60 to-transparent" />
              <div className="absolute -top-20 -right-20 w-44 h-44 bg-red-600/[0.08] rounded-full blur-3xl pointer-events-none group-hover:bg-red-600/[0.14] transition-all duration-500" />

              <div>
                {/* 1. LOGO REAL + IDENTIDAD */}
                <div className="flex items-center gap-4 pb-6 border-b border-white/[0.08]">
                  <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl overflow-hidden border border-white/15 bg-black p-[1px] shadow-[0_0_24px_-4px_rgba(229,9,20,0.4)] flex-shrink-0 group-hover:border-red-500/50 group-hover:shadow-[0_0_28px_-3px_rgba(229,9,20,0.55)] transition-all">
                    <Image
                      src="/branding/dansuar-tech-logo.jpg"
                      alt="Logo DANSUAR TECH"
                      width={72}
                      height={72}
                      className="w-full h-full object-cover rounded-[14px]"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1">
                      DANSUAR<span className="text-[#e50914]">.</span>TECH
                    </h3>
                    <p className="text-xs text-zinc-400 leading-snug mt-1 font-mono">
                      Impulsando negocios con software e inteligencia artificial.
                    </p>
                  </div>
                </div>

                {/* 2. BLOQUE WHATSAPP */}
                <div className="py-6 border-b border-white/[0.08] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#e50914] font-semibold flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e50914] shadow-[0_0_6px_#e50914] animate-pulse" />
                      WHATSAPP
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">Atención Directa</span>
                  </div>

                  {/* Número visible clicable */}
                  <a
                    href={whatsAppDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl sm:text-2xl font-mono font-bold text-white hover:text-red-400 transition-colors block tracking-tight"
                    id="contact-whatsapp-display-link"
                  >
                    {whatsAppDisplayNumber}
                  </a>

                  {/* Botón: Escribir por WhatsApp con el logo oficial de WhatsApp */}
                  <a
                    href={whatsAppDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-zinc-900 border border-red-500/30 hover:border-red-500/70 hover:bg-zinc-800 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_20px_-6px_rgba(229,9,20,0.3)] hover:shadow-[0_0_28px_-3px_rgba(229,9,20,0.5)] group/btn"
                    id="contact-card-whatsapp-button"
                  >
                    <WhatsAppIcon className="w-5 h-5 text-[#25D366] group-hover/btn:scale-110 transition-transform flex-shrink-0" />
                    <span>Escribir por WhatsApp</span>
                    <ArrowRight className="w-4 h-4 text-zinc-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                  </a>
                </div>

                {/* 3. BLOQUE CORREO ELECTRÓNICO */}
                <div className="py-6 border-b border-white/[0.08] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-zinc-400" />
                      CORREO ELECTRÓNICO
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400">Canal Institucional</span>
                  </div>

                  {/* Correo visible clicable */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-base sm:text-lg font-mono font-semibold text-zinc-200 hover:text-white transition-colors block break-all"
                    id="contact-card-email-link"
                  >
                    {siteConfig.contact.email}
                  </a>

                  {/* Botón: Enviar correo */}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-zinc-900/90 border border-white/10 hover:border-white/25 hover:bg-zinc-800 text-zinc-200 hover:text-white font-medium text-sm transition-all duration-300 group/mail"
                    id="contact-card-email-button"
                  >
                    <Mail className="w-4 h-4 text-zinc-400 group-hover/mail:text-white transition-colors flex-shrink-0" />
                    <span>Enviar correo</span>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover/mail:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* 4. GARANTÍAS DE ATENCIÓN CORPORATIVA */}
              <div className="pt-6 space-y-2.5">
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Acuerdo de Confidencialidad (NDA) antes de revisar datos.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Clock className="w-4 h-4 text-[#e50914] flex-shrink-0" />
                  <span>Tiempo de respuesta promedio: menos de 2 horas.</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-300">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Diagnóstico y viabilidad técnica 100% gratuita.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
