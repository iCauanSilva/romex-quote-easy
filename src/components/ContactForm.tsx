
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FormSubmitButtons } from "./FormSubmitButtons";
import { FormData } from "@/utils/formSubmission";
import { useCnpjLookup } from "@/hooks/useCnpjLookup";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  message: z.string().min(5, "Mensagem deve ter pelo menos 5 caracteres"),
  cnpj: z.string().optional(),
  companyName: z.string().optional(),
});

export function ContactForm() {
  const [companyName, setCompanyName] = useState("");
  const { lookupCompany, isLoading, error } = useCnpjLookup();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      cnpj: "",
      companyName: "",
    },
  });
  
  const isValid = form.formState.isValid;
  const cnpjValue = form.watch("cnpj");

  useEffect(() => {
    if (cnpjValue && cnpjValue.replace(/\D/g, '').length === 14) {
      const fetchCompanyData = async () => {
        const company = await lookupCompany(cnpjValue);
        if (company) {
          setCompanyName(company);
          form.setValue("companyName", company);
          toast.success("Empresa encontrada!");
        } else if (error) {
          toast.error(error);
        }
      };
      
      fetchCompanyData();
    } else {
      setCompanyName("");
      form.setValue("companyName", "");
    }
  }, [cnpjValue, lookupCompany, error, form]);
  
  // Initialize formData with the required properties
  const formData: FormData = {
    name: form.watch("name") || "",
    email: form.watch("email") || "",
    phone: form.watch("phone") || "",
    message: form.watch("message") || "",
    cnpj: form.watch("cnpj") || "",
    companyName: form.watch("companyName") || "",
  };

  const formatCnpjInput = (value: string) => {
    // Remove tudo que não é dígito
    const digits = value.replace(/\D/g, '');
    
    // Aplica a máscara XX.XXX.XXX/XXXX-XX
    return digits
      .replace(/^(\d{2})(\d)/, '$1.$2')
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/\.(\d{3})(\d)/, '.$1/$2')
      .replace(/(\d{4})(\d)/, '$1-$2')
      .slice(0, 18); // Limita o tamanho
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-roma-700">Solicitar Cotação</h2>
      
      <Form {...form}>
        <form className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome completo" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input placeholder="(11) 99999-9999" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CNPJ (opcional)</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="00.000.000/0000-00" 
                    {...field}
                    onChange={(e) => {
                      const formatted = formatCnpjInput(e.target.value);
                      field.onChange(formatted);
                    }}
                  />
                </FormControl>
                <FormMessage />
                {isLoading && (
                  <p className="text-sm text-blue-600">Buscando empresa...</p>
                )}
              </FormItem>
            )}
          />

          {companyName && (
            <FormField
              control={form.control}
              name="companyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome da Empresa</FormLabel>
                  <FormControl>
                    <Input 
                      {...field}
                      value={companyName}
                      readOnly
                      className="bg-gray-50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Descreva o que você precisa..." 
                    className="resize-none min-h-[100px]"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormSubmitButtons 
            formData={formData} 
            isValid={isValid}
          />
        </form>
      </Form>
    </div>
  );
}
