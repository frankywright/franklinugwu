import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API call
      console.log("Form Submitted", formData);
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <section id="contact" className="py-24 max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-electric font-heading font-bold text-lg">04. What's Next?</span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-white mt-2 mb-6">Get In Touch</h2>
        <p className="text-slate-light text-lg max-w-xl mx-auto">
          Whether you have a question about my projects, a business proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 bg-navy-800 p-8 rounded-2xl shadow-xl border border-navy-700">
        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl text-slate-white font-bold mb-6">Contact Details</h3>
          
          <div className="flex items-start gap-4">
            <div className="bg-navy-900 p-3 rounded-full text-electric">
              <Mail size={20} />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase">Email</p>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-light hover:text-electric transition-colors">
                {PERSONAL_INFO.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4">
             <div className="bg-navy-900 p-3 rounded-full text-electric">
              <Phone size={20} />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase">Phone</p>
              <p className="text-slate-light">{PERSONAL_INFO.phone}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
             <div className="bg-navy-900 p-3 rounded-full text-electric">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase">Location</p>
              <p className="text-slate-light">{PERSONAL_INFO.location}</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm text-slate-light mb-1">Name</label>
            <input 
              type="text" 
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-navy-900 border ${errors.name ? 'border-red-500' : 'border-navy-700'} rounded p-3 text-slate-lighter focus:outline-none focus:border-electric transition-colors`}
              placeholder="Your Name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-slate-light mb-1">Email</label>
            <input 
              type="email" 
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-navy-900 border ${errors.email ? 'border-red-500' : 'border-navy-700'} rounded p-3 text-slate-lighter focus:outline-none focus:border-electric transition-colors`}
              placeholder="your@email.com"
            />
             {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm text-slate-light mb-1">Subject (Optional)</label>
            <input 
              type="text" 
              name="subject"
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-navy-900 border border-navy-700 rounded p-3 text-slate-lighter focus:outline-none focus:border-electric transition-colors"
              placeholder="Project Inquiry"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-slate-light mb-1">Message</label>
            <textarea 
              name="message" 
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-navy-900 border ${errors.message ? 'border-red-500' : 'border-navy-700'} rounded p-3 text-slate-lighter focus:outline-none focus:border-electric transition-colors`}
              placeholder="How can I help you?"
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button 
            type="submit" 
            className="w-full bg-transparent border border-electric text-electric font-bold py-3 px-6 rounded hover:bg-electric/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Send Message
            <Send size={18} />
          </button>

          {status === 'success' && (
            <div className="p-3 bg-green-500/10 border border-green-500 text-green-400 rounded text-sm text-center">
              Thank you for reaching out. I’ll get back to you as soon as possible.
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;