
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingCard = ({ 
  title, 
  price, 
  features, 
  isPopular = false,
  speedPercentage,
  speed
}: {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  speedPercentage: number;
  speed: string;
}) => (
  <div className={`bg-white rounded-lg shadow-lg overflow-hidden animate-on-scroll ${isPopular ? 'border-2 border-blue-600 transform scale-105' : ''}`}>
    <div className="p-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="mb-6">
        <span className="text-4xl font-bold text-blue-600">{price}</span>
        <span className="text-gray-500">/bulan</span>
      </div>
      <div className="mb-6">
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${speedPercentage}%` }}></div>
        </div>
        <p className="text-sm text-gray-500 mt-2">Kecepatan {speed}</p>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-4 bg-gray-50">
      <Button className="w-full bg-blue-600 hover:bg-blue-700">Pilih Paket</Button>
    </div>
  </div>
);

export const Pricing = () => {
  const packages = [
    {
      title: "Paket Basic",
      price: "Rp 299K",
      speedPercentage: 20,
      speed: "30 Mbps",
      features: [
        "Kecepatan up to 30 Mbps",
        "Unlimited Kuota",
        "Support 24/7"
      ]
    },
    {
      title: "Paket Pro",
      price: "Rp 499K",
      speedPercentage: 40,
      speed: "50 Mbps",
      features: [
        "Kecepatan up to 50 Mbps",
        "Unlimited Kuota",
        "Support 24/7 Prioritas",
        "IP Static"
      ],
      isPopular: true
    },
    {
      title: "Paket Business",
      price: "Rp 999K",
      speedPercentage: 80,
      speed: "100 Mbps",
      features: [
        "Kecepatan up to 100 Mbps",
        "Unlimited Kuota",
        "Support 24/7 Dedicated",
        "IP Static",
        "SLA 99.9%"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 animate-on-scroll">Paket Internet</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PricingCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};
