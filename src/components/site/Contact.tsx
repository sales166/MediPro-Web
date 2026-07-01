import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(4, "Phone is required").max(30),
  organization: z.string().trim().max(150).optional().or(z.literal("")),
  inquiry: z.string().min(1, "Please select an inquiry type"),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type FormValues = z.infer<typeof schema>;

const googleForm = {
  actionUrl: import.meta.env.VITE_GOOGLE_FORM_ACTION_URL,
  fields: {
    name: import.meta.env.VITE_GOOGLE_FORM_ENTRY_NAME,
    email: import.meta.env.VITE_GOOGLE_FORM_ENTRY_EMAIL,
    phone: import.meta.env.VITE_GOOGLE_FORM_ENTRY_PHONE,
    organization: import.meta.env.VITE_GOOGLE_FORM_ENTRY_ORGANIZATION,
    inquiry: import.meta.env.VITE_GOOGLE_FORM_ENTRY_INQUIRY,
    message: import.meta.env.VITE_GOOGLE_FORM_ENTRY_MESSAGE,
  },
};

const inquiryTypes = [
  "Medical Supplies",
  "Equipment Inquiry",
  "PSI Services",
  "Partnership",
  "General Inquiry",
];

const info = [
  {
    icon: MapPin,
    title: "Address",
    lines: ["P.O Box: 111, Postal Code: 111", "Sultanate of Oman", "C.R No: 1571163"],
  },
  { icon: Phone, title: "Phone", lines: ["+968 97409370", "+968 95405885"] },
  { icon: Mail, title: "Email", lines: ["mediprobypsi@gmail.com","sales@psimedipro.com"] },
  {
    icon: Clock,
    title: "Working Hours",
    lines: ["Sunday to Saturday", "08:30 – 12:30", "04:00 – 8:00"],
  },
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", organization: "", inquiry: "", message: "" },
  });

  const inquiry = watch("inquiry");

  const onSubmit = async (values: FormValues) => {
    setSubmitting(true);

    try {
      if (!googleForm.actionUrl || Object.values(googleForm.fields).some((field) => !field)) {
        throw new Error("Google Form is not configured");
      }

      const body = new FormData();
      body.append(googleForm.fields.name, values.name);
      body.append(googleForm.fields.email, values.email);
      body.append(googleForm.fields.phone, values.phone);
      body.append(googleForm.fields.organization, values.organization || "");
      body.append(googleForm.fields.inquiry, values.inquiry);
      body.append(googleForm.fields.message, values.message);

      await fetch(googleForm.actionUrl, {
        method: "POST",
        mode: "no-cors",
        body,
      });

      toast.success("Message sent", { description: "We'll get back to you shortly." });
      reset();
    } catch {
      toast.error("Message not sent", {
        description: "Please try again or email us directly at mediprobypsi@gmail.com.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-muted/40 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="We're Here to Help Your Healthcare Facility"
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="space-y-4 lg:col-span-2">
            {info.map(({ icon: Icon, title, lines }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-card"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {title}
                  </div>
                  <div className="mt-1 space-y-0.5 text-sm text-foreground">
                    {lines.map((l) => (
                      <div key={l}>{l}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8 lg:col-span-3"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your Name" error={errors.name?.message}>
                <Input {...register("name")} placeholder="John Doe" />
              </Field>
              <Field label="Your Email" error={errors.email?.message}>
                <Input type="email" {...register("email")} placeholder="you@example.com" />
              </Field>
              <Field label="Phone Number" error={errors.phone?.message}>
                <Input {...register("phone")} placeholder="+968 0000 0000" />
              </Field>
              <Field label="Organization" error={errors.organization?.message}>
                <Input {...register("organization")} placeholder="Hospital / Clinic / Company" />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Inquiry Type" error={errors.inquiry?.message}>
                  <Select value={inquiry || undefined} onValueChange={(v) => setValue("inquiry", v, { shouldValidate: true })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((t) => (
                        <SelectItem key={t} value={t}>
                          {t}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Your Message" error={errors.message?.message}>
                  <Textarea {...register("message")} rows={5} placeholder="How can we help?" />
                </Field>
              </div>
            </div>

            <Button type="submit" size="lg" disabled={submitting} className="mt-6 w-full rounded-full sm:w-auto">
              {submitting ? "Sending..." : (
                <>
                  Send Message <Send className="ml-1.5 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label className="mb-1.5 block text-sm font-medium text-foreground">{label}</Label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
