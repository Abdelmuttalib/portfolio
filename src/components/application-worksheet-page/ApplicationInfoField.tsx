const ApplicationInfoField = ({
  field,
  value,
}: {
  field: string;
  value: string;
}) => {
  return (
    <div className="flex items-center gap-2">
      <h3 className="font-medium">{field}</h3>
      <h4 className="font-normal text-gray-800">{value}</h4>
    </div>
  );
};

export default ApplicationInfoField;
