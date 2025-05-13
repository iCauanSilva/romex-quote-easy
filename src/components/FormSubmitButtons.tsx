
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare } from "lucide-react";
import { FormData, sendViaEmail, sendViaWhatsApp } from "@/utils/formSubmission";
import { toast } from "sonner";

interface FormSubmitButtonsProps {
  formData: FormData;
  isValid: boolean;
}

export function FormSubmitButtons({ formData, isValid }: FormSubmitButtonsProps) {
  const handleWhatsAppSubmit = () => {
    if (!isValid) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }
    
    sendViaWhatsApp(formData);
    toast.success("Redirecionando para o WhatsApp");
  };

  const handleEmailSubmit = () => {
    if (!isValid) {
      toast.error("Por favor, preencha todos os campos obrigatórios");
      return;
    }
    
    sendViaEmail(formData);
    toast.success("Abrindo seu cliente de email");
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full mt-6">
      <Button 
        type="button"
        onClick={handleEmailSubmit}
        className="flex-1 bg-roma-600 hover:bg-roma-700 text-white"
      >
        <Mail className="mr-2 h-4 w-4" />
        Enviar por E-mail
      </Button>
      
      <Button 
        type="button"
        onClick={handleWhatsAppSubmit}
        className="flex-1 bg-green-600 hover:bg-green-700 text-white"
      >
        <MessageSquare className="mr-2 h-4 w-4" />
        Enviar por WhatsApp
      </Button>
    </div>
  );
}
