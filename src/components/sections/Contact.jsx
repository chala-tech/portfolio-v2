import { socials } from "../../data/socials";

export default function Contact() {
  return (
    <section className="w-full bg-bg-soft px-6 py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold text-text md:text-3xl">Let's Connect</h2>
        <p className="mt-2 text-text-muted">Feel free to reach out through any of these platforms.</p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/10 px-5 py-2 text-sm text-text-muted transition hover:border-accent hover:text-accent">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}