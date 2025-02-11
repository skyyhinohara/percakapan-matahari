import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { extractSpeed } from "@/utils/helpers";
import { useMemo } from 'react';
import { usePackageStore } from "@/store/packageStore";

interface PackageProps {
  name: string;
  price: string;
  speed: string;
  features: string[];
  isPopular?: boolean;
  progress: number;
}

interface Package {
  name: string;
  price: string;
  speed: string;
  features: string[];
  isPopular?: boolean;
  progress: number;
}

interface Location {
  name: string;
  packages: Package[];
}

export const locations: Location[] = [
  {
    name: "Tlogowaru",
    packages: [
      {
        name: "Paket Basic",
        price: "299K",
        speed: "20 Mbps",
        features: [
          "Kecepatan up to 20 Mbps",
          "Unlimited Kuota",
          "Support 24/7"
        ],
        progress: 65
      },
      {
        name: "Paket Pro",
        price: "499K",
        speed: "50 Mbps",
        features: [
          "Kecepatan up to 50 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Prioritas",
          "IP Static"
        ],
        isPopular: true,
        progress: 80
      },
      {
        name: "Paket Business",
        price: "999K",
        speed: "100 Mbps",
        features: [
          "Kecepatan up to 100 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Dedicated",
          "IP Static",
          "SLA 99.9%"
        ],
        progress: 95
      },
      {
        name: "Paket Ultimate",
        price: "1.499K",
        speed: "200 Mbps",
        features: [
          "Kecepatan up to 200 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "SLA 99.9%",
          "Network Monitoring"
        ],
        progress: 90
      },
      {
        name: "Paket Game",
        price: "599K",
        speed: "75 Mbps",
        features: [
          "Kecepatan up to 75 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "Optimized for Gaming",
          "Low Latency"
        ],
        progress: 85
      },
      {
        name: "Paket Stream",
        price: "799K",
        speed: "100 Mbps",
        features: [
          "Kecepatan up to 100 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "4K Streaming Ready",
          "Multidevice Support"
        ],
        progress: 92
      },
      {
        name: "Paket Creator",
        price: "1.299K",
        speed: "150 Mbps",
        features: [
          "Kecepatan up to 150 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "Upload Boost",
          "Content Creator Ready"
        ],
        progress: 88
      }
    ]
  },
  {
    name: "Gedangan",
    packages: [
      {
        name: "Paket Hemat",
        price: "249K",
        speed: "15 Mbps",
        features: [
          "Kecepatan up to 15 Mbps",
          "Unlimited Kuota",
          "Support 24/7"
        ],
        progress: 60
      },
      {
        name: "Paket Reguler",
        price: "399K",
        speed: "35 Mbps",
        features: [
          "Kecepatan up to 35 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Prioritas"
        ],
        progress: 75
      },
      {
        name: "Paket Premium",
        price: "699K",
        speed: "75 Mbps",
        features: [
          "Kecepatan up to 75 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Dedicated",
          "IP Static"
        ],
        isPopular: true,
        progress: 90
      },
      {
        name: "Paket Enterprise",
        price: "1.299K",
        speed: "150 Mbps",
        features: [
          "Kecepatan up to 150 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "SLA 99.9%"
        ],
        progress: 95
      },
      {
        name: "Paket Gamer Pro",
        price: "549K",
        speed: "50 Mbps",
        features: [
          "Kecepatan up to 50 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "Gaming Optimized",
          "Low Ping"
        ],
        progress: 80
      },
      {
        name: "Paket Streamer",
        price: "849K",
        speed: "100 Mbps",
        features: [
          "Kecepatan up to 100 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "Streaming Optimized",
          "High Upload Speed"
        ],
        progress: 92
      },
      {
        name: "Paket Professional",
        price: "1.199K",
        speed: "125 Mbps",
        features: [
          "Kecepatan up to 125 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "Business Priority",
          "Video Conference Ready"
        ],
        progress: 88
      }
    ]
  },
  {
    name: "Poncokusumo",
    packages: [
      {
        name: "Paket Starter",
        price: "199K",
        speed: "10 Mbps",
        features: [
          "Kecepatan up to 10 Mbps",
          "Unlimited Kuota",
          "Support 24/7"
        ],
        progress: 55
      },
      {
        name: "Paket Family",
        price: "349K",
        speed: "30 Mbps",
        features: [
          "Kecepatan up to 30 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Prioritas"
        ],
        isPopular: true,
        progress: 80
      },
      {
        name: "Paket Office",
        price: "599K",
        speed: "60 Mbps",
        features: [
          "Kecepatan up to 60 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Dedicated",
          "IP Static"
        ],
        progress: 90
      },
      {
        name: "Paket Corporate",
        price: "899K",
        speed: "100 Mbps",
        features: [
          "Kecepatan up to 100 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "SLA 99.9%"
        ],
        progress: 95
      },
      {
        name: "Paket Gaming",
        price: "449K",
        speed: "45 Mbps",
        features: [
          "Kecepatan up to 45 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "Game Server Priority",
          "Stable Connection"
        ],
        progress: 85
      },
      {
        name: "Paket Streaming",
        price: "749K",
        speed: "85 Mbps",
        features: [
          "Kecepatan up to 85 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "HD Streaming Ready",
          "Multi-Device Support"
        ],
        progress: 92
      },
      {
        name: "Paket Business Pro",
        price: "999K",
        speed: "110 Mbps",
        features: [
          "Kecepatan up to 110 Mbps",
          "Unlimited Kuota",
          "Support 24/7 Premium",
          "IP Static",
          "Business Priority",
          "Remote Work Ready"
        ],
        progress: 88
      }
    ]
  }
];

const SemiCircleProgress = ({ progress, speed }: { progress: number; speed: string }) => {
  const radius = 80;
  const strokeWidth = 12;
  const normalizedProgress = Math.min(100, Math.max(0, progress));
  const circumference = Math.PI * radius;
  const strokeDashoffset = circumference * (1 - normalizedProgress / 100);

  // Extract numeric value from speed string
  const speedValue = speed.split(' ')[0];

  return (
    <div className="relative w-40 h-28 mx-auto my-4">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 120"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background path */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* Progress path */}
        <path
          d="M 20 100 A 80 80 0 0 1 180 100"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2563eb" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        {/* Speed Text */}
        <text
          x="100"
          y="85"
          textAnchor="middle"
          className="text-3xl font-bold"
          fill="#2563eb"
          style={{ fontSize: '32px', fontWeight: 'bold' }}
        >
          {speedValue}
        </text>
        <text
          x="100"
          y="110"
          textAnchor="middle"
          className="text-sm"
          fill="#3b82f6"
          style={{ fontSize: '14px' }}
        >
          Mbps
        </text>
      </svg>
    </div>
  );
};

const PackageCard = ({ name, price, speed, features, isPopular, progress }: PackageProps) => {
  const { setSelected, currentLocationIndex } = usePackageStore();
  const currentLocation = locations[currentLocationIndex].name;

  // Menghitung progress berdasarkan kecepatan
  const calculateProgress = (speed: string) => {
    const value = parseInt(speed.split(' ')[0]);
    // Menggunakan 200 Mbps sebagai nilai maksimum
    const maxSpeed = 200;
    // Memastikan progress minimal 15% untuk paket terendah
    return Math.max(15, Math.min(100, (value / maxSpeed) * 100));
  };

  const actualProgress = calculateProgress(speed);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Set lokasi dan paket yang dipilih
    setSelected(currentLocation, name);
    // Scroll ke form kontak
    const element = document.getElementById('kontak');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const cardClasses = cn(
    "relative p-6 bg-white rounded-xl shadow-lg",
    "transition-all duration-300",
    "hover:shadow-xl hover:scale-105",
    "border-2 border-transparent hover:border-blue-500",
    "flex flex-col h-full",
    isPopular && "ring-2 ring-blue-500"
  );

  return (
    <div className={cardClasses}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-1 rounded-full text-sm font-semibold shadow-md">
            Populer
          </span>
        </div>
      )}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <SemiCircleProgress progress={actualProgress} speed={speed} />
        <div className="mt-4">
          <span className="text-3xl font-bold text-gray-800">{price}</span>
          <span className="text-gray-500 ml-1">/bulan</span>
        </div>
        <div className="space-y-3 mt-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto pt-6">
        <button 
          onClick={handleClick}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
          Pilih Paket
        </button>
      </div>
    </div>
  );
};

export const InternetPackages = () => {
  const { currentLocationIndex, setCurrentLocationIndex, setSelected } = usePackageStore();

  // Mendapatkan paket yang sudah diurutkan berdasarkan kecepatan
  const sortedPackages = useMemo(() => {
    return [...locations[currentLocationIndex].packages].sort((a, b) => 
      extractSpeed(a.speed) - extractSpeed(b.speed)
    );
  }, [currentLocationIndex]);

  const nextLocation = () => {
    const newIndex = currentLocationIndex === locations.length - 1 ? 0 : currentLocationIndex + 1;
    setCurrentLocationIndex(newIndex);
    // Reset pilihan paket ketika lokasi berubah
    setSelected(locations[newIndex].name, '');
  };

  const prevLocation = () => {
    const newIndex = currentLocationIndex === 0 ? locations.length - 1 : currentLocationIndex - 1;
    setCurrentLocationIndex(newIndex);
    // Reset pilihan paket ketika lokasi berubah
    setSelected(locations[newIndex].name, '');
  };

  return (
    <section id="pricing" className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={prevLocation}
            className="p-2 rounded-full hover:bg-blue-100 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold text-center">
            Paket Internet {locations[currentLocationIndex].name}
          </h2>
          <button
            onClick={nextLocation}
            className="p-2 rounded-full hover:bg-blue-100 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-8">
          {/* Baris pertama - 4 paket */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <AnimatePresence mode="wait">
              {sortedPackages.slice(0, 4).map((packageItem, index) => (
                <motion.div
                  key={packageItem.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="h-full"
                >
                  <PackageCard {...packageItem} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Baris kedua - 3 paket di tengah */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-[75%]">
              <AnimatePresence mode="wait">
                {sortedPackages.slice(4).map((packageItem, index) => (
                  <motion.div
                    key={packageItem.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="h-full"
                  >
                    <PackageCard {...packageItem} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
