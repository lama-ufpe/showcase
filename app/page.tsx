"use client"
import { CountdownTimer } from "@/components/countdown-timer"
import { Instagram } from "lucide-react"

export default function Home() {
  const targetDate = new Date("2026-02-23T00:00:00")

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#B29EE7] via-[#8B7BD8] to-[#C3FE4C] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#232222] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FFC600] rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-12 pb-16 md:pt-20 md:pb-24">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#232222] mb-4 tracking-tight text-balance">
              <span>{"Processo Seletivo"}</span>
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#FFC600]">{"LAMA 2026"}</span>
              <img
                src="/images/icone-lama-removebg-preview.png"
                alt="LAMA Icon"
                className="h-[4.5rem] md:h-[5.5rem] lg:h-[6.6rem] w-auto object-contain"
              />
            </div>

            <p className="text-lg md:text-xl lg:text-2xl text-[#232222] max-w-3xl mx-auto leading-relaxed text-pretty">
              {"A LAMA é um espaço de construção, impacto e colaboração no ecossistema do CIn."}
              <br />
              <strong>{"Acompanhe nossas novidades e faça parte do próximo ciclo!"}</strong>
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl mb-16 border-4 border-[#FFC600]">
            <h2 className="text-2xl md:text-3xl font-bold text-[#232222] mb-6 text-center">{"Nossa Missão 🌟"}</h2>
            <div className="space-y-4 text-base md:text-lg text-[#232222]/90">
              <p className="leading-relaxed">
                {
                  "A LAMA nasce da diversidade, da inconformidade e da experimentação. Não nos limitamos a uma área: conectamos tecnologia, arte e comunidade para criar soluções disruptivas, éticas e com impacto real."
                }
              </p>
              <p className="leading-relaxed">
                {
                  "Acreditamos que transformações significativas acontecem quando diferentes saberes se encontram. Por isso, rompemos os limites da academia e construímos pontes entre universidades, territórios e comunidades."
                }
              </p>
              <p className="leading-relaxed">
                {
                  "Partimos de um norte: Interação Humano-Computador (IHC), para trazer sensibilidade e colocar pessoas no centro do projeto; Visualização de Dados, para transformar informação em impacto imediato e ação; Criatividade Computacional, para prototipar e escalar soluções grandes e ousadas. São pontos de partida, não limites."
                }
              </p>
              <p className="leading-relaxed font-semibold text-[#B29EE7]">
                {"Somos solo fértil onde ideias se encontram, crescem e geram transformação. 🌱"}
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[#232222] text-center mb-8">
              {"⏳ Divulgação do PS em:"}
            </h2>
            <CountdownTimer targetDate={targetDate} />
          </div>

          <div className="text-center">
            <a
              href="https://www.instagram.com/lamaufpe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FFC600] hover:bg-[#FFD633] text-[#232222] font-bold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-2xl"
            >
              <Instagram className="w-6 h-6" />
              {"Siga @lamaufpe no Instagram 💜"}
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#232222]/20 py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-[#232222]/70 text-sm">
              {"© 2026 LAMA - Liga Acadêmica de Mídias e Arte"}
              <br />
              {"Centro de Informática - UFPE"}
            </p>
          </div>
        </footer>
      </div>
    </main>
  )
}
