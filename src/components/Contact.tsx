import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const contactMethods = [
    {
      icon: "📧",
      title: "Email",
      value: "joaquin.gil@email.com",
      href: "mailto:joaquin.gil@email.com",
      description: "Respondo en 24 horas",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "/in/joaquin-gil",
      href: "https://linkedin.com/in/joaquin-gil",
      description: "Conecta conmigo",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: "🐙",
      title: "GitHub",
      value: "/joaquin-gil",
      href: "https://github.com/joaquin-gil",
      description: "Ve mi código",
      color: "from-gray-700 to-gray-900 dark:from-gray-400 dark:to-gray-200"
    },
    {
      icon: "📱",
      title: "WhatsApp",
      value: "+598 XX XXX XXX",
      href: "https://wa.me/598XXXXXXX",
      description: "Chat directo",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 dark:bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 left-10 w-24 h-24 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100/80 dark:bg-green-900/30 backdrop-blur-sm text-green-700 dark:text-green-300 text-sm font-medium mb-6 border border-green-200/50 dark:border-green-700/50">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Disponible para proyectos
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-mono bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-800 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-300 bg-clip-text text-transparent mb-6 leading-tight">
            Hablemos
            <br />
            <span className="text-4xl sm:text-5xl lg:text-6xl font-light">del Proyecto</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes una idea increíble? Me encanta colaborar en proyectos desafiantes. 
            Conversemos sobre cómo puedo ayudarte a hacerla realidad.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          
          {/* Contact Methods - Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <div className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-gray-700/40 shadow-xl shadow-gray-900/5 dark:shadow-black/10 p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-400/10 dark:via-transparent dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-gray-900 dark:text-white">Conectemos</h3>
                </div>

                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a
                      key={method.title}
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/method relative flex items-center gap-4 p-4 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl border border-white/40 dark:border-gray-700/40 hover:border-blue-300/60 dark:hover:border-blue-600/60 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10 hover:-translate-y-1"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 dark:from-blue-400/10 dark:to-indigo-400/10 opacity-0 group-hover/method:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                      
                      <div className="relative flex-shrink-0">
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center shadow-md group-hover/method:scale-110 transition-transform duration-300`}>
                          <span className="text-white text-xl">{method.icon}</span>
                        </div>
                      </div>
                      
                      <div className="relative flex-1 min-w-0">
                        <div className="font-semibold font-mono text-gray-900 dark:text-white">{method.title}</div>
                        <div className="text-sm text-blue-600 dark:text-blue-400 font-medium truncate">{method.value}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">{method.description}</div>
                      </div>
                      
                      <div className="relative flex-shrink-0 text-gray-400 dark:text-gray-500 group-hover/method:text-blue-500 dark:group-hover/method:text-blue-400 transition-colors duration-300">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 dark:from-green-400/20 dark:to-emerald-400/20 backdrop-blur-sm rounded-2xl border border-green-200/50 dark:border-green-700/50 p-6 text-center">
              <div className="text-3xl mb-3">⚡</div>
              <div className="font-semibold font-mono text-green-700 dark:text-green-300 mb-2">Respuesta Rápida</div>
              <div className="text-sm text-green-600 dark:text-green-400">Típicamente respondo en menos de 24 horas</div>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-2">
            <div className="group relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl border border-white/40 dark:border-gray-700/40 shadow-xl shadow-gray-900/5 dark:shadow-black/10 p-8 transition-all duration-700 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-400/10">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 dark:from-blue-400/10 dark:via-transparent dark:to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white text-2xl">✉️</span>
                  </div>
                  <h3 className="text-2xl font-bold font-mono text-gray-900 dark:text-white">Envíame un mensaje</h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/40 dark:border-gray-700/40 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300 font-mono"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/40 dark:border-gray-700/40 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300 font-mono"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/40 dark:border-gray-700/40 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300 font-mono"
                      placeholder="¿De qué quieres hablar?"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium font-mono text-gray-700 dark:text-gray-300">
                      Mensaje *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-white/40 dark:border-gray-700/40 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 transition-all duration-300 font-mono resize-none"
                      placeholder="Cuéntame sobre tu proyecto, idea o cualquier cosa en la que pueda ayudarte..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 dark:from-blue-500 dark:to-indigo-500 dark:hover:from-blue-600 dark:hover:to-indigo-600 text-white font-semibold font-mono rounded-xl shadow-xl shadow-blue-500/25 dark:shadow-blue-400/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-400/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                      
                      {isSubmitting ? (
                        <>
                          <div className="relative w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span className="relative">Enviando...</span>
                        </>
                      ) : submitStatus === 'success' ? (
                        <>
                          <span className="relative text-lg">✅</span>
                          <span className="relative">¡Enviado!</span>
                        </>
                      ) : (
                        <>
                          <span className="relative text-lg">🚀</span>
                          <span className="relative">Enviar Mensaje</span>
                          <div className="relative w-5 h-5 overflow-hidden">
                            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </div>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-100/80 dark:bg-green-900/30 backdrop-blur-sm border border-green-200/50 dark:border-green-700/50 rounded-xl">
                      <div className="flex items-center gap-3 text-green-700 dark:text-green-300">
                        <span className="text-xl">🎉</span>
                        <span className="font-medium font-mono">¡Gracias por contactarme! Te responderé pronto.</span>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-400/20 dark:to-indigo-400/20 backdrop-blur-sm rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
            <span className="text-2xl animate-bounce">💡</span>
            <div className="text-left">
              <div className="font-semibold font-mono text-blue-700 dark:text-blue-300">¿Prefieres una llamada?</div>
              <div className="text-sm text-blue-600 dark:text-blue-400">Agenda una videollamada de 30 minutos gratuita</div>
            </div>
            <a
              href="#"
              className="ml-4 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white font-mono text-sm rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              Agendar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;