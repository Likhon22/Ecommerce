import EForm from "@/components/form/EForm";
import EButton from "@/components/ui/EButton";
import EInput from "@/components/ui/EInput";
import { useLoginMutation } from "@/features/redux/features/auth/authApi";
import { loginSchema } from "@/schemas/authSchema";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FieldValues, SubmitErrorHandler } from "react-hook-form";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const handleSubmit: SubmitErrorHandler<FieldValues> = (data) => {
    try {
      const res = login(data).unwrap();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back</h1>
          <p className="text-secondary">Sign in to your account to continue</p>
        </div>

        <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
          <EForm
            resolver={loginSchema}
            onsubmit={handleSubmit}
            className="space-y-6"
          >
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

            <div className="flex items-center justify-between text-sm">
              <a href="#" className="text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <EButton
              disabled={isLoading}
              type="submit"
              className="w-full py-2.5 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-colors"
            >
              Sign in
            </EButton>
          </EForm>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <a
              href="/register"
              className="text-primary font-medium hover:underline"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
