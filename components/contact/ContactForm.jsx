// components/contact/ContactForm.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiCheckCircle, FiAlertCircle, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    whatsappMessage: '' // حقل مخصص للواتساب
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: ''
  });

  const [whatsappStatus, setWhatsappStatus] = useState({
    sending: false,
    sent: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // دالة إرسال الإيميل (كما هي)
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false, message: '' });

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'haedarahasan69@gmail.com'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: '✅ Email sent successfully!'
      });

      setTimeout(() => {
        setFormData(prev => ({
          ...prev,
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        }));
        setStatus({ submitting: false, submitted: false, error: false, message: '' });
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: '❌ Failed to send email. Please try again.'
      });
    }
  };

  // دالة إرسال رسالة واتساب
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.whatsappMessage.trim()) {
      setWhatsappStatus({
        sending: false,
        sent: false,
        error: true,
        message: '❌ Please write a message first'
      });
      return;
    }

    setWhatsappStatus({
      sending: true,
      sent: false,
      error: false,
      message: 'Opening WhatsApp...'
    });

    // تكوين رسالة واتساب
    const whatsappText = `
*📱 New WhatsApp Message from Portfolio*

*👤 Name:* ${formData.name || 'Not provided'}
*📧 Email:* ${formData.email || 'Not provided'}
*📝 Message:*
${formData.whatsappMessage}

_Sent from your portfolio website_
    `;

    // الرقم بصيغة صحيحة
    const phoneNumber = '963983796029';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappText)}`;
    
    // فتح واتساب
    window.open(whatsappUrl, '_blank');

    setWhatsappStatus({
      sending: false,
      sent: true,
      error: false,
      message: '✅ WhatsApp opened with your message!'
    });

    // مسح حقل الواتساب بعد 3 ثواني
    setTimeout(() => {
      setFormData(prev => ({
        ...prev,
        whatsappMessage: ''
      }));
      setWhatsappStatus({
        sending: false,
        sent: false,
        error: false,
        message: ''
      });
    }, 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-light-card-bg dark:bg-dark-card-bg rounded-3xl p-8 border border-light-border-primary dark:border-dark-border-primary shadow-lg"
    >
      <h3 className="text-2xl font-bold text-light-text-primary dark:text-dark-text-primary mb-2">
        📬 Contact Me
      </h3>
      <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
        Send email or WhatsApp message directly
      </p>

      {/* قسم الإيميل */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 flex items-center gap-2">
          <FiSend className="text-light-accent-primary" />
          Send Email
        </h4>
        
        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-light-border-primary dark:border-dark-border-primary rounded-xl text-light-text-primary dark:text-dark-text-primary focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-light-border-primary dark:border-dark-border-primary rounded-xl text-light-text-primary dark:text-dark-text-primary focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-light-border-primary dark:border-dark-border-primary rounded-xl text-light-text-primary dark:text-dark-text-primary focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors"
                placeholder="+963 983 796 029"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-light-border-primary dark:border-dark-border-primary rounded-xl text-light-text-primary dark:text-dark-text-primary focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              Your Message *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-light-border-primary dark:border-dark-border-primary rounded-xl text-light-text-primary dark:text-dark-text-primary focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {status.message && (
            <div className={`p-4 rounded-xl flex items-center gap-3 ${
              status.error 
                ? 'bg-red-500/10 text-red-500 border border-red-500/20' 
                : 'bg-green-500/10 text-green-500 border border-green-500/20'
            }`}>
              {status.error ? <FiAlertCircle className="w-5 h-5" /> : <FiCheckCircle className="w-5 h-5" />}
              <span className="text-sm">{status.message}</span>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={status.submitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full group relative overflow-hidden bg-gradient-primary dark:bg-gradient-dark text-white rounded-xl px-6 py-4 text-base font-semibold tracking-wide shadow-lg hover:shadow-xl transition-all duration-500 disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {status.submitting ? 'Sending...' : (
                <>
                  Send Email
                  <FiSend className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </span>
          </motion.button>
        </form>
      </div>

      {/* قسم الواتساب - حقل منفصل */}
      <div className="border-t border-light-border-primary dark:border-dark-border-primary pt-8">
        <h4 className="text-lg font-semibold text-light-text-primary dark:text-dark-text-primary mb-4 flex items-center gap-2">
          <FaWhatsapp className="text-green-500 text-xl" />
          Quick WhatsApp Message
        </h4>
        
        <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              Your Name (Optional)
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-light-border-primary dark:border-dark-border-primary rounded-xl text-light-text-primary dark:text-dark-text-primary focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              Your Email (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-light-border-primary dark:border-dark-border-primary rounded-xl text-light-text-primary dark:text-dark-text-primary focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary mb-2">
              Your WhatsApp Message *
            </label>
            <textarea
              name="whatsappMessage"
              value={formData.whatsappMessage}
              onChange={handleChange}
              required
              rows="3"
              className="w-full px-4 py-3 bg-light-bg-tertiary dark:bg-dark-bg-tertiary border border-light-border-primary dark:border-dark-border-primary rounded-xl text-light-text-primary dark:text-dark-text-primary focus:border-light-accent-primary dark:focus:border-dark-accent-primary focus:outline-none transition-colors resize-none"
              placeholder="Type your message here... It will be sent directly to my WhatsApp"
            />
          </div>

          {whatsappStatus.message && (
            <div className={`p-4 rounded-xl flex items-center gap-3 ${
              whatsappStatus.error 
                ? 'bg-red-500/10 text-red-500 border border-red-500/20' 
                : 'bg-green-500/10 text-green-500 border border-green-500/20'
            }`}>
              {whatsappStatus.error ? <FiAlertCircle className="w-5 h-5" /> : <FiCheckCircle className="w-5 h-5" />}
              <span className="text-sm">{whatsappStatus.message}</span>
            </div>
          )}

          <motion.button
            type="submit"
            disabled={whatsappStatus.sending}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full group relative overflow-hidden bg-green-500 text-white rounded-xl px-6 py-4 text-base font-semibold tracking-wide shadow-lg hover:shadow-xl hover:bg-green-600 transition-all duration-500 disabled:opacity-50"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              {whatsappStatus.sending ? 'Opening...' : (
                <>
                  Send WhatsApp Message
                  <FaWhatsapp className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </>
              )}
            </span>
          </motion.button>
        </form>

        <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary text-center mt-4">
          ⚡ Clicking send will open WhatsApp with your message automatically
        </p>
      </div>
    </motion.div>
  );
};

export default ContactForm;