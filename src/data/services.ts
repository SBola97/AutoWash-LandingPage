export const services = [
    {
        title: "LAVADO INTERIOR-EXTERIOR COMPLETOS",
        slug: "lavado-interior-exterior-completo",
        image: "/public/images/service1.jpg",
        description: "Limpieza detallada de carrocería, cristales, llantas y tapicería para un acabado impecable. Incluye: aspirado, lavado a mano, encerado y protección de pintura.",
        features: [
            "Limpieza de carrocería con productos especializados",
            "Aspirado y limpieza de tapicería",
            "Encerado y protección de pintura"
        ],
        alt: "Servicio 1",
        get href() {
            return `/services/${this.slug}`
        }
    },
    {
        title: "LAVADO INTEGRAL DE TAPICERÍA",
        slug: "lavado-integral-tapiceria",
        image: "/public/images/service2.jpg",
        description: "Limpieza profunda de asientos, alfombras y techos para eliminar manchas y olores.",
        features: [
            "Limpieza de asientos con productos especializados",
            "Eliminación de manchas difíciles",
            "Desodorización del interior"
        ],
        alt: "Servicio 2",
        get href() {
            return `/services/${this.slug}`
        }
    },
    {
        title: "MECÁNICA RÁPIDA",
        slug: "mecanica-rapida",
        image: "/public/images/service3.jpg",
        description: "Servicios de mantenimiento básico como cambio de aceite, revisión de frenos y alineación.",
        features: [
            "Cambio de aceite y filtros",
            "Revisión y cambio de frenos",
            "Alineación y balanceo de ruedas"
        ],
        alt: "Servicio 3",
        get href() {
            return `/services/${this.slug}`
        }
    },
    {
        title: "UNIDAD MÓVIL",
        slug: "unidad-movil",
        image: "/public/images/service4.jpg",
        description: "Servicio de lavado y mantenimiento a domicilio para mayor comodidad.",
        features: [
            "Lavado completo a domicilio",
            "Mantenimiento básico en el lugar",
            "Atención personalizada"
        ],
        alt: "Servicio 4",
        get href() {
            return `/services/${this.slug}`
        }
    }
]; 