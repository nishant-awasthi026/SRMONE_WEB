// mail.js
import emailjs from 'emailjs-com';

const sendEmail = async (formData) => {
  const { name, email, message } = formData;
  const templateParams = { name, email, message };

  // Replace these with your actual EmailJS service and template IDs.
  const serviceID = 'service_w7np26e';
  const templateID = 'template_ed5piqf';
  const publicKey = 'T0GFrDTzVFY8WWi8d'; // Provided public key

  try {
    const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);
    return result;
  } catch (error) {
    throw error;
  }
};

export default sendEmail;
