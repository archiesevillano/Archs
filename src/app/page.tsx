import Image from 'next/image';
import me from "@/assets/images/archPic.png";
import Link from 'next/link';
import MyPic from "@/assets/images/profile.png";
import MiniBox from '@/components/MiniBox';
import vscode from "@/assets/images/vscode.png";
import blender from "@/assets/images/blender.png";
import figma from "@/assets/images/figma.png";
import adobe from "@/assets/images/adobe.png";
import BarRoute from '@/components/BarRoute';
import SwiperSection from '@/components/SwiperSection';

export default function Home() {
  return (
    <main className="homepage flex flex-col items-center">
      <section className="hero flex justify-center flex-col md:flex-row h-screen w-full overflow-hidden relative md:p-0 px-5">
        <div className="flex items-center justify-center">
          <div className="texts flex flex-col justify-center p-4 w-[500px]">
            <div className="flex items-center">
              <div className="w-[50px] h-[2px] bg-secondary-200 inline-block me-2"></div>
              <span className="font-bold text-xl items-center">Hello</span>
            </div>
            <p className="font-bold text-5xl font-montserrat mb-3">I am <span className="text-primary-200">Archie</span></p>
            <p className="text-sm opacity-90 font-quicksand">
              I&apos;m a full-stack web developer who began exploring programming in 2018 during high school. However, it was the onset of the pandemic that propelled me to embrace programming seriously, utilizing my skills for freelancing to generate income.
            </p>
            <div className="downloadCVBtn inline-block w-max bg-primary-200 mt-5 rounded-sm rounded" role="button">
              <a href="https://drive.google.com/uc?export=download&id=1i_eR7ntUPu0lpRlHgG_SMN9N7XjvqjCY" className="py-2 px-5 inline-block" download referrerPolicy="no-referrer" style={{ color: "#f2f2f2" }}>
                <i className="fi fi-br-download me-3 inline-block translate-y-[3px]"></i>
                <span className="text-sm">
                  Download CV
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-full relative archImg lg:flex hidden">
          <Image src={me} width={1000} height={1000} alt="Archie Image" className="object-contain h-[60vh] w-max" />
        </div>
        <div className="stacks flex gap-5 items-center justify-center md:justify-start absolute bottom-0 left-[50%] translate-x-[-50%] z-10 pb-10 max-w-[1300px]  md:px-10 w-full">
          <Image src={"https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/techstacks%2FNextJS.png?alt=media&token=82522ea9-32c4-42c8-9a47-61e50de284fd"} alt="Stack" className="w-[25px] h-[25px] object-contain" width={25} height={25} />
          <Image src={"https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/techstacks%2FTypescript.png?alt=media&token=1a21c143-30ae-41a8-a2b5-6e473c9dff90"} alt="Stack" className="w-[25px] h-[25px] object-contain" width={25} height={25} />
          <Image src={"https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/techstacks%2FTaillwind%20CSS.png?alt=media&token=1d22d05a-9b9a-4b09-8bbf-fce696be111a"} alt="Stack" className="w-[25px] h-[25px] object-contain" width={25} height={25} />
          <Image src={"https://firebasestorage.googleapis.com/v0/b/archsfb.appspot.com/o/techstacks%2FMongoDB.png?alt=media&token=48ebb25f-d98e-4c19-ac0f-bb950d9228a7"} alt="Stack" className="w-[25px] h-[25px] object-contain" width={25} height={25} />
        </div>
        <div className="arrow flex items-center gap-5 rotate-[90deg] absolute right-[0] md:bottom-[0] bottom-[-80px] md:flex hidden">
          <span className="uppercase text-sm font-bold font-mukta">Explore more</span>
          <i className="fi fi-br-arrow-alt-right"></i>
        </div>
      </section>
      <section className="projectSection flex flex-col justify-center items-start w-full py-28 md:px-[180px] px-5">
        <button type="button" className="mb-8 font-rubik"><i className="fi fi-rr-boxes inline-block translate-y-[3px] me-3"></i>See all Projects</button>

        <h2 className="text-4xl font-bold font-rubik mb-2">Featured Works</h2>
        <p className="opacity-80 font-quicksand">Projects that were developed for display and coding practice only.</p>
        <div className="projectList flex gap-5 justify-start items-center w-full md:px-0 px-4 mt-10">
          <SwiperSection />
        </div>
      </section>
      <section className="certificationSection flex lg:flex-row flex-col md:justify-between md:items-center py-28 w-full md:px-[180px] px-10 gap-16 lg:gap-0">
        <div className="">
          <div className="flex items-center opacity-70"><div className="w-[35px] h-[2px] bg-secondary-200 inline-block me-2 opacity-70"></div><span className="font-rubik font-bold">Certification</span></div>
          <h1 className="text-5xl font-bold opacity-90">Bootcamp</h1>
          <h1 className="text-3xl font-bold text-primary-100">Top student</h1>
          <p className="font-quicksand">Completed Full stack Web Development Course</p>
          <Link className="inline-block mt-7 py-2 pe-3 font-rubik font-bold opacity-80" href="/about/certificates">See list of Certificates<i className="fi fi-sr-arrow-right ms-3 inline-block translate-y-[3px]"></i></Link>
        </div>

        <div className="p-5 relative">
          <span className="absolute text-3xl top-0 left-0">
            <i className="fa-solid fa-quote-left"></i>
          </span>
          <p className="font-quicksand opacity-90 md:w-[500px] pt-5">
            Enrolling in KodeGo has equipped me with comprehensive web development skills, offering a structured learning environment, hands-on experience, and a portfolio of completed projects. With mentorship and guidance, I gained confidence in my abilities and had the chance to network with peers who share my passion for web development.
          </p>
          <div className="bg-primary-200 w-[100px] h-[5px] mt-8 mb-3 rounded-xl"></div>
          <h1 className="font-bold text-2xl ">Archie Sevillano</h1>
          <span className="font-quicksand opacity-90 text-sm inline-block translate-y-[-5px]">KodeGo Graduate, 2023</span>
        </div>
      </section>
      <section className="aboutMe flex flex-row justify-between items-center py-28 w-full md:px-[180px] px-10 shadow-inner">
        <div className="flex flex-col items-start">
          <h1 className="font-bold md:text-5xl text-3xl mb-5">What I often do?</h1>
          <p className="font-quicksand md:w-[500px]">
            I have a deep passion for continuous exploration and learning. I don&apos;t just do it to expand my skill set; I genuinely enjoy the process. I dedicate a significant amount of my time to learning because it keeps me thoroughly engaged and entertained
          </p>
          <div className="md:w-[400px] w-full flex flex-col justify-center flex-wrap mt-5 md:mt-0">
            <div className="flex sm:flex-row flex-col w-full flex-wrap sm:justify-start justify-center ">
              <MiniBox title="Programming" subTitle="Advanced" logo={vscode} />
              <MiniBox title="Editing" subTitle="Intermediate" logo={adobe} />
            </div>
            <div className="flex sm:flex-row flex-col w-full flex-wrap sm:justify-start justify-center">
              <MiniBox title="Modelling" subTitle="Intermediate" logo={blender} />
              <MiniBox title="Designing" subTitle="Intermediate" logo={figma} />
            </div>
          </div>
        </div>
        <div className="flex-col md:flex hidden">
          <Image src={MyPic} width={400} height={400} className="object-contain shadow-xl rounded-xl" draggable={false} alt="Archie Photo" />
        </div>
      </section>
      <section className="contactMe flex md:flex-row flex-col-reverse md:justify-between md:items-center py-28 w-full md:px-[180px] px-10 bg-secondary-100 md:gap-0 gap-10">
        <div className="flex flex-col">
          <h1 className="font-quicksand text-4xl" style={{ color: "var(--forecolor)" }}>Got a project?<br />Let&apos;s talk.</h1>
          <p className="opacity-80 text-sm font-quicksand md:w-[350px] mt-8" style={{ color: "var(--forecolor)" }}>Send me a message, click my email below so we can start our business.</p>
          <Link href="mailto:archie.sevillano29@gmail.com" className="flex flex-row gap-5 justify-between items-center inline-block w-max mt-20">
            <span className="font-bold font-quicksand" style={{ color: "var(--forecolor)" }}>@archie.sevillano29</span>
            <i style={{ color: "var(--forecolor)" }} className="fi fi-br-angle-double-small-right text-primary-200 font-bold translate-y-[3px]"></i>
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="font-quicksand text-4xl" style={{ color: "var(--forecolor)" }}>Want to know more?</h1>
          <p className="font-quicksand text-xl opacity-70" style={{ color: "var(--forecolor)" }}>Check this out:</p>
          <div className="flex flex-col gap-3 py-3 flex-wrap">
            <BarRoute title="Tech Stack" subTitle="List of technologies that I can use" href="/about/techstack" />
            <BarRoute title="Experiences" subTitle="Work and Other experiences" href="/about/experiences" />
            <BarRoute title="Certificates" subTitle="Certifications received " href="/about/certificates" />
            <BarRoute title="Hobbies" subTitle="Personal entertainments" href="/about/hobbies" />
          </div>
        </div>
      </section>
    </main>
  )
}
