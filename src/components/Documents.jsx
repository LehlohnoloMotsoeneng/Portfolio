import { Award, FileText } from 'lucide-react'
import cvFile from '../assets/Lehlohonolo_Motsoeneng_CV_August_2026.pdf'

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
    description: 'Add certificates that support your technical skills and development journey.',
    fileName: 'certificates.pdf',
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
        {documents.map(({ icon: Icon, label, description, fileName, file }) => (
          <article className="document-placeholder" key={label}>
            <div className="document-icon" aria-hidden="true">
              <Icon size={22} />
            </div>
            <div className="document-content">
              <span className="document-status">{file ? 'Available' : 'Placeholder'}</span>
              <h3>{label}</h3>
              <p>{description}</p>
              <span className="document-file">public/documents/{fileName}</span>
            </div>
            {file ? (
              <a
                href={file}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View CV
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
