export const services = [
    {
        title: "LAVADO INTERIOR-EXTERIOR COMPLETOS",
        slug: "lavado-interior-exterior-completo",
        image: "/src/assets/service1.jpg",
        description: "Limpieza detallada de carrocería, cristales, llantas y tapicería para un acabado impecable. Incluye: aspirado, lavado a mano, encerado y protección de pintura.",
        alt: "Servicio 1",
        get href() {
            return `/services/${this.slug}`
        }
    },
    {
        title: "LAVADO INTEGRAL DE TAPICERÍA",
        slug: "lavado-integral-tapiceria",
        image: "/src/assets/service2.jpg",
        description: "Limpieza profunda de asientos, alfombras y techos para eliminar manchas y olores.",
        alt: "Servicio 2",
        get href() {
            return `/services/${this.slug}`
        }
    },
    {
        title: "MECÁNICA RÁPIDA",
        slug: "mecanica-rapida",
        image: "/src/assets/service3.jpg",
        description: "Servicios de mantenimiento básico como cambio de aceite, revisión de frenos y alineación.",
        alt: "Servicio 3",
        get href() {
            return `/services/${this.slug}`
        }
    },
    {
        title: "UNIDAD MÓVIL",
        slug: "unidad-movil",
        image: "/src/assets/service4.jpg",
        description: "Servicio de lavado y mantenimiento a domicilio para mayor comodidad.",
        alt: "Servicio 4",
        get href() {
            return `/services/${this.slug}`
        }
    }
]; 