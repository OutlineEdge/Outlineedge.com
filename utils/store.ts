import { create } from "zustand";

type NavbarStore = {
  isOpen: boolean;
  id: string;
  setIsOpen: (isOpen: boolean) => void;
  setId: (id: string) => void;
};

type SubNavbarStore = {
  subIsOpen: boolean;
  subId: string;
  setSubIsOpen: (isOpen: boolean) => void;
  setSubId: (id: string) => void;
};

type CareerStore = {
  careerIsOpen: boolean;
  careerId: string;
  setCareerIsOpen: (isOpen: boolean) => void;
  setCareerId: (id: string) => void;
};

type FaqStore = {
  faqIsOpen: boolean;
  faqId: string;
  setFaqIsOpen: (isOpen: boolean) => void;
  setFaqId: (id: string) => void;
};

export const useNavbarStore = create<NavbarStore>((set) => ({
  isOpen: false,
  id: "",
  setIsOpen: (isOpen: boolean) => set({ isOpen: isOpen }),
  setId: (id: string) => set({ id: id }),
}));

export const useSubNavbarStore = create<SubNavbarStore>((set) => ({
  subIsOpen: false,
  subId: "",
  setSubIsOpen: (subIsOpen: boolean) => set({ subIsOpen: subIsOpen }),
  setSubId: (subId: string) => set({ subId: subId }),
}));

export const useCareerStore = create<CareerStore>((set) => ({
  careerIsOpen: false,
  careerId: "",
  setCareerIsOpen: (careerIsOpen: boolean) =>
    set({ careerIsOpen: careerIsOpen }),
  setCareerId: (careerId: string) => set({ careerId: careerId }),
}));

export const useFaqStore = create<FaqStore>((set) => ({
  faqIsOpen: false,
  faqId: "",
  setFaqIsOpen: (faqIsOpen: boolean) => set({ faqIsOpen: faqIsOpen }),
  setFaqId: (faqId: string) => set({ faqId: faqId }),
}));