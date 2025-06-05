
export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  cnpj?: string;
  companyName?: string;
}

export const sendViaWhatsApp = (formData: FormData) => {
  const { name, email, phone, message, cnpj, companyName } = formData;
  
  // Formata a mensagem para o WhatsApp
  let text = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}`;
  
  if (cnpj && companyName) {
    text += `%0ACNPJ: ${cnpj}%0AEmpresa: ${companyName}`;
  }
  
  text += `%0AMensagem: ${message}`;
  
  // Número de WhatsApp para onde a mensagem será enviada (adicione seu número aqui)
  const whatsappNumber = "5511999999999"; // Substitua pelo número correto
  
  // Cria a URL do WhatsApp
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
  
  // Abre uma nova janela com o WhatsApp
  window.open(whatsappUrl, "_blank");
};

export const sendViaEmail = (formData: FormData) => {
  const { name, email, phone, message, cnpj, companyName } = formData;
  
  // Formata o assunto e o corpo do email
  const subject = `Solicitação de Cotação - ${name}`;
  let body = `Nome: ${name}%0AEmail: ${email}%0ATelefone: ${phone}`;
  
  if (cnpj && companyName) {
    body += `%0ACNPJ: ${cnpj}%0AEmpresa: ${companyName}`;
  }
  
  body += `%0AMensagem: ${message}`;
  
  // Email para onde a mensagem será enviada (adicione seu email aqui)
  const toEmail = "contato@romaexpress.com.br"; // Substitua pelo email correto
  
  // Cria a URL do mailto
  const mailtoUrl = `mailto:${toEmail}?subject=${subject}&body=${body}`;
  
  // Abre o cliente de email padrão
  window.location.href = mailtoUrl;
};
