import { Shield, Clock, Award, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-h1 md:text-[52px] lg:text-[60px] text-primary leading-tight">
              Private Duty Home Health Care in Houston
            </h1>

            <p className="text-body text-gray-700 leading-relaxed">
              Andora delivers compassionate, professional care tailored to your loved ones' unique needs. Licensed nurses providing round-the-clock support in the comfort of home.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="cta"
                size="large"
                onClick={() => window.location.href = 'tel:+13462023538'}
              >
                Speak to a Care Specialist
              </Button>
              <Button
                variant="outline"
                size="large"
                onClick={() => navigate('/contact')}
              >
                Schedule Free Assessment
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-gray-200">
              <div className="flex flex-col items-center text-center">
                <Shield className="text-primary mb-2" size={32} />
                <p className="text-sm font-semibold text-gray-800">Licensed & Insured</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="text-primary mb-2" size={32} />
                <p className="text-sm font-semibold text-gray-800">24/7 Care</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="text-primary mb-2" size={32} />
                <p className="text-sm font-semibold text-gray-800">Experienced Team</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="text-primary mb-2" size={32} />
                <p className="text-sm font-semibold text-gray-800">Background Checked</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/Layer12.jpeg"
                alt="Compassionate nurse providing care to elderly patient in comfortable home setting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-3xl font-bold text-primary">24/7</p>
              <p className="text-sm text-gray-600">Care Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
