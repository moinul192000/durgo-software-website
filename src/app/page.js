"use client"
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';


export default function Home() {
  return (
      <div className="container mx-auto">
        <ParallaxProvider>
      <motion.section 
          className="bg-gray-100 py-20 px-10 rounded-md" 
          id='home'
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold mb-6">Leading Software Firm in Dhaka</h1>
                <p className="text-xl mb-8">We provide web development and software-related consultancy services.</p>
                <a href="#" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Get Started</a>
              </div>
              <div className="md:w-1/2">
                {/* <Image src="durgo-software.png" alt="Durgo Software" className="w-full h-auto" /> */}
              </div>
            </div>
          </div>
        </motion.section>

        <Parallax y={[20, -20]} tagOuter="section">
          <div className="bg-white py-20" id='services'>
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-12">Our Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="bg-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                  <p className="text-gray-700">We specialize in developing modern and responsive websites using the latest technologies.</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Software Consultancy</h3>
                  <p className="text-gray-700">Our expert consultants can help you with software architecture, project management, and more.</p>
                </div>
                <div className="bg-gray-200 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
                  <p className="text-gray-700">We offer tailor-made software solutions to meet your specific business requirements.</p>
                </div>
              </div>
            </div>
          </div>
        </Parallax>
        </ParallaxProvider>
      <section className="bg-gray-100 p-10 my-5 rounded-md" id='about'>
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-8">About Durgo Software</h2>
              <p className="text-xl mb-8">Durgo Software is a leading software firm based in Dhaka, Bangladesh. With a team of
                highly skilled professionals, we deliver top-notch web development and software consultancy services to
                clients worldwide. Our focus is on providing innovative solutions that help businesses achieve their goals.</p>
              <a href="#" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Learn More</a>
            </div>
            <div className="md:w-1/2">
              <i className="fas fa-info-circle text-9xl text-blue-500"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-10 my-5 rounded-md" id='contact-us'>
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-gray-700">Have a project in mind or need more information? Contact us today.</p>
            </div>
            <div className="md:w-1/2 flex items-center justify-center md:justify-end">
              <div className="flex items-center space-x-4">
                <a href="tel:+8801711153735" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                  <span>Call Us</span>
                </a>
                <a href="mailto:info@durgo.xyz" className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4c1.657 0 3 1.343 3 3v8c0 1.657-1.343 3-3 3s-3-1.343-3-3V7c0-1.657 1.343-3 3-3zm0 0l8 5H4l8-5zm8 5v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9m2 4h12"></path>
                  </svg>
                  <span>Email Us</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
