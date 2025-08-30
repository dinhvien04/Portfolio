import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { personalInfo, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero
          name={personalInfo.name}
          title={personalInfo.title}
          description={personalInfo.description}
          github={personalInfo.github}
          linkedin={personalInfo.linkedin}
          twitter={personalInfo.twitter}
          facebook={personalInfo.facebook}
        />

        <About
          aboutText={personalInfo.aboutText}
          additionalInfo={personalInfo.additionalInfo}
          resumeUrl={personalInfo.resumeUrl}
        />

        <Skills />

        <Projects projects={projects} />

        <Contact
          email={personalInfo.email}
          github={personalInfo.github}
          linkedin={personalInfo.linkedin}
          twitter={personalInfo.twitter}
          facebook={personalInfo.facebook}
          callToAction="Hãy cùng xây dựng điều gì đó tuyệt vời!"
        />
      </main>

      <Footer
        name={personalInfo.name}
        githubRepo="https://github.com/dinhvien04/portfolio"
      />
    </>
  );
}