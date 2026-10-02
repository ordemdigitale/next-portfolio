import { aboutHighlights } from "@/lib/data";

export function About() {
    return (
        <section id="a-propos" className="mx-auto max-w-7xl px-6 py-24 lg:px-12 font-poppins">
            <span className="rounded-full bg-peach-100/70 px-3 py-1 text-xs font-bold uppercase tracking-widest text-peach-600">
                À Propos
            </span>
            <h2 className="mt-3 mb-6 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Je construis avec du code, <br />
            <span className="text-charcoal/60">
                je réfléchis en solutions.
            </span>
            </h2>

            <div className="max-w-full space-y-4 text-base leading-relaxed text-muted-text">
                <p>
                    Je m&apos;appelle <strong>Lionel Dabo</strong>, et je suis développeur logiciel.
                    Ce qui m'intéresse avant tout, c'est de transformer une idée ou 
                    un problème concret en une solution qui fonctionne réellement.
                </p>
                <p>
                    J'aime comprendre comment les choses fonctionnent, concevoir une architecture cohérente,
                    écrire du code propre et construire des applications capables d'évoluer dans le temps.
                    Je porte également une attention particulière à l'interface et à l'expérience utilisateur,
                    non pas comme designer, mais comme développeur soucieux de la façon dont son logiciel est réellement utilisé.
                </p>
            </div>
        
            <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                <span className="text-lg font-bold text-peach-500">✓</span>
                <div>
                    <h4 className="text-sm font-bold text-charcoal">
                    {item.title}
                    </h4>
                    <p className="text-xs text-muted-text">{item.description}</p>
                </div>
                </div>
            ))}
            </div>    
        </section>
    );
}
