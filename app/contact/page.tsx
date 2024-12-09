"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MailIcon, PhoneIcon, MapPinIcon } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <main className="bg-slate-900 min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-transparent bg-clip-text">
          Contact
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="p-6 bg-slate-900/50 border-white/10 backdrop-blur-sm">
            <h2 className="text-2xl font-semibold mb-6 text-white">Me Contacter</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">
                  Nom
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-slate-800/50 border-white/10 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-slate-800/50 border-white/10 text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-slate-800/50 border-white/10 text-white"
                  rows={6}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-white">
                Envoyer
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 bg-slate-900/50 border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <MailIcon className="w-6 h-6 text-blue-500" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Email</h3>
                  <p className="text-white/70">contact@example.com</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-slate-900/50 border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <PhoneIcon className="w-6 h-6 text-violet-500" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Téléphone</h3>
                  <p className="text-white/70">+33 6 XX XX XX XX</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 bg-slate-900/50 border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <MapPinIcon className="w-6 h-6 text-pink-500" />
                <div>
                  <h3 className="text-lg font-semibold text-white">Localisation</h3>
                  <p className="text-white/70">France</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}