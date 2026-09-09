import { Award, FileText } from 'lucide-react'
import cvFile from '../assets/Lehlohonolo_Motsoeneng_CV_August_2026.pdf'
import aiForEveryoneCert from '../assets/documents/Lehlohonolo Motsoeneng AI For Everyone.pdf'
import generativeAIPromptEngineeringCert from '../assets/documents/Lehlohonolo Motsoeneng Generative AI Prompt Engineering Basics.pdf'
import generativeAILLMsCert from '../assets/documents/Lehlohonolo Motsoeneng Generative AI with Large Language Models.pdf'
import introToAICert from '../assets/documents/Lehlohonolo Motsoeneng Introduction to Artificial Intelligence (AI).pdf'
import introToGenerativeAICert from '../assets/documents/Lehlohonolo Motsoeneng Introduction to Generative AI.pdf'
import pythonForDataScienceCert from '../assets/documents/Lehlohonolo Motsoeneng Python for Data Science, AI & Development.pdf'
import supervisedMachineLearningCert from '../assets/documents/Lehlohonolo Motsoeneng Supervised Machine Learning Regression and Classification.pdf'
import unsupervisedLearningCert from '../assets/documents/Lehlohonolo Motsoeneng Unsupervised Learning, Recommenders, Reinforcement Learning.pdf'

const documents = [
  {
    icon: FileText,
    label: 'Curriculum Vitae',
    description: 'Add your latest CV as a PDF to make your experience easy to review.',
    fileName: 'Lehlohonolo_Motsoeneng_CV_August_2026.pdf',
    file: cvFile,
  },
  {
    icon: Award,
    label: 'Certificates',
    description: 'Professional certificates that support my technical skills and continued learning journey.',
    fileName: 'Multiple certificate PDFs',
    certificates: [
      {
        title: 'AI For Everyone',
        file: aiForEveryoneCert,
        fileName: 'Lehlohonolo Motsoeneng AI For Everyone.pdf',
      },
      {
        title: 'Generative AI Prompt Engineering Basics',
        file: generativeAIPromptEngineeringCert,
        fileName: 'Lehlohonolo Motsoeneng Generative AI Prompt Engineering Basics.pdf',
      },
      {
        title: 'Generative AI with Large Language Models',
        file: generativeAILLMsCert,
        fileName: 'Lehlohonolo Motsoeneng Generative AI with Large Language Models.pdf',
      },
      {
        title: 'Introduction to Artificial Intelligence (AI)',
        file: introToAICert,
        fileName: 'Lehlohonolo Motsoeneng Introduction to Artificial Intelligence (AI).pdf',
      },
      {
        title: 'Introduction to Generative AI',
        file: introToGenerativeAICert,
        fileName: 'Lehlohonolo Motsoeneng Introduction to Generative AI.pdf',
      },
      {
        title: 'Python for Data Science, AI & Development',
        file: pythonForDataScienceCert,
        fileName: 'Lehlohonolo Motsoeneng Python for Data Science, AI & Development.pdf',
      },
      {
        title: 'Supervised Machine Learning: Regression and Classification',
        file: supervisedMachineLearningCert,
        fileName: 'Lehlohonolo Motsoeneng Supervised Machine Learning Regression and Classification.pdf',
      },
      {
        title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
        file: unsupervisedLearningCert,
        fileName: 'Lehlohonolo Motsoeneng Unsupervised Learning, Recommenders, Reinforcement Learning.pdf',
      },
    ],
  },
]

const Documents = () => {
  return (
    <section id="documents" className="section documents-section">
      <div className="section-header">
        <p className="eyebrow">Documents</p>
        <h2>CV &amp; Certificates</h2>
        <p className="section-subtitle">
          Professional documents will be available here as they are added.
        </p>
      </div>

      <div className="documents-grid">
        {documents.map(({ icon: Icon, label, description, fileName, file, certificates }) => (
          <article
            className={`document-placeholder${file ? ' document-placeholder--cv' : ' document-placeholder--certificates'}`}
            key={label}
          >
            <div className="document-icon" aria-hidden="true">
              <Icon size={22} />
            </div>
            <div className="document-content">
              <span className="document-status">{file || certificates ? 'Available' : 'Placeholder'}</span>
              <h3>{label}</h3>
              <p>{description}</p>
              {certificates ? (
                <div className="certificate-list" aria-label="Certificates list">
                  {certificates.map(({ title, fileName: certFileName, file: certFile }) => (
                    <a
                      key={certFileName}
                      href={certFile}
                      target="_blank"
                      rel="noreferrer"
                      className="certificate-item"
                    >
                      <span>{title}</span>
                      <small>{certFileName}</small>
                    </a>
                  ))}
                </div>
              ) : (
                <span className="document-file">public/documents/{fileName}</span>
              )}
            </div>
            {file ? (
              <a href={file} target="_blank" rel="noreferrer" className="project-link">
                View CV
              </a>
            ) : certificates ? (
              <a href={certificates[0].file} target="_blank" rel="noreferrer" className="project-link">
                View certificates
              </a>
            ) : (
              <button type="button" className="project-link is-disabled" disabled>
                Add document
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Documents
