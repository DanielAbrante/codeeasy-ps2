import { Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerLinks = {
    coleção: ['AthenaENV', 'Tyra', 'Jogos 2D', 'Jogos Plataforma'],
    suporte: ['Como Contribuir', 'Como avaliar um código'],
    contato: ['Discord']
  }

  return (
    <footer className="bg-dark-secondary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24">

        <div className="flex flex-wrap gap-12 justify-between">
          <div className="flex-1 min-w-[250px] max-w-[400px]">
            <div className="flex flex-col gap-2 mb-2">
              <div className='flex items-center gap-2'>
                <Flame fill='#e0e0e0 ' className='text-light-gray' />
                <span className="text-light-gray font-bold text-xl">PlayForge</span>
              </div>
              <p className="text-light-gray">
                Criado por Desenvolvedores para desenvolvedores
              </p>
            </div>
            <p className="text-neutral-gray text-[12px] mt-4">
              Nossa plataforma foi criada para ajudar desenvolvedores a compartilharem tempo,
              experiência e código. Com snippets prontos e revisados pela comunidade, você
              economiza seu tempo com PS2 da forma mais rápida e eficiente.
            </p>
          </div>

          <div className="flex flex-wrap gap-24">
            {Object.entries(footerLinks).map(([title, links], index) => (
              <div key={index} className="min-w-[150px]">
                <h3 className="text-light-gray font-semibold uppercase mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link}>
                      <Link to="#" className="text-neutral-gray text-sm hover:text-primary transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 px-4 sm:px-6 lg:px-8 border-t border-dark-gray">
          <p className="text-neutral-gray text-sm text-center">
            © 2024 NOME | Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>

  )
}

export default Footer