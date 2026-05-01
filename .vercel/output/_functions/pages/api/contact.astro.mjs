import '../../chunks/_astro_content_DVImGiTz.mjs';
import 'resend';
import * as z from 'zod';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const ContactInput = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Valid email is required").max(200),
  company: z.string().trim().max(160).optional().default(""),
  role: z.string().trim().max(120).optional().default(""),
  interest: z.array(z.string().max(80)).max(10).default([]),
  message: z.string().trim().min(1, "Message is required").max(5e3)
});
const redirectTo = (origin, status, anchor = "contact") => new Response(null, {
  status: 303,
  headers: { Location: `${origin}/contact?contact_status=${status}#${anchor}` }
});
const POST = async ({ request, url }) => {
  const origin = url.origin;
  let form;
  try {
    form = await request.formData();
  } catch {
    return redirectTo(origin, "error");
  }
  const honeypot = form.get("website") ?? "";
  if (honeypot.trim() !== "") {
    return redirectTo(origin, "success");
  }
  const raw = {
    name: form.get("name") ?? "",
    email: form.get("email") ?? "",
    company: form.get("company") ?? "",
    role: form.get("role") ?? "",
    interest: form.getAll("interest").map(String),
    message: form.get("message") ?? ""
  };
  const parsed = ContactInput.safeParse(raw);
  if (!parsed.success) {
    return redirectTo(origin, "error");
  }
  parsed.data;
  {
    console.error("[contact] RESEND_API_KEY missing in production");
    return redirectTo(origin, "error");
  }
};
const ALL = ({ url }) => new Response("Method Not Allowed", {
  status: 405,
  headers: { Allow: "POST", Location: `${url.origin}/contact` }
});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  ALL,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
