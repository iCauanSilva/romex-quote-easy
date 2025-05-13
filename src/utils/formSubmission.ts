
export interface FormData {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  [key: string]: any; // For any additional form fields
}

export const sendViaWhatsApp = (formData: FormData): void => {
  const text = encodeURIComponent(
    `Nome: ${formData.name || ''}\n` +
    `Email: ${formData.email || ''}\n` +
    `Telefone: ${formData.phone || ''}\n` +
    `Mensagem: ${formData.message || ''}\n`
  );
  
  // WhatsApp API URL
  const whatsappUrl = `https://wa.me/?text=${text}`;
  window.open(whatsappUrl, '_blank');
};

export const sendViaEmail = (formData: FormData): void => {
  const subject = encodeURIComponent("Nova cotação do site");
  const body = encodeURIComponent(
    `Nome: ${formData.name || ''}\n` +
    `Email: ${formData.email || ''}\n` +
    `Telefone: ${formData.phone || ''}\n` +
    `Mensagem: ${formData.message || ''}\n`
  );
  
  // Standard mailto link
  window.location.href = `mailto:cotacaosp@romaexpress.com.br?subject=${subject}&body=${body}`;
};
