export type Event = {
  id: string;
  titulo: string;
  dia: string;
  hora: string;
  descripcion: string;
  emoji: string;
  color: string;
  precio?: string;
};

export const events: Event[] = [
  {
    id: "karaoke-viernes",
    titulo: "Noches de Karaoke",
    dia: "Todos los Viernes",
    hora: "7:00 PM – 11:00 PM",
    descripcion:
      "El mejor plan del viernes en Surco. Sube al escenario, elige tu canción favorita y canta con los tuyos. Cócteles de la casa y piqueos durante toda la noche. Entrada libre.",
    emoji: "🎤",
    color: "#C4664A",
  },
  {
    id: "cata-sabados",
    titulo: "Cata de Café de Especialidad",
    dia: "Todos los Sábados",
    hora: "9:00 AM – 11:00 AM",
    descripcion:
      "Aprende a identificar los orígenes, aromas y sabores del café peruano de la mano de nuestros baristas. Visitamos granos de Villa Rica, Chanchamayo y Cusco. Cupos limitados.",
    emoji: "☕",
    precio: "S/ 35 por persona",
    color: "#3D5A47",
  },
];
