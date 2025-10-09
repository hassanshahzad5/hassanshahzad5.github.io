import Chip from '../components/chip'
import TechnologyChip from '../components/technologyChip'

export default function Experience() {
  return (
    <section className='flex flex-col w-[100%] gap-10'>
      <Chip
        logo='/second-edition.png'
        altLogoText='Logo - Second Edition, LLC'
        company='Second Edition'
        location='Denver, Colorado'
        role='Full Stack Developer'
        industry='Furniture Resale & Consignment Retail'
        timeline='May 2023 - Sep 2025'
        accomplished={[
          'Owned end-to-end development of all internal software systems, architecting and maintaining platforms that powered daily operations across inventory management, sales, logistics, and customer-facing workflows.',
          'Built customer-facing forms and automation pipelines to schedule deliveries and pickups, integrating custom routing software and cost-analysis algorithms that reduced operational risk and improved scheduling efficiency.',
          'Designed and optimized MySQL schemas & queries, improving data retrieval performance by 40% and ensuring scalable system reliability.',
          'Automated workflows using Python and Javascript, saving 20+ staff hours per week through reduced manual data entry and faster reporting.',
          'Led migration of legacy codebase to GitHub, established CI/CD pipelines through GitHub Actions, established code review procedures and branching strategies for team collaboration.',
          'Managed and mentored a summer intern, providing technical training, code reviews, and project guidance, enabling them to deliver a production-ready feature using React, GraphQL, and MySQL.',
        ]}
        tech={ ['JavaScript', 'HTML5', 'CSS3', 'TypeScript', 'React', 'Python', 'Node.js', 'Express.js', 'MySQL', 'REST APIs', 'GraphQL', 'EJS', 'Google Cloud Platform'] }
        >
      </Chip>
      <Chip
        logo='/nist.svg'
        altLogoText='Logo - National Institute of Standards & Technology'
        company='National Institute of Standards & Technology'
        location='Boulder, Colorado'
        role='Database Administrator (Pathways Intern)'
        industry='Government Research & Standards Organization'
        timeline='Dec 2021 - May 2023'
        accomplished={[
          'Maintained locks and access records by utilizing system specific hardware and software, including extensive work with a SQL database to ensure seamless entry.',
          'Communicated and worked with numerous locksmith and badging groups in order to grant over 700 employees access to necessary labs and offices.',
          'Performed day-to-day tasks including practical administrative problems, ensuring office supplies are stocked and available, backing up databases, and maintaining a clean and comfortable work environment.',
        ]}
        tech={ ['MySQL'] }
        >
      </Chip>
    </section>
  );
}
