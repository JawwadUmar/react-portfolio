import emailjs from '@emailjs/browser';

/**
 * Sends an email using an HTML form element.
 * 
 * @param formTarget - The HTMLFormElement or a CSS selector string pointing to the form.
 * @returns A promise that resolves to the EmailJS response or rejects with an error.
 */

const EMAILJS_SERVICEID = import.meta.env.VITE_EMAILJS_SERVICEID;
const EMAILJS_TEMPLATEID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
const EMAILJS_PUBLICKEY = import.meta.env.VITE_EMAILJS_PUBLICKEY;

export const sendEmailForm = async (formTarget: HTMLFormElement | string): Promise<any> => {
  try {

    console.log('Sending email using EmailJS with form:', formTarget);
    console.log('Service ID:', EMAILJS_SERVICEID);
    console.log('Template ID:', EMAILJS_TEMPLATEID);
    console.log('Public Key:', EMAILJS_PUBLICKEY);
    const response = await emailjs.sendForm(
      EMAILJS_SERVICEID,
      EMAILJS_TEMPLATEID,
      formTarget,
      EMAILJS_PUBLICKEY
    );
    return response;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
};
