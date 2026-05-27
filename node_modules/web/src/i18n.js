import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      nav: {
        home: "Home",
        colecao: "Coleção",
        sobre: "Sobre",
        contato: "Contato"
      },
      hero: {
        title: "Lumina",
        subtitle: "Elegância em cada detalhe",
        cta: "Ver Coleção"
      },
      colecao: {
        title: "Coleção em Destaque",
        subtitle: "Descubra peças exclusivas que combinam sofisticação e conforto",
        products: {
            p1: "Vestido Midi Elegância",
            p2: "Blusa Seda Premium",
            p3: "Calça Cintura Alta",
            p4: "Blazer Sofisticado",
            p5: "Vestido Noite Luxo",
            p6: "Blusa Linho Puro"
        }
      },
      maisVendidos: {
        title: "Mais Vendidos",
        subtitle: "As peças favoritas das nossas clientes",
        products: {
            p1: "Vestido Midi Clássico",
            p2: "Conjunto Alfaiataria",
            p3: "Vestido Longo Festa",
            p4: "Camisa Seda Pura"
        }
      },
      sobre: {
        title: "Sobre a Lumina",
        p1: "Lumina nasceu da paixão por moda feminina sofisticada. Cada peça é cuidadosamente selecionada para refletir elegância, qualidade e estilo atemporal.",
        p2: "Acreditamos que a verdadeira beleza está nos detalhes. Por isso, trabalhamos apenas com tecidos premium e designs que valorizam a silhueta feminina, criando peças que se tornam investimentos duradouros no seu guarda-roupa."
      },
      depoimentos: {
        title: "O Que Dizem Nossas Clientes",
        subtitle: "Experiências reais de quem confia na Lumina",
        t1: "A qualidade das peças da Lumina é incomparável. Cada detalhe é pensado com cuidado e o caimento é perfeito. Já comprei três vestidos e todos se tornaram minhas peças favoritas.",
        t2: "Fiquei impressionada com o atendimento personalizado e a elegância das roupas. O tecido é de primeira qualidade e o estilo é exatamente o que eu procurava para o meu guarda-roupa.",
        t3: "Comprei um blazer para uma reunião importante e recebi tantos elogios! A Lumina entende perfeitamente o que é sofisticação sem perder o conforto. Recomendo de olhos fechados.",
        t4: "Cada peça que compro na Lumina se torna um investimento no meu estilo. A durabilidade é excepcional e o design atemporal faz com que eu use as roupas por anos sem cansar."
      },
      footer: {
        slogan: "Elegância em cada detalhe",
        links: "Links Rápidos",
        contact: "Contato",
        social: "Redes Sociais",
        rights: "Lumina © 2026. Todos os direitos reservados.",
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço"
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        colecao: "Collection",
        sobre: "About",
        contato: "Contact"
      },
      hero: {
        title: "Lumina",
        subtitle: "Elegance in every detail",
        cta: "View Collection"
      },
      colecao: {
        title: "Featured Collection",
        subtitle: "Discover exclusive pieces that combine sophistication and comfort",
        products: {
            p1: "Elegance Midi Dress",
            p2: "Premium Silk Blouse",
            p3: "High Waist Pants",
            p4: "Sophisticated Blazer",
            p5: "Luxury Night Dress",
            p6: "Pure Linen Blouse"
        }
      },
      maisVendidos: {
        title: "Best Sellers",
        subtitle: "Our clients' favorite pieces",
        products: {
            p1: "Classic Midi Dress",
            p2: "Tailoring Set",
            p3: "Long Party Dress",
            p4: "Pure Silk Shirt"
        }
      },
      sobre: {
        title: "About Lumina",
        p1: "Lumina was born from a passion for sophisticated women's fashion. Each piece is carefully selected to reflect elegance, quality, and timeless style.",
        p2: "We believe that true beauty lies in the details. That is why we only work with premium fabrics and designs that enhance the female silhouette, creating pieces that become lasting investments in your wardrobe."
      },
      depoimentos: {
        title: "What Our Clients Say",
        subtitle: "Real experiences from those who trust Lumina",
        t1: "The quality of Lumina's pieces is unmatched. Every detail is carefully thought out and the fit is perfect. I have already bought three dresses and they have all become my favorite pieces.",
        t2: "I was impressed with the personalized service and the elegance of the clothes. The fabric is top quality and the style is exactly what I was looking for for my wardrobe.",
        t3: "I bought a blazer for an important meeting and received so many compliments! Lumina perfectly understands what sophistication is without losing comfort. I highly recommend it.",
        t4: "Every piece I buy at Lumina becomes an investment in my style. The durability is exceptional and the timeless design means I wear the clothes for years without getting tired."
      },
      footer: {
        slogan: "Elegance in every detail",
        links: "Quick Links",
        contact: "Contact",
        social: "Social Media",
        rights: "Lumina © 2026. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms of Service"
      }
    }
  }
};

const getBrowserLanguage = () => {
  const lang = navigator.language || navigator.userLanguage;
  return lang.toLowerCase().startsWith('pt') ? 'pt' : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getBrowserLanguage(),
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
