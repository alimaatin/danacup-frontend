// src/components/FormExample.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import api from '@/api/api';

const formSchema = z.object({
  username: z.string().min(2, 'Username must be at least 2 characters').max(50, 'Username must be at most 50 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function FormExample() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });


  const onSubmit = async (values: FormData) => {
    const response = await api.post('/example', values);
    console.log(response.data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
