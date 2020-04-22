const License: React.FC<{ license: string }> = ({ license }) => {
  return (
    license && license !== "Other" && <div className="license">{license}</div>
  );
};

export default License;
