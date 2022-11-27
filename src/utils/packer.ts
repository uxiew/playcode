/**
 * @description 压缩、美化 css
 * @example 
  CSSPacker.pack(`body {
    background: #6e28d9;
    color: white;
    padding: 0 24px;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  body span {
    color: white;
  }`)
*/
const CSSPacker = {
  format: function (s: string) {
    //格式化代码
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, '$1');
    s = s.replace(/;\s*;/g, ';');
    s = s.replace(/\,[\s\.\#\d]*{/g, '{');
    s = s.replace(/([^\s])\{([^\s])/g, '$1 {\n\t$2');
    s = s.replace(/([^\s])\}([^\n]*)/g, '$1\n}\n$2');
    s = s.replace(/([^\s]);([^\s\}])/g, '$1;\n\t$2');
    return s;
  },
  pack: function (s: string) {
    //高级
    s = s.replace(/\/\*(.|\n)*?\*\//g, '');
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, '$1');
    s = s.replace(/\,[\s\.\#\d]*\{/g, '{');
    s = s.replace(/;\s*;/g, ';');
    s = s.replace(/;\s*}/g, '}');
    s = s.match(/^\s*(\S+(\s+\S+)*)\s*$/);
    return s == null ? '' : s[1];
  },
  packNor: function (s: string) {
    //普通
    s = s.replace(/\/\*(.|\n)*?\*\//g, '');
    s = s.replace(/\s*([\{\}\:\;\,])\s*/g, '$1');
    s = s.replace(/\,[\s\.\#\d]*\{/g, '{');
    s = s.replace(/;\s*;/g, ';');
    s = s.replace(/;\s*}/g, '}');
    s = s.replace(/([^\s])\{([^\s])/g, '$1{$2');
    s = s.replace(/([^\s])\}([^\n]s*)/g, '$1}\n$2');
    return s;
  }
};

// trim for Optimization of contrast
// const JSPack = (content: string = '') => content.replace(/\s+/g, ' ').trim();

// trim for Optimization of contrast
const trimCode = (code: string = '') => code.replace(/\n\s+/g, '');

export default {
  compress(lang: string, value: string) {
    if (/(sc|sa|le|c)ss$/.test(lang)) {
      return CSSPacker.pack(value);
    }

    return trimCode(value);
  }
};
