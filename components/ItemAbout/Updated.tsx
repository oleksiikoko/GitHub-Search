const Updated: React.FC<{ updated_at: Date }> = ({ updated_at }) => {
  return <div className="updated">{updated_at}</div>;
};

export default Updated;
