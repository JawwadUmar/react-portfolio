import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I have</h5>
      <h2>My Skills</h2>
      <div className="experience__container container grid grid-cols-2 gap-[2rem] max-sm:gap-[1rem]">
        <div className="experience__frontend col-span-2 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[2rem] text-center">
            Programming Languages
          </h3>
          <div className="experience__content grid grid-cols-3 gap-y-[1rem] max-md:p-[1rem] max-sm:grid-cols-2 max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Java <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Go <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/Go_Logo_Aqua.svg" alt="Go Logo" className="inline-block ml-1 w-6 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>C++ <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg" alt="C++ Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Python <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Javascript <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Javascript Logo" className="inline-block ml-1 w-4 h-4" /></h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__tools max-md:col-span-2 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[2rem] text-center">
            Frameworks & Data Platforms
          </h3>
          <div className="experience__content grid grid-cols-2 gap-y-[1rem] max-md:p-[1rem] max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Spring Boot & Batch</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Kafka & Avro</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>FastAPI</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>LangChain / LangGraph</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>MySQL / PostgreSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__cloud max-md:col-span-2 max-md:mx-auto max-md:my-0  max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[2rem] text-center">
            Infrastructure & DevOps
          </h3>
          <div className="experience__content grid grid-cols-2 gap-y-[1rem] max-md:p-[1rem] max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>CI/CD Pipelines</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Datadog</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Redis</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend col-span-2 max-md:mx-auto max-md:my-0  max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[2rem] text-center">Soft Skills</h3>
          <div className="experience__content grid grid-cols-3 gap-y-[1rem] max-md:p-[1rem] max-sm:grid-cols-2 max-xsm:grid-cols-1">
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Problem-Solving</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>System Design</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Communication</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Adaptability</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Attention to Detail</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details flex gap-[1rem]">
              <BsPatchCheckFill className="color-primary mt-[6px]" />
              <div>
                <h4>Team Collaboration</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;