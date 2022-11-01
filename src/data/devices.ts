export interface DropdownItemChild {
  label: string;
  icon?: string;
  key: number[];
}

export interface DropdownItem {
  label: string;
  icon?: string;
  items: DropdownItemChild[];
}

// ======== exprot ======
export const screenSizes: DropdownItem[] = [
  { label: 'DEFAULT', items: [{ label: 'Default', key: [0, 0] }] },
  {
    label: 'PHONE',
    items: [
      { label: 'Moto 4G', key: [360, 640] },
      { label: 'Galaxy S5', key: [360, 640] },
      { label: 'Pixel 2', key: [411, 731] },
      { label: 'Pixel 2 XL', key: [411, 823] },
      { label: 'iPhone 5/SE', key: [320, 568] },
      { label: 'iPhone 6/7/8', key: [375, 667] },
      { label: 'iPhone 6/7/8 Plus', key: [414, 736] },
      { label: 'iPhone X', key: [375, 812] }
    ]
  },
  {
    label: 'PAD',
    items: [
      { label: 'iPad', key: [768, 1024] },
      { label: 'iPad Pro', key: [1024, 1366] },
      { label: 'Surface Duo', key: [540, 720] },
      { label: 'Galaxy Fold', key: [280, 653] }
    ]
  }
];
