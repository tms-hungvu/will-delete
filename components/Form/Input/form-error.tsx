interface FormErrorProps {
  error: string;
}

const FormError = ({ error }: FormErrorProps) => {
  return (
    <p className="text-xs leading-3 font-semibold text-red-500 mt-1">
      {error}
    </p>
  );
};

export default FormError;
