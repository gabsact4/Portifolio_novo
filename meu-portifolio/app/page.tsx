import Navbar from "./componentes/navbar";
import Homepage from "./pagina/home";
import Habilidades from "./componentes/habilidade";
import ProjectsGrid from "./componentes/card";
import Formacao from "./componentes/formacao";
import Contato from "./componentes/contato";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-[#12140f] font-sans">
      <Navbar />
      <Homepage />
      <Habilidades />
      <ProjectsGrid />
      <Formacao />
      <Contato />
    </div>
  );
}
