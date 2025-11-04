import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#1e184f] via-[#2f277a] to-[#3d31a8] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div className="space-y-4">       
            <div className="flex items-center space-x-3">
              <Image
                src="/av.png"
                alt="Simplifica Brasil Logo"
                width={220}
                height={64}
                className="drop-shadow-[0_3px_6px_rgba(0,0,0,0.3)]"
                priority
              />
            </div>
            <span className="text-[#e6e4ff] text-medium">
              Educação Técnica de Excelência
            </span>
            <p className="text-sm text-white/80 leading-relaxed pt-2">
              Transformando vidas através da educação. Construindo profissionais
              do futuro com competência e inovação.
            </p>

            <div className="flex space-x-4 pt-2">
              <a
                href="https://www.instagram.com/simplificabrasiltec.oficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-white hover:text-[#e6e4ff] transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-[#e6e4ff] mb-4 text-lg">
              Cursos
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#cursos" className="hover:text-[#e6e4ff]">
                  Área da Saúde
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#e6e4ff]">
                  Administração & Gestão
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#e6e4ff]">
                  Tecnologia e Informática
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#e6e4ff]">
                  Engenharia & Manutenção
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#e6e4ff]">
                  Construção e Infraestrutura
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-[#e6e4ff] mb-4 text-lg">
              Links Úteis
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a href="#inicio" className="hover:text-[#e6e4ff]">
                  Início
                </a>
              </li>
              <li>
                <a href="#cursos" className="hover:text-[#e6e4ff]">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#e6e4ff]">
                  Contato
                </a>
              </li>
              <li>
                <a href="#Certificado" className="hover:text-[#e6e4ff]">
                  Certificação
                </a>
              </li>
              <li>
                <a href="/sistec" className="hover:text-[#e6e4ff]">
                  SISTEC-MEC
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#e6e4ff] mb-4 text-lg">
              Entre em Contato
            </h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-1 text-[#e6e4ff]" />
                <span>
                  R. Luiz Rodrigues dos Santos, 44 <br />
                  Cel. Fabriciano - MG
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#e6e4ff]" />
                <a
                  href="mailto:gestaoavancatec@gmail.com"
                  className="hover:text-[#e6e4ff]"
                >
                  Simplificabrasil.oficial@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#e6e4ff]" />
                <a href="tel:+5531973322570" className="hover:text-[#e6e4ff]">
                  (31) 97332-2570
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Simplifica Brasil. Todos os direitos
            reservados.
          </p>
            <p className="text-sm text-white/70">CNPJ: 63.461.778/0001-18</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
