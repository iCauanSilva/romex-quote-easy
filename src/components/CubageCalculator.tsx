
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  length: z.string().min(1, "Comprimento é obrigatório"),
  width: z.string().min(1, "Largura é obrigatória"),
  height: z.string().min(1, "Altura é obrigatória"),
});

export function CubageCalculator() {
  const [result, setResult] = useState<number | null>(null);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      length: "",
      width: "",
      height: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const length = parseFloat(values.length);
    const width = parseFloat(values.width);
    const height = parseFloat(values.height);
    
    if (isNaN(length) || isNaN(width) || isNaN(height)) {
      return;
    }
    
    // Calculando a cubagem (m³)
    const cubicMeters = (length * width * height) / 1000000; // Convertendo de cm³ para m³
    setResult(cubicMeters);
  };

  return (
    <div className="space-y-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="length"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comprimento (cm)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" min="0" placeholder="0" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="width"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Largura (cm)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" min="0" placeholder="0" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="height"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Altura (cm)</FormLabel>
                <FormControl>
                  <Input type="number" step="0.01" min="0" placeholder="0" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <Button type="submit" className="w-full bg-roma-600 hover:bg-roma-700">
            Calcular
          </Button>
        </form>
      </Form>
      
      {result !== null && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
          <p className="text-center font-medium">
            Volume: <span className="text-roma-700">{result.toFixed(6)} m³</span>
          </p>
        </div>
      )}
    </div>
  );
}
