import api from "@/api/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const formSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters').max(50, 'Username must be at most 50 characters'),
  password: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export default function LoginForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: ''
    },
  });

  const onSubmit = async (values: FormData) => {
    const response = await api.post('/example', values);
    console.log(response.data);
  };

  return(
    <div className="flex flex-col gap-2 p-4 items-start w-72">
      <h2>ورود</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="نام کاربری" {...field} />
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
                <FormControl>
                  <Input placeholder="رمز عبور" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-12 bg-blue-500 hover:bg-blue-400 w-full">ورود</Button>
        </form>
      </Form>
    </div>
  );
}