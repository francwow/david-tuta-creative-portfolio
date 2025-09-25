import SectionContainer from "../_components/utility/SectionContainer";
import MainGrid from "../_components/workComponents/MainGrid/MainGrid";

const WorkPage = () => {
  return (
    <SectionContainer>
      <section className="work-section w-full h-full relative flex flex-col">
        <div className="main-container">
          <MainGrid />
        </div>
      </section>
    </SectionContainer>
  );
};

export default WorkPage;
