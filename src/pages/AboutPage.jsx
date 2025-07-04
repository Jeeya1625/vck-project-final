import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

// src/pages/AboutPage.jsx
const AboutPage = () => {
  return (
    <div>
      <Header/>
    <div className="page-container" style={{overflow:"auto"}}>
   <h1 className="animate-fade-in-up">About Vivekanand College</h1> {/* <-- ADD THIS CLASS */}
      <p>
        Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative education since its inception in 1964. Located in the bustling heart of Tarabai Park,Kolhapur; our college has consistently strived to uphold the highest standards of academic rigor and ethical values.
      </p>
      <p>
        Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.
      </p>
      <h2>Our Mission</h2>
      <ul>
        <li>To provide high-quality, accessible education across various disciplines.</li>
        <li>To foster research, innovation, and creativity among students and faculty.</li>
        <li>To cultivate a diverse and inclusive learning environment.</li>
        <li>To instill strong ethical values and leadership qualities.</li>
      </ul>
      <h2>Our Values</h2>
      <p>
        Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentless pursuit of knowledge.
      </p>
      <h2>Our History</h2>
      <div>
        <p><b>1954:</b>Bapuji Salunkhe (Govindrao Dnyanojirao Salunkhe) founded Shri Swami Vivekanand Shikshan Sanstha, with the goal of providing education to students across 11 districts in Maharashtra.</p>
        <p><b>1964:</b>Vivekanand College was established in Kolhapur, named after Swami Vivekanand at the suggestion of Swami Ramanand Bharti.</p>
        <p><b>Focus on Quality:</b>The college has consistently aimed for high-quality education, evidenced by its consistent placement at the top in Shivaji University's Merit Scholarships and recognition as a College with Potential for Excellence.</p> 
        <p><b>Sports Excellence:</b>The college's strong performance in sports, particularly winning the Meghnath Nageshkar Trophy, highlights its commitment to holistic student development.</p> 
        <p><b>Expanding Programs:</b>Over the years, the college has expanded its program offerings to include conventional, professional, and other specialized courses like B.Lib, M.Lib, and M.B.A.</p> 
      </div>
      <p>Vivekanand College, Kolhapur which was established in 1964 is known as one of the best quality colleges in Maharashtra. The U.G.C. granted autonomy to this college from the academic year 2018-19. About 8000 students are enrolled every year for various programmes. Besides the conventional programmes like B.A., B.Com.and B.Sc., the college offers the professional programmes like B.B.A., B.C.A., B.C.S., B.Sc. (Biotechnology) ,B.Sc. Microbiology, B.Voc. , Community College and M. B. A. The college also provides opportunity to undertake degrees like B.A.,B.Com.,B.Sc. , B.Lib.,M.Lib. and M.B.A. of YCMOU, Nashik. 

The college has also acquired reputation in the fields of dance, drama, music, other arts and sports, besides academics. Our college has been securing the first place for last twenty years by winning maximum number of Shivaji University Merit Scholarships. The faculties of the college are not only excellent in teaching but also in research. Till date in all 27 minor and major research projects are undertaken by the faculties. 

The college has won the ‘MeghnathNageshkar Trophy’ of Shivaji University for the Best College in the field of Sports for eleven years continuously. SandipTarate and SnehankitaVarute are the recipients of the “ChhatrapatiShivaji Award”. RahiSarnobat is the winner of the Asian Games held in Indonesia  in August 2018. RahiSarnobat and VeerdhavalKhade represented India in ‘London Olympics-2012’, which is a historic record as both belong to the same college. Till date the college has produced more than 250 national and 10 international sports persons. 

The college has also proved its talent in the field of cultural activities by winning General Championship in the Central Youth Festival of the university for seven consecutive years. Our student UshaJadhav, a film actress, is the winner of ‘The Best Actress National Award-2013’ for her performance in Marathi film ‘Dhag’. Presently, our three girl students are heroines in the five different Marathi films. 

Our Placement Cell is very active as during last five years 537 students are placed in the various organizations like Wipro, Infosys, TCS, Patni Computers, Eton, Reliance Insurance, Federal Bank and South Indian Bank. The students are also guided for State Civil Services examinations at our Competitive Examination Guidance Centre which has produced more than 100 officers during the last five years. 

Considering the strengths of the college, the NAAC, Bangalore has reaccredited the college with ‘A’ Grade. The college is identified twicw as the “College with Potential for Excellence” by the UGC, and included in “The Star College Scheme” by the DBT, Govt. of India.
      </p>
      <p>
        Our journey began with a vision to make quality education available to all, and we continue that legacy today.
      </p>
    </div>
    <Footer/>
    </div>
  );
}
export default AboutPage;