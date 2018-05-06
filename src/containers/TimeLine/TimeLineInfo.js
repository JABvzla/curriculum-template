const school = {
  icon: "school",
  color: "#fff",
  bgColor: "#758fff"
};

const academy = {
  icon: "mode_edit",
  color: "#fff",
  bgColor: "#ff88c8"
};

const work = {
  icon: "work",
  color: "#b26a20",
  bgColor: "#feff57"
};

const game = {
  icon: "videogame_asset",
  color: "#ff403a",
  bgColor: "#8cf5ff"
};

/**
 * Provide info to use in timeLine
 */
const TimeLineInfo = [
  {
    date: "2018 - Presente",
    title: "Magic Camp / Magic Fitness",
    subtitle: "Desarrollador fullstack & Desarrollador mobile.",
    description:"Desarrollo y mantenimiento.",
    tecnologies: ["Java","Spring","JavaScript","NodeJs","React","React-Native","JSS","PosgreSql","Docker","SCRUM"],
    icon: work.icon,
    color: work.color,
    bgColor: work.bgColor
  },
  {
    date: "2016 - 2017",
    title: "Zedplan",
    subtitle: "Desarrollador fullstack.",
    description: "Elaboracion y mantenimiento de proyectos.",
    tecnologies: ["PHP","Laravel","OpenCore","JavaScript","Jquery","SASS","Bootstrap","Docker","MySql","PosgreSql","SCRUM"],
    icon: work.icon,
    color: work.color,
    bgColor: work.bgColor
  },
  {
    date: "Julio 2015",
    title: "Venezuela Duel Jam!",
    subtitle: "Participacion en gamejam de 48 horas.",
    description: "Posicion #5 lugar",
    link: "https://itch.io/jam/venezuela-duel-jam/rate/31651",
    tecnologies: ["Java","LibGdx"],
    icon: game.icon,
    color: game.color,
    bgColor: game.bgColor
  },
  // {
  //   date: "2013 - 2015",
  //   title: "Freelancer",
  //   subtitle: "",
  //   description: "",
  //   tecnologies: [],
  //   icon: work.icon,
  //   color: work.color,
  //   bgColor: work.bgColor
  // },
  {
    date: "2014",
    title: "Curso Android",
    subtitle: "",
    description: "Benllisoft Curso de programación en Android.",
    link: "http://www.benllisoft.com/",
    tecnologies: ["Java"],
    icon: academy.icon,
    color: academy.color,
    bgColor: academy.bgColor
  },
  {
    date: "2013",
    title: "TSU Informatica",
    subtitle: "",
    description: "Instituto Universitario Jose Maria Carreño Mencion Informatica.",
    tecnologies: [],
    icon: school.icon,
    color: school.color,
    bgColor: school.bgColor
  },
  {
    date: "2011",
    title: "Herramientas para la Solución de Conflictos",
    subtitle: "Taller",
    description: "Presenciado en Instituto Universitario Jose Maria Carreño.",
    tecnologies: [],
    icon: academy.icon,
    color: academy.color,
    bgColor: academy.bgColor
  },
  {
    date: "2011",
    title: "Los Delitos Informaticos",
    subtitle: "Taller",
    description: "Presenciado en Instituto Universitario Jose Maria Carreño.",
    tecnologies: [],
    icon: academy.icon,
    color: academy.color,
    bgColor: academy.bgColor
  },
  {
    date: "2009",
    title: "Bachiller en Ciencias",
    subtitle: "",
    description: "U.E. Santos Luzardo",
    tecnologies: [],
    icon: school.icon,
    color: school.color,
    bgColor: school.bgColor
  }
];

export {TimeLineInfo};
