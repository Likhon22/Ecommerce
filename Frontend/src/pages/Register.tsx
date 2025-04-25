import EForm from "@/components/form/EForm";
import EButton from "@/components/ui/EButton";
import EInput from "@/components/ui/EInput";
import { useRegisterMutation } from "@/features/redux/features/auth/authApi";
import { registerSchema } from "@/schemas/authSchema";

import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

import { FieldValues, SubmitErrorHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [register, { isLoading }] = useRegisterMutation();
  const handleSubmit: SubmitErrorHandler<FieldValues> = async (data) => {
    try {
      const res = await register(data).unwrap();
      console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            Create an Account
          </h1>
          <p className="text-secondary">Sign up to get started</p>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <EForm
            onsubmit={handleSubmit}
            resolver={registerSchema}
            className="space-y-6"
          >
            <EInput
              name="name"
              placeholder="Enter your full name"
              type="text"
              label="Full Name"
              required={true}
              className="w-full"
            />
            <EInput
              name="email"
              placeholder="Enter your email"
              type="email"
              label="Email"
              required={true}
              className="w-full"
            />
            <div className=" relative">
              <EInput
                name="password"
                placeholder="Create a password"
                label="Password"
                type={`${showPassword ? "text" : "password"}`}
                required={true}
                className="w-full"
              />
              {!showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3  top-7 cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3  top-7 cursor-pointer"
                />
              )}
            </div>
            <div className=" relative">
              <EInput
                name="confirmPassword"
                placeholder="Confirm your password"
                label="Confirm Password"
                type={`${showConfirmPassword ? "text" : "password"}`}
                required={true}
                className="w-full"
              />
              {!showConfirmPassword ? (
                <EyeOff
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3  top-7 cursor-pointer"
                />
              ) : (
                <Eye
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3  top-7 cursor-pointer"
                />
              )}
            </div>
            <EButton
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
            >
              Create Account
            </EButton>
          </EForm>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <a
              href="/login"
              className="text-primary font-medium hover:underline"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
