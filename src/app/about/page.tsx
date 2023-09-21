import BarRoute from "@/components/BarRoute";
import Image from "next/image";
import ArchPic from "@/assets/images/profile.png";
import HistoryBackBtn from "@/components/HistoryBackBtn";

export default function About() {
    return (
        <main className="about flex flex-col items-center">
            <header className="flex md:flex-row flex-col md:justify-between md:items-center md:mt-[100px] mt-0 md:px-[180px] px-10 w-full py-20">
                <div className="flex flex-col items-start md:translate-y-0 translate-y-[80px]">
                    <HistoryBackBtn />
                    <h2 className="text-5xl font-bold font-rubik mb-2">About</h2>
                    <p className="opacity-80 font-quicksand">
                        Delve into My Journey and Get Better Acquainted with Who I Am
                    </p>
                </div>
                <div className="w-[300px] h-[300px] translate-y-[60%] relative overflow-hidden bg-random-gray flex items-center justify-center aboutMyPhotoContainer">
                    <Image src={ArchPic} alt="Archie Photo" width={300} height={300} className="px-5 aboutMyPhoto" />
                </div>
            </header>
            <section className="md:max-w-[1300px] w-full py-28 flex md:flex-row flex-col gap-5 md:justify-between items-center">
                <div className="flex flex-col justify-center gap-4 px-5 pt-12">
                    <p className="font-quicksand max-w-[500px] w-full">
                        Hello, I&apos;m Archie, a passionate Full Stack Web Developer dedicated to crafting exceptional digital experiences. With a strong foundation in web development technologies and a keen eye for design, I&apos;m on a mission to transform creative ideas into functional and visually appealing websites and applications.
                    </p>
                    <p className="font-quicksand max-w-[500px] w-full">
                        My journey in the world of web development began with a curiosity to explore the limitless possibilities of the internet. I embarked on this path with enthusiasm, and my commitment to continuous learning has been my guiding force ever since. I take pride in my proficiency in HTML, CSS, JavaScript, and a range of modern frameworks and libraries, including ReactJS and Node.js.
                    </p>
                    <p className="font-quicksand max-w-[500px] w-full">
                        What sets me apart is not only my technical expertise but also my commitment to delivering excellence. I understand the importance of user-centric design and the need for responsive, efficient, and scalable solutions. Whether it&apos;s crafting pixel-perfect front-end interfaces or optimizing back-end functionality, I approach every project with dedication and attention to detail.
                    </p>
                    <p className="font-quicksand max-w-[500px] w-full">
                        I&apos;m excited to collaborate on new and innovative projects, tackle complex challenges, and contribute my skills to help businesses and individuals thrive in the digital landscape. Let&apos;s work together to turn your ideas into reality and create web experiences that leave a lasting impression.
                    </p>
                </div>
                <div className="flex flex-col md:mt-0 mt-5">
                    <h1 className="font-quicksand text-4xl">Want to know more?</h1>
                    <p className="font-quicksand text-xl opacity-70">Check this out:</p>
                    <div className="flex flex-col gap-3 py-3 flex-wrap">
                        <BarRoute title="Tech Stack" subTitle="List of technologies that I can use" href="/about/techstack" />
                        <BarRoute title="Experiences" subTitle="Work and Other experiences" href="/about/experiences" />
                        <BarRoute title="Certificates" subTitle="Certifications received " href="/about/certificates" />
                        <BarRoute title="Hobbies" subTitle="Personal entertainments" href="/about/hobbies" />
                    </div>
                </div>
            </section>
        </main>
    );
}