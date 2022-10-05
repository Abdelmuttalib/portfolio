const ApplicationInfoField = ({
  field,
  value,
}: {
  field: string;
  value: string;
}) => {
  return (
    <div className="flex items-center gap-1">
      <p className="font-medium">{field}</p>
      <p className="text-gray-800">{value}</p>
    </div>
  );
};

export default ApplicationInfoField;
