import { create } from 'zustand';

interface PackageStore {
  selectedLocation: string;
  selectedPackage: string;
  currentLocationIndex: number;
  setSelected: (location: string, packageName: string) => void;
  setCurrentLocationIndex: (index: number) => void;
  reset: () => void;
}

export const usePackageStore = create<PackageStore>((set) => ({
  selectedLocation: '',
  selectedPackage: '',
  currentLocationIndex: 0,
  setSelected: (location, packageName) => set({ selectedLocation: location, selectedPackage: packageName }),
  setCurrentLocationIndex: (index) => set({ currentLocationIndex: index }),
  reset: () => set({ selectedLocation: '', selectedPackage: '', currentLocationIndex: 0 }),
}));
