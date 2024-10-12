"use client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const formSchema = z.object({
  username: z
    .string()
    .min(2, "Username must be at least 2 characters long")
    .max(50, "Username must be max 50 characters long"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(50, "Password must be max 50 characters long"),
  email: z.string().email("Invalid email address"),
});

const SignupPage = () => {
  const { toast } = useToast();
  const router = useRouter();
  const [registerLoading, setRegisterLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values) => {
    setRegisterLoading(true);
    await axios
      .post("/api/signup", values)
      .then((res) => {
        setRegisterLoading(false);
        console.log(res);
        // Navigate to the dashboard page
        toast({
          variant: "default",
          title: "SignUp Sucessfull",
        });
        router.push("/login");
      })
      .catch((err) => {
        console.error(err);
        setRegisterLoading(false);
        // Handle error
        // Example:
        toast({
          variant: "destructive",
          title: "SignUp Failed",
          description: err.response.status + " | " + err.response.data.message,
        });
      });

    console.log(values);
  };
  return (
    <div className="w-10/12 sm:w-6/12 md:w-5/12 lg:w-4/12 xl:w-3/12">
      <div className="p-4">
        <p className="text-xl font-semibold text-left -mb-1">
          Sign up your account
        </p>
        <small>Please enter your details</small>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="py-4 space-y-4"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter you username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-normal">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter you email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Password</FormLabel>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <Button type="submit" size="sm" className="mt-4 w-full">
                {registerLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Sign Up
              </Button>
            </div>
          </form>
        </Form>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="underline underline-offset-4 text-foreground font-medium"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
