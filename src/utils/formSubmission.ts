
export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendViaWhatsApp = (formData: FormData) => {
  const { name, email, phone, message } = formData;
  const text = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}`;
  const whatsappNumber = "5511999999999"; // Substitua pelo número correto
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
};

export const sendViaEmail = (formData: FormData) => {
  const { name, email, phone, message } = formData;
  const subject = `Contato de ${name}`;
  const body = `Nome: ${name}%0D%0AEmail: ${email}%0D%0ATelefone: ${phone}%0D%0AMensagem: ${message}`;
  window.location.href = `mailto:contato@romaexpress.com.br?subject=${subject}&body=${body}`;
};
