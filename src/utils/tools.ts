import { MAIN_FILE_REG } from '~/configs/settings';

export const isNotUndefined = (value: any) => {
  return value !== void 0;
};

export const isEntryFile = (name: string) => MAIN_FILE_REG.test(name);

export const isStyleFile = (name: string) => /\.(sc|sa|le|c)ss$/.test(name);

export const isScriptFile = (name: string) => /\.(j|t|mj|cj)s$/.test(name);

export const isJSXFile = (name: string) => /\.(j|t|)sx$/.test(name);

export const isTemplateFile = (name: string) => /\.htm(l|(lx)|x)?$/.test(name);

export const getExtension = (filename: string) => {
  const ext = filename.replace(/.*\./, '.');
  return filename === ext ? '' : ext;
};
// export const getProjectType = (type: string) => type.replace(/_.*/, '');

// trim for Optimization of contrast
export const trimCode = (code: string = '') => code.replace(/\n\s+/g, '');

export function debounce(fn: Function, n = 100) {
  let handle: any;
  return (...args: any[]) => {
    if (handle) clearTimeout(handle);
    handle = setTimeout(() => {
      fn(...args);
    }, n);
  };
}

// get mounted DOM id
export const getContainerDOMId = (code: string = '') => {
  const ids =
    /.*document\.getElementById\(["|'](.+?)["|']\)/.exec(code) ||
    /["|']#(.+?)["|']/.exec(code);

  return (ids && ids[1])?.replace('#', '') || '';
};
