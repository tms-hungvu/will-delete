interface FormErrorProps {
  error: string;
}

const FormError = ({ error }: FormErrorProps) => {
  return (
    <span className="text-xs leading-3 font-semibold text-red-500">
      {error}
    </span>
  );
};

export default FormError;
