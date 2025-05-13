
export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export const sendViaWhatsApp = (formData: FormData) => {
  const { name, email, phone, message } = formData;
  
  // Formata a mensagem para o WhatsApp
  const text = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}`;
  
  // Número de WhatsApp para onde a mensagem será enviada (adicione seu número aqui)
  const whatsappNumber = "5511999999999"; // Substitua pelo número correto
  
  // Cria a URL do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
  
  // Abre uma nova janela com o WhatsApp
  window.open(whatsappUrl, "_blank");
};

export const sendViaEmail = (formData: FormData) => {
  const { name, email, phone, message } = formData;
  
  // Formata o assunto e o corpo do email
  const subject = `Solicitação de Cotação - ${name}`;
  const body = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}%0AMensagem: ${message}`;
  
  // Email para onde a mensagem será enviada (adicione seu email aqui)
  const toEmail = "contato@romaexpress.com.br"; // Substitua pelo email correto
  
  // Cria a URL do mailto
  const mailtoUrl = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  
  // Abre o cliente de email padrão
  window.location.href = mailtoUrl;
};
