          

import React, { useEffect } from 'react';
import { useLanguageContext } from "@contexts/LanguageContext";
import { useState } from "react";

function ContactPage() {
    const { language } = useLanguageContext();
    const isArabic = language === 'ar';

    // إضافة scroll to top (للـ ContactPage فقط)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant'
            });
        }
    }, []);

    const [form, setForm] = useState({
        name: '',
        email: '', // ✅ إضافة email field
        phone: '',
        service: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const services = [
        {
            en: 'Oracle Fusion Technical Support',
            ar: 'دعم Oracle Fusion الفني'
        },
        {
            en: 'Oracle APEX Development',
            ar: 'تطوير تطبيقات Oracle APEX'
        },
        {
            en: 'EHR Integration with Oracle',
            ar: 'تكامل EHR مع Oracle'
        },
        {
            en: 'IT Consulting',
            ar: 'استشارات تقنية'
        },
        {
            en: 'Custom Solutions Development',
            ar: 'تطوير حلول مخصصة'
        }
    ];

    const validateField = (field, value) => {
        // ✅ Updated phone regex - accepts any phone format
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
        // ✅ Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        switch (field) {
            case 'name':
                if (!value.trim()) return isArabic ? 'الاسم مطلوب' : 'Name is required';
                return '';
            case 'email': // ✅ Email validation
                if (!value.trim()) return isArabic ? 'البريد الإلكتروني مطلوب' : 'Email is required';
                if (!emailRegex.test(value)) return isArabic ? 'البريد الإلكتروني غير صالح' : 'Invalid email address';
                return '';
            case 'phone':
                if (!value.trim()) return isArabic ? 'رقم الموبايل مطلوب' : 'Mobile number is required';
                if (!phoneRegex.test(value)) return isArabic ? 'رقم موبايل غير صالح' : 'Invalid mobile number';
                return '';
            case 'service':
                if (!value) return isArabic ? 'يرجى اختيار خدمة' : 'Please select a service';
                return '';
            default:
                return '';
        }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // التحقق من صحة البيانات
    const newErrors = {};
    newErrors.name = validateField('name', form.name) || undefined;
    newErrors.email = validateField('email', form.email) || undefined;
    newErrors.phone = validateField('phone', form.phone) || undefined;
    newErrors.service = validateField('service', form.service) || undefined;

    Object.keys(newErrors).forEach((k) => newErrors[k] === undefined && delete newErrors[k]);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
        setIsSubmitting(true);

        try {
            // ✅ هنا التغيير: استخدام AJAX payload بدل FormData
            const payload = {
                name: form.name,
                email: form.email,
                phone: form.phone,
                service: form.service,
                message: `
طلب خدمة جديد من موقع AwlBit:

الاسم: ${form.name}
البريد الإلكتروني: ${form.email}
رقم الموبايل: ${form.phone}
الخدمة المطلوبة: ${form.service}

تاريخ الطلب: ${new Date().toLocaleDateString('ar-EG')}
الوقت: ${new Date().toLocaleTimeString('ar-EG')}
                `,
                _subject: `طلب خدمة جديد من ${form.name} - ${form.service}`,
                _captcha: 'false'
            };

            // ✅ AJAX endpoint مع JSON headers
            const response = await fetch('https://formsubmit.co/ajax/samarkhaledabd100@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            // ✅ التحقق من النجاح
            if (response.ok && data.success) {
                alert(isArabic ? 
                    'تم إرسال طلبك بنجاح! \n\nسيتواصل معك فريق AwlBit خلال 24 ساعة.' : 
                    'Your request has been sent successfully! \n\nAwlBit team will contact you within 24 hours.'
                );
                
                setForm({ name: '', email: '', phone: '', service: '' });
                setErrors({});
            } else {
                throw new Error(data.message || 'Failed to submit');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            
            alert(isArabic ? 
                'عذراً، حدث خطأ في الإرسال. \n\nيرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة على: \n+20 100 467 7036' :
                'Sorry, there was an error sending your request. \n\nPlease try again or contact us directly at: \n+20 100 467 7036'
            );
        }

        setIsSubmitting(false);
    }
};

    return (
        <div className="contact-page min-h-screen bg-gray-50 flex items-center justify-center py-12">
            <div className="w-full max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* الأنيميشن */}
                    <div className="order-2 lg:order-1">
                        <div className="w-full h-96 flex items-center justify-center">
                            <div className="contact-animation">
                                <div className="email-container">
                                    <div className="email-icon">
                                        <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>

                                    <div className="flying-message">
                                        <div className="message-dot"></div>
                                        <div className="message-dot delay-1"></div>
                                        <div className="message-dot delay-2"></div>
                                    </div>
                                </div>

                                <div className="floating-circles">
                                    <div className="circle circle-1"></div>
                                    <div className="circle circle-2"></div>
                                    <div className="circle circle-3"></div>
                                    <div className="circle circle-4"></div>
                                </div>

                                <div className="floating-icons">
                                    <div className="icon-container icon-1">
                                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="icon-container icon-2">
                                        <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* نموذج الاتصال */}
                    <div className="order-1 lg:order-2">
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-3">
                                    {isArabic ? 'احجز استشارتك المجانية' : 'Book Your Free Consultation'}
                                </h2>
                                <p className="text-gray-600">
                                    {isArabic
                                        ? 'املأ البيانات وسنتواصل معك خلال 24 ساعة'
                                        : 'Fill in your details and we will contact you within 24 hours'
                                    }
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* الاسم */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {isArabic ? 'الاسم الكامل' : 'Full Name'} <span style={{ color: '#0B1B2D' }}>*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setForm({ ...form, name: value });
                                                if (errors.name) setErrors({ ...errors, name: validateField('name', value) });
                                            }}
                                            style={{
                                                borderColor: errors.name ? '#0B1B2D' : '#d1d5db',
                                                outline: 'none'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#0B1B2D'}
                                            onBlur={(e) => {
                                                if (!errors.name) {
                                                    e.target.style.borderColor = '#d1d5db';
                                                }
                                            }}
                                            className="w-full pl-10 pr-4 py-3 border bg-white rounded-lg transition duration-200"
                                            placeholder={isArabic ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                                        />
                                    </div>
                                    {errors.name && <p style={{ color: '#0B1B2D' }} className="text-sm mt-1">{errors.name}</p>}
                                </div>

                                {/* ✅ البريد الإلكتروني */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {isArabic ? 'البريد الإلكتروني' : 'Email Address'} <span style={{ color: '#0B1B2D' }}>*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setForm({ ...form, email: value });
                                                if (errors.email) setErrors({ ...errors, email: validateField('email', value) });
                                            }}
                                            style={{
                                                borderColor: errors.email ? '#0B1B2D' : '#d1d5db',
                                                outline: 'none'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#0B1B2D'}
                                            onBlur={(e) => {
                                                if (!errors.email) {
                                                    e.target.style.borderColor = '#d1d5db';
                                                }
                                            }}
                                            className="w-full pl-10 pr-4 py-3 border bg-white rounded-lg transition duration-200"
                                            placeholder={isArabic ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
                                        />
                                    </div>
                                    {errors.email && <p style={{ color: '#0B1B2D' }} className="text-sm mt-1">{errors.email}</p>}
                                </div>

                                {/* ✅ رقم الموبايل - Updated */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {isArabic ? 'رقم الموبايل' : 'Mobile Number'} <span style={{ color: '#0B1B2D' }}>*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="tel"
                                            dir="ltr"
                                            value={form.phone}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setForm({ ...form, phone: value });
                                                if (errors.phone) setErrors({ ...errors, phone: validateField('phone', value) });
                                            }}
                                            style={{
                                                borderColor: errors.phone ? '#0B1B2D' : '#d1d5db',
                                                outline: 'none'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#0B1B2D'}
                                            onBlur={(e) => {
                                                if (!errors.phone) {
                                                    e.target.style.borderColor = '#d1d5db';
                                                }
                                            }}
                                            className="w-full pl-10 pr-4 py-3 border bg-white rounded-lg transition duration-200"
                                            placeholder="+20 XXX XXX XXXX" // ✅ Keep placeholder as requested
                                        />
                                    </div>
                                    {errors.phone && <p style={{ color: '#0B1B2D' }} className="text-sm mt-1">{errors.phone}</p>}
                                </div>

                                {/* اختيار الخدمة */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {isArabic ? 'اختر الخدمة' : 'Choose Service'} <span style={{ color: '#0B1B2D' }}>*</span>
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h6a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                            </svg>
                                        </div>
                                        <select
                                            value={form.service}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                setForm({ ...form, service: value });
                                                if (errors.service) setErrors({ ...errors, service: validateField('service', value) });
                                            }}
                                            style={{
                                                borderColor: errors.service ? '#0B1B2D' : '#d1d5db',
                                                outline: 'none'
                                            }}
                                            onFocus={(e) => e.target.style.borderColor = '#0B1B2D'}
                                            onBlur={(e) => {
                                                if (!errors.service) {
                                                    e.target.style.borderColor = '#d1d5db';
                                                }
                                            }}
                                            className="w-full pl-10 pr-10 py-3 border bg-white rounded-lg transition duration-200 appearance-none cursor-pointer"
                                        >
                                            <option value="">
                                                {isArabic ? 'اختر الخدمة المناسبة لك' : 'Select the right service for you'}
                                            </option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service.en}>
                                                    {isArabic ? service.ar : service.en}
                                                </option>
                                            ))}
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </div>
                                    </div>
                                    {errors.service && <p style={{ color: '#0B1B2D' }} className="text-sm mt-1">{errors.service}</p>}
                                </div>

                                {/* زر الإرسال */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{ 
                                        backgroundColor: isSubmitting ? '#9CA3AF' : '#0B1B2D',
                                        cursor: isSubmitting ? 'not-allowed' : 'pointer'
                                    }}
                                    className="w-full text-white py-4 px-8 rounded-lg font-semibold text-lg hover:opacity-90 transition duration-200 transform hover:scale-105 disabled:transform-none disabled:hover:opacity-100"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>{isArabic ? 'جارٍ الإرسال...' : 'Sending...'}</span>
                                        </div>
                                    ) : (
                                        <span>{isArabic ? 'إرسال الطلب' : 'Send Request'}</span>
                                    )}
                                </button>

                                {/* النص المحدث مع الأيقونة */}
                                <div className="text-center">
                                    <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {isArabic
                                            ? 'سيتم إرسال طلبك مباشرة إلى فريق AwlBit'
                                            : 'Your request will be sent directly to AwlBit team'
                                        }
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* نفس الـ CSS للأنيميشن */}
            <style>{`
                .contact-animation {
                  position: relative;
                  width: 250px;
                  height: 250px;
                  margin: 0 auto;
                }
                
                .email-container {
                  position: relative;
                  z-index: 3;
                }
                
                .email-icon {
                  animation: bounce 2s infinite ease-in-out;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }
                
                .flying-message {
                  position: absolute;
                  top: 30%;
                  left: 70%;
                  display: flex;
                  gap: 4px;
                }
                
                .message-dot {
                  width: 8px;
                  height: 8px;
                  background: #3B82F6;
                  border-radius: 50%;
                  animation: fly 1.5s infinite ease-in-out;
                }
                
                .message-dot.delay-1 {
                  animation-delay: 0.2s;
                }
                
                .message-dot.delay-2 {
                  animation-delay: 0.4s;
                }
                
                .floating-circles {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  z-index: 1;
                }
                
                .circle {
                  position: absolute;
                  border-radius: 50%;
                  background: rgba(59, 130, 246, 0.2);
                  animation: float 4s infinite ease-in-out;
                }
                
                .circle-1 {
                  width: 20px;
                  height: 20px;
                  top: 10%;
                  left: 15%;
                  animation-delay: 0s;
                  background: rgba(34, 197, 94, 0.3);
                }
                
                .circle-2 {
                  width: 15px;
                  height: 15px;
                  top: 70%;
                  right: 20%;
                  animation-delay: 1s;
                  background: rgba(168, 85, 247, 0.3);
                }
                
                .circle-3 {
                  width: 25px;
                  height: 25px;
                  bottom: 15%;
                  left: 10%;
                  animation-delay: 2s;
                  background: rgba(249, 115, 22, 0.3);
                }
                
                .circle-4 {
                  width: 18px;
                  height: 18px;
                  top: 20%;
                  right: 10%;
                  animation-delay: 1.5s;
                  background: rgba(236, 72, 153, 0.3);
                }
                
                .floating-icons {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  z-index: 2;
                }
                
                .icon-container {
                  position: absolute;
                  animation: iconFloat 3s infinite ease-in-out;
                }
                
                .icon-1 {
                  top: 60%;
                  left: 5%;
                  animation-delay: 0.5s;
                }
                
                .icon-2 {
                  top: 25%;
                  right: 5%;
                  animation-delay: 1.8s;
                }
                
                @keyframes bounce {
                  0%, 20%, 50%, 80%, 100% {
                    transform: translateY(0) scale(1);
                  }
                  40% {
                    transform: translateY(-15px) scale(1.05);
                  }
                  60% {
                    transform: translateY(-8px) scale(1.02);
                  }
                }
                
                @keyframes float {
                  0%, 100% {
                    transform: translateY(0px) scale(1);
                    opacity: 0.6;
                  }
                  50% {
                    transform: translateY(-25px) scale(1.2);
                    opacity: 1;
                  }
                }
                
                @keyframes iconFloat {
                  0%, 100% {
                    transform: translateY(0px) rotate(0deg);
                    opacity: 0.7;
                  }
                  50% {
                    transform: translateY(-15px) rotate(5deg);
                    opacity: 1;
                  }
                }
                
                @keyframes fly {
                  0% {
                    transform: translateX(0) translateY(0);
                    opacity: 0;
                  }
                  50% {
                    transform: translateX(20px) translateY(-10px);
                    opacity: 1;
                  }
                  100% {
                    transform: translateX(40px) translateY(-20px);
                    opacity: 0;
                  }
                }
                
                .contact-animation:hover .email-icon {
                  animation-duration: 1s;
                }
                
                .contact-animation:hover .circle {
                  animation-duration: 2s;
                }
                
                .contact-animation:hover .message-dot {
                  animation-duration: 0.8s;
                }
            `}</style>
        </div>
    );
}

export default ContactPage;
