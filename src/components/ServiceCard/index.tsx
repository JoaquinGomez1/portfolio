interface Props {
  title: string;
  description: string;
  icon: string;
}

export default function index({ title, description, icon }: Props) {
  return (
    <div className="card">
      <i className={icon}></i>
      <h3>{title}</h3>
      <p className="svc-description">{description}</p>
    </div>
  );
}
