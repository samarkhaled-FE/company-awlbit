
import React from 'react';
import { useLanguageContext } from "@contexts/LanguageContext";
import { Link } from "react-router-dom";

function MethodologySection() {
    const { language } = useLanguageContext();
    const isArabic = language === "ar";

    const methodologySteps = [
        // كما في الكود السابق الخاص بك
    ];

    return (
        <section
            id="methodology"
            className="bg-white pb-20"
            style={{
                scrollMarginTop: '72px',    // يعوض الناف بار
                paddingTop: '1rem'          // أو ألغِ تماماً لو لا تريد أي فراغ بالاعلى
            }}
        >
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        {isArabic ? "منهجية عمل AwlBit المتقدمة" : "AwlBit's Advanced Work Methodology"}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {isArabic
                            ? "نتبع منهجية علمية متطورة لضمان نجاح مشروعك وتحقيق أهدافك"
                            : "We follow an advanced scientific methodology to ensure your project's success and achieve your goals"
                        }
                    </p>
                </div>
                {/* Timeline */}
                <div className="relative">
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden md:block"></div>
                    <div className="space-y-12">
                        {methodologySteps.map((step, index) => (
                            <div key={step.id} className={`relative flex items-center ${
                                index % 2 === 0
                                    ? 'md:flex-row'
                                    : 'md:flex-row-reverse'
                            } flex-col`}>
                                <div className={`w-full md:w-5/12 ${
                                    index % 2 === 0
                                        ? 'md:pr-8'
                                        : 'md:pl-8'
                                }`}>
                                    <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                                        <div
                                            className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0"
                                            style={{ backgroundColor: step.color }}
                                        >
                                            <i className={`${step.icon} text-2xl text-white`}></i>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center md:text-right">
                                            {step.title[language]}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed text-center md:text-right">
                                            {step.description[language]}
                                        </p>
                                    </div>
                                </div>
                                <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                                        style={{ backgroundColor: step.color }}>
                                        {step.id}
                                    </div>
                                </div>
                                <div className="md:hidden mb-4">
                                    <div
                                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg mx-auto"
                                        style={{ backgroundColor: step.color }}>
                                        {step.id}
                                    </div>
                                </div>
                                <div className="w-full md:w-5/12 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
                {/* CTA Section */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold mb-4">
                            {isArabic ? "جاهز لبدء مشروعك؟" : "Ready to Start Your Project?"}
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            {isArabic
                                ? "دعنا نطبق منهجيتنا المتقدمة على مشروعك القادم"
                                : "Let us apply our advanced methodology to your next project"
                            }
                        </p>
                        <Link
                            to="/company#contact"
                            className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105">
                            <i className="fa-solid fa-calendar-check"></i>
                            <span>{isArabic ? "احجز استشارة مجانية الآن" : "Book Free Consultation Now"}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MethodologySection;
