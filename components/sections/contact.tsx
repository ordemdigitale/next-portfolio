"use client";

import { useState } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { contactInfo } from "@/lib/data";

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState(contactInfo.subjects[0].value);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — fail silently
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(
      "Merci pour votre message ! Lionel vous répondra dans les plus brefs délais."
    );
    event.currentTarget.reset();
    setSubject(contactInfo.subjects[0].value);
  }

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-12 font-poppins">
      <div className="relative overflow-hidden rounded-[2.5rem] border border-charcoal-soft bg-charcoal p-8 text-canvas shadow-2xl sm:p-12 lg:p-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-peach-500/15 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Info column */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-peach-300 uppercase">
                Un projet en tête ?
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
                Travaillons <br />
                  ensemble.
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-stone-400 sm:text-base">
                Vous avez une application à développer, un outil métier à concevoir ou
                besoin de renforcer votre équipe avec un développeur fullstack ?
               <strong>Échangeons sur votre projet et voyons comment lui donner vie</strong>.
              </p>
            </div>

            <div className="space-y-4">
              <div className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:border-peach-400/50">
                <div className="flex items-center gap-3">
                  <span className="text-lg">✉️</span>
                  <div>
                    <span className="block text-xs text-stone-400">
                      Adresse Email
                    </span>
                    <span className="font-mono text-sm font-medium text-white sm:text-base">
                      {contactInfo.email}
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  title="Copier l'email"
                  className="rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-stone-300 transition-all hover:bg-peach-500 hover:text-white data-[copied=true]:bg-peach-500 data-[copied=true]:text-white"
                  data-copied={copied}
                >
                  {copied ? "Copié !" : "Copier"}
                </button>
              </div>

              <div className="flex items-center gap-3 text-xs text-stone-300 sm:text-sm">
                {contactInfo.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
                  >
                    <span>{link.label}</span> {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8 lg:col-span-7">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Votre Nom</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="ex. Alexandre Martin"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Votre Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="alexandre@entreprise.com"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">Objet du projet</Label>
                <Select
                  name="subject"
                  value={subject}
                  onValueChange={setSubject}
                >
                  <SelectTrigger id="subject">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {contactInfo.subjects.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message">Votre Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Décrivez brièvement vos objectifs, délais et contexte..."
                  required
                />
              </div>

              <Button type="submit" variant="peach" className="w-full cursor-pointer">
                <span>Envoyer le message</span>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
