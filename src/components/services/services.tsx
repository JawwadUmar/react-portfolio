import { BsCheck2All } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="services_container container grid grid-cols-3 gap-[3rem] max-md:grid-cols-2 max-sm:grid-cols-1 max-sm:gap-[1.5rem]">
        <article className="service hover:cursor-default hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>Backend & Microservices</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Scalable microservices using Spring Boot & Go</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Real-time data pipelines & ETL processing</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Event-driven architecture with Kafka</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Serverless applications on AWS Lambda</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>REST APIs with FastAPI and Dropwizard</p>
            </li>
          </ul>
        </article>
        <article className="service hover:cursor-default hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>AI & Full Stack Development</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>AI-powered backend workflows (LangChain, LangGraph)</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Responsive web applications using React & Node.js</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Automated OCR & Document Analysis systems</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Integration of LLMs and RAG pipelines</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>End-to-end full stack application delivery</p>
            </li>
          </ul>
        </article>
        <article className="service hover:cursor-default  hover:border-[#2f2f69] hover:bg-transparent max-md:h-auto">
          <div className="service__head">
            <h3>Cloud & Observability</h3>
          </div>
          <ul className="service__list p-[1.8rem] pl-[1.6rem]">
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Cloud infrastructure on AWS & Azure</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>End-to-end observability with Datadog</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Automated GitLab CI/CD pipelines</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>Containerized deployments with Docker</p>
            </li>
            <li>
              <BsCheck2All className="service__list-icon" />
              <p>System monitoring and metric optimization</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
