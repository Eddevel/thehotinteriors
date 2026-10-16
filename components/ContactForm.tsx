'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' }
    });

    if (res.ok) {
      toast.success("Thank you! We'll contact you soon.");
      (e.target as HTMLFormElement).reset();
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <Input name="name" placeholder="Full Name" required />
        <Input name="email" type="email" placeholder="Email Address" required />
      </div>
      <Input name="phone" placeholder="Phone Number" />
      
      <Select name="projectType">
        <SelectTrigger>
          <SelectValue placeholder="Project Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Residential">Residential</SelectItem>
          <SelectItem value="Commercial">Commercial</SelectItem>
          <SelectItem value="Renovation">Renovation</SelectItem>
          <SelectItem value="Consultation">Consultation</SelectItem>
          <SelectItem value="3D Visualization">3D Visualization</SelectItem>
        </SelectContent>
      </Select>

      <Input name="budget" placeholder="Approximate Budget (USD)" />

      <Textarea name="message" placeholder="Tell us about your vision..." rows={6} required />

      <Button type="submit" size="lg" className="w-full bg-primary text-black hover:bg-primary/90" disabled={loading}>
        {loading ? "Sending..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}