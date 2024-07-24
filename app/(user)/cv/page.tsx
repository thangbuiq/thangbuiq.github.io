import SectionContainer from "@/components/utils/SectionContainer";
import TitleSectionPageContainer from "@/components/utils/TitleSectionPageContainer";
import PdfViewer from "@/components/utils/PdfViewer";

const CV = () => (
  <SectionContainer>

    <div className='w-full flex flex-col items-center gap-8' style={{ height: '100vh' }}>
        <TitleSectionPageContainer title='Curriculum Vitae' />
        <PdfViewer url={"/pdf/CV_BuiQuangThang.pdf"} />
    </div>

  </SectionContainer>
);

export default CV;