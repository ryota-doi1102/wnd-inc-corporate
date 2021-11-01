import style from './sectionTitle.module.scss';

export const SectionTitle: React.FC = (props) => <h2 className={style.sectionTitle}>{props.children}</h2>;
