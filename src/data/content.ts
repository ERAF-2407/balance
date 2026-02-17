export type Content = {
    nav: {
        manifesto: string;
        whoWeAre: string;
        services: string;
        contact: string;
    };
    hero: {
        title: string;
        subtitle: string;
        subtext: string;
        cta: string;
    };
    manifesto: {
        title: string;
        text: string;
    };
    whoWeAre: {
        title: string;
        description: string;
        teamTitle: string;
        team: string[];
        location: string;
        focus: string;
    };
    services: {
        title: string;
        description: string;
        items: {
            title: string;
            description: string;
        }[];
        modalities: {
            title: string;
            items: string[];
        };
        differential: string;
    };
    contact: {
        title: string;
        description: string;
        form: {
            name: string;
            company: string;
            email: string;
            message: string;
            submit: string;
        };
    };
    footer: {
        tagline: string;
    };
};

export const content: Record<"es" | "en", Content> = {
    es: {
        nav: {
            manifesto: "Manifiesto",
            whoWeAre: "Nosotros",
            services: "Servicios",
            contact: "Contacto",
        },
        hero: {
            title: "BALANCE",
            subtitle: "Mind & Body Matters",
            subtext: "Health, Wellness & Consciousness (HWC) for Organizations",
            cta: "Descubrir Más",
        },
        manifesto: {
            title: "Manifiesto",
            text: "En BALANCE creemos que el verdadero rendimiento sostenible nace del equilibrio entre mente y cuerpo. En un mundo corporativo marcado por la presión, la velocidad y la incertidumbre, el bienestar dejó de ser un beneficio accesorio para convertirse en un factor estratégico de competitividad, liderazgo y cultura organizacional. Mind & Body Matters no es solo nuestro slogan. Es nuestra convicción: cuando las personas están mejor, las organizaciones funcionan mejor.",
        },
        whoWeAre: {
            title: "Quiénes Somos",
            description: "BALANCE es una firma boutique especializada en Bienestar, Salud Mental y Desarrollo Humano para organizaciones. Nacemos desde el mundo de la consultoría en Recursos Humanos, con una mirada moderna, integradora y basada en evidencia.",
            teamTitle: "Equipo Multidisciplinario",
            team: [
                "Consultores en Recursos Humanos y Desarrollo Organizacional",
                "Psicólogos especializados en salud mental y comportamiento",
                "Profesores de Yoga y prácticas cuerpo-mente",
                "Especialistas certificados en Mindfulness y Meditación",
            ],
            location: "Operamos en Argentina, Chile, México y España.",
            focus: "Nuestro enfoque es boutique: pocos clientes, alto nivel de personalización, excelencia profesional y acompañamiento cercano.",
        },
        services: {
            title: "Qué Hacemos",
            description: "Diseñamos e implementamos soluciones de bienestar corporativo alineadas a la estrategia, la cultura y los objetivos de cada empresa.",
            items: [
                {
                    title: "Charlas y Conferencias",
                    description: "Intervenciones inspiradoras y de alto impacto sobre bienestar, salud mental, liderazgo consciente y performance sostenible.",
                },
                {
                    title: "Workshops",
                    description: "Talleres prácticos y experienciales: regulación emocional, foco, manejo del estrés y comunicación consciente.",
                },
                {
                    title: "Programas de Bienestar",
                    description: "Programas estructurados y a medida, con objetivos claros y medición de impacto.",
                },
                {
                    title: "Retiros Corporativos",
                    description: "Experiencias inmersivas para equipos directivos. Espacios de pausa estratégica para reconectar y redefinir prioridades.",
                },
            ],
            modalities: {
                title: "Modalidades",
                items: ["Online", "Presencial", "Híbrido"],
            },
            differential: "Nuestro diferencial: combinamos rigurosidad profesional, enfoque humano y orientación a resultados de negocio.",
        },
        contact: {
            title: "Contacto",
            description: "Si tu organización quiere dar un paso real hacia una cultura de bienestar y rendimiento sostenible, estamos listos para acompañarte.",
            form: {
                name: "Nombre",
                company: "Empresa",
                email: "Email",
                message: "Mensaje",
                submit: "Enviar Mensaje",
            },
        },
        footer: {
            tagline: "Health, Wellness & Consciousness for Organizations",
        },
    },
    en: {
        nav: {
            manifesto: "Manifesto",
            whoWeAre: "About Us",
            services: "Services",
            contact: "Contact",
        },
        hero: {
            title: "BALANCE",
            subtitle: "Mind & Body Matters",
            subtext: "Health, Wellness & Consciousness (HWC) for Organizations",
            cta: "Discover More",
        },
        manifesto: {
            title: "Manifesto",
            text: "At BALANCE, we believe that true sustainable performance is born from the balance between mind and body. In a corporate world marked by pressure, speed, and uncertainty, wellness has ceased to be an accessory benefit to become a strategic factor of competitiveness, leadership, and organizational culture. Mind & Body Matters is not just our slogan. It is our conviction: when people are better, organizations work better.",
        },
        whoWeAre: {
            title: "Who We Are",
            description: "BALANCE is a boutique firm specialized in Wellness, Mental Health, and Human Development for organizations. We operate from the world of Human Resources consulting, with a modern, integrative, and evidence-based perspective.",
            teamTitle: "Multidisciplinary Team",
            team: [
                "HR and Organizational Development Consultants",
                "Psychologists specialized in mental health and behavior",
                "Yoga and body-mind practice teachers",
                "Certified Mindfulness and Meditation Specialists",
            ],
            location: "We operate in Argentina, Chile, Mexico, and Spain.",
            focus: "Our approach is boutique: few clients, high level of personalization, professional excellence, and close accompaniment.",
        },
        services: {
            title: "What We Do",
            description: "We design and implement corporate wellness solutions aligned with the strategy, culture, and objectives of each company.",
            items: [
                {
                    title: "Talks & Conferences",
                    description: "Inspiring and high-impact interventions on wellness, mental health, conscious leadership, and sustainable performance.",
                },
                {
                    title: "Workshops",
                    description: "Practical and experiential workshops: emotional regulation, focus, stress management, and conscious communication.",
                },
                {
                    title: "Wellness Programs",
                    description: "Structured and tailored programs, with clear objectives and impact measurement.",
                },
                {
                    title: "Corporate Retreats",
                    description: "Immersive experiences for executive teams. Strategic pause spaces to reconnect and redefine priorities.",
                },
            ],
            modalities: {
                title: "Modalities",
                items: ["Online", "On-site", "Hybrid"],
            },
            differential: "Our differential: we combine professional rigor, human approach, and business results orientation.",
        },
        contact: {
            title: "Contact",
            description: "If your organization wants to take a real step towards a culture of wellness and sustainable performance, we are ready to accompany you.",
            form: {
                name: "Name",
                company: "Company",
                email: "Email",
                message: "Message",
                submit: "Send Message",
            },
        },
        footer: {
            tagline: "Health, Wellness & Consciousness for Organizations",
        },
    },
};
