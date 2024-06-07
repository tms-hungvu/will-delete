import { Controller } from "react-hook-form";

import { cn } from "@/utils/helper";
import FormError from "./form-error";

const FormInput = ({
  className,
  control,
  name,
  disabled,
  rules,
  error,
  children,
  ...inputProps
}: any) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, formState: { errors } }) => {
        return (
          <div className="mb-4">
            <div className="relative w-full flex flex-col justify-center items-center">
              <input
                {...field}
                {...inputProps}
                disabled={disabled}
                className={cn(
                  `w-[50%] rounded-md bg-neutral-200 mb-1 px-3 py-3 text-sm placeholder:text-neutral-400 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-gray-400`,
                  errors[name] && `focus:ring-offset-0 focus:ring-red-500`,
                  className
                )}
              />
              <label
                htmlFor="show-password"
                className="flex justify-center items-center absolute inset-y-0 right-2 cursor-pointer"
              >
                {children}
              </label>
            </div>
            {errors[name] && (
              <FormError error={errors[name]?.message as string} />
            )}
          </div>
        );
      }}
    />
  );
};

export default FormInput;
