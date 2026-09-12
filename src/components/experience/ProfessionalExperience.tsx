import { BsPatchCheckFill } from "react-icons/bs";

const ProfessionalExperience = () => {
  return (
    <section id="professional-experience">
      <h5>What I have Done</h5>
      <h2>Professional Experience</h2>
      <div className="experience__container container grid grid-cols-1 gap-[2rem] max-sm:gap-[1rem]">
        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">Software Engineer</h3>
          <h4 className="text-light">Tata Consultancy Services | Kolkata, India</h4>
          <p className="text-light">August 2024 – Present</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Built a multi-tenant affiliate data platform with tenant-isolated Kafka topics, databases, and feed exports, supporting multiple brands.
            </li>
            <li>
              Developed a Spring Boot + Spring Batch ETL microservice processing millions of product records, enabling a real-time product data pipeline from multiple source systems and APIs.
            </li>
            <li>
              Developed AI-powered backend workflows using LangChain, LangGraph, AI agents, LLM APIs, RAG pipelines, prompt engineering, and structured AI outputs.
            </li>
            <li>
              Integrated AI services into business applications to automate report generation, document understanding, data summarization, and intelligent user workflows.
            </li>
            <li>
              Implemented event-driven architecture using Kafka (Avro, Schema Registry) for bulk and delta feeds, achieving near real-time data synchronization.
            </li>
            <li>
              Optimized large-scale batch jobs (up to 5M rows/run) using chunking and paging to meet strict SLA requirements.
            </li>
            <li>
              Built a serverless Go-based Kafka consumer on AWS Lambda, processing 500K+ daily events with idempotency and sub-500ms latency.
            </li>
            <li>
              Migrated Dropwizard microservices to Spring Boot Java 21, improving API performance by 30% through optimized queries and caching.
            </li>
            <li>
              Implemented end-to-end observability with Datadog, including custom metrics for event throughput, failure rates, and Kafka lag, improving operational visibility and reducing the MTTD.
            </li>
            <li>
              Designed and maintained GitLab CI/CD pipelines with multi-stage deployment and rollback workflows, enabling reliable and automated application releases.
            </li>
          </ul>
        </div>
        
        <div className="experience__item col-span-1 max-md:mx-auto max-md:my-0 max-md:w-[85%] max-md:p-[2rem] max-sm:w-[100%] max-sm:px-[1rem] max-sm:py-[2rem]">
          <h3 className="color-primary mb-[1rem]">Full Stack Developer</h3>
          <h4 className="text-light">Simplyphi | Remote</h4>
          <p className="text-light">February 2023 – May 2024</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Developed responsive and scalable web applications using React, TypeScript, NodeJs, Python, and FastAPI, improving application performance and code reusability by over 40%.
            </li>
            <li>
              Built an automated OCR-based floor plan analysis system capable of extracting measurements and calculating total floor area from architectural images with over 95% extraction accuracy.
            </li>
            <li>
              Automated the retrieval and processing of thousands of floor-plan image links from a PostgreSQL database, reducing manual processing effort by nearly 80%.
            </li>
            <li>
              Implemented text and shape recognition using Pytesseract and Azure Computer Vision API, significantly improving the accuracy and reliability of floor plan data extraction.
            </li>
            <li>
              Designed and optimized logic to compute total floor area from extracted architectural measurements, increasing processing efficiency by over 60%.
            </li>
            <li>
              Developed a Housing Market Report Generator for London regions and local authorities, providing analytics on properties for sale/rent, average asking prices, market growth trends, and other real-estate insights.
            </li>
            <li>
              Integrated backend services with databases and automated workflows for seamless data retrieval, processing, and updates, improving operational efficiency by over 50%.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;