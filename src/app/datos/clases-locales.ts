
import type { Clase } from '../modelos/clase';

export const CLASES_LOCALES: Clase[] = [
  {
    id: 1,
    nombre: 'Fuerza total',
    categoria: 'fuerza',
    duracionMin: 60,
    imagen: '/img/clase-01.jpg',
    descripcion: 'Circuito con mancuernas y barra para trabajar el cuerpo completo. La carga se ajusta a la experiencia de cada persona.',
  },
  {
    id: 2,
    nombre: 'Ciclismo indoor',
    categoria: 'cardio',
    duracionMin: 45,
    imagen: '/img/clase-02.jpg',
    descripcion: 'Cuarenta y cinco minutos sobre la bicicleta con música y series de intensidad marcadas por el entrenador.',
  },
  {
    id: 3,
    nombre: 'Yoga y movilidad',
    categoria: 'flexibilidad',
    duracionMin: 50,
    imagen: '/img/clase-03.jpg',
    descripcion: 'Secuencias suaves de respiración y estiramiento. Recomendada para quien pasa el día sentado.',
  },
  {
    id: 4,
    nombre: 'Boxeo recreativo',
    categoria: 'cardio',
    duracionMin: 60,
    imagen: '/img/clase-04.jpg',
    descripcion: 'Técnica básica de golpeo, trabajo de guardia y acondicionamiento. No hay contacto entre alumnos.',
  },
  {
    id: 5,
    nombre: 'Kettlebell',
    categoria: 'fuerza',
    duracionMin: 45,
    imagen: '/img/clase-05.jpg',
    descripcion: 'Balanceos, cargadas y sentadillas con pesa rusa. Se enseña la técnica antes de subir el peso.',
  },
  {
    id: 6,
    nombre: 'Salto y coordinación',
    categoria: 'cardio',
    duracionMin: 40,
    imagen: '/img/clase-06.jpg',
    descripcion: 'Cuerda, escalera de agilidad y desplazamientos. Sube el pulso rápido y es más divertida de lo que parece.',
  },
  {
    id: 7,
    nombre: 'Caminadora guiada',
    categoria: 'cardio',
    duracionMin: 30,
    imagen: '/img/clase-07.jpg',
    descripcion: 'Treinta minutos con cambios de inclinación y velocidad marcados por el entrenador.',
  },
  {
    id: 8,
    nombre: 'Rehabilitación activa',
    categoria: 'flexibilidad',
    duracionMin: 50,
    imagen: '/img/clase-08.jpg',
    descripcion: 'Trabajo de bajo impacto para volver a la actividad después de una lesión. Requiere valoración previa.',
  },
];
