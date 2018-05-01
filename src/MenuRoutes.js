//Containers
import Home  from "./containers/Home";
import Profile  from "./containers/Profile";
import TimeLine  from "./containers/TimeLine";
import ContactForm  from "./containers/ContactForm";


const MenuRoutes = [
  {
    text: "Home",
    icon: "home_outline",
    route: "/",
    component: Home
  },
  {
    text: "Perfil",
    icon: "person_outline",
    route: "/about",
    component: Profile
  },
  {
    text: "Historia",
    icon: "history",
    route: "/time",
    component: TimeLine
  },
  {
    text: "Contacto",
    icon: "mail_outline",
    route: "/contact",
    component: ContactForm
  },
];

export default MenuRoutes;
