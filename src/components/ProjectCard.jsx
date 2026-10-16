import { ArrowUpRight } from 'lucide-react'

function Preview({ type, title }) {
  return <div className={`project-preview ${type}`} aria-label={`${title} abstract preview`}>
    <div className="browser-bar"><i /><i /><i /><span>aufariq / proyek</span></div>
    <div className="preview-stage"><span className="preview-kicker">KREATIF / DIGITAL</span><strong>{title.split(' ')[0]}</strong><div className="preview-panels"><i /><i /><i /></div></div>
  </div>
}
export default function ProjectCard({ project, lang = 'id' }) {
  const id = lang === 'id'; const title = id ? project.title : project.titleEn; const category = id ? project.category : project.categoryEn; const description = id ? project.description : project.descriptionEn; const tags = id ? project.tags : (project.tagsEn || project.tags)
  return <article className="project-card">
    <div className="project-meta"><span>{id ? 'PROYEK' : 'PROJECT'} {project.id}</span><span>{category}</span></div>
    <Preview type={project.type} title={title} />
    <div className="project-info"><div><h3>{title}</h3><p>{description}</p></div><div className="project-tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><span className="unavailable" title={id ? 'Tautan proyek belum tersedia' : 'Project link is not available'}>{id ? 'DETAIL PROYEK' : 'PROJECT DETAILS'} <ArrowUpRight /></span></div>
  </article>
}
