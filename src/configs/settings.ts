import { reactive } from 'vue';

interface Configs {
  // containerId: string; // 或许可以删除它，通过分析代码
  babel: Partial<{
    pragma: string;
    importSource: string;
    runtime: 'classic' | 'automatic';
  }>;
  // 启用预览
  preview: boolean;
  // windicss 启用
  windicss: boolean;
}

export type Settings = Partial<Configs>;

// entry point must be nameed with  main
export const MAIN_FILE_REG: RegExp = /^main\.(t|j)sx?$/;

// 导入解析文件后缀名 resolve extensions
export const extensions = [
  '.ts',
  '.js',
  '.tsx',
  '.jsx',
  '.vue',
  '.svelte',
  '.solid',
  '.mjs',
  '.json'
];

/**
 *  项目布局和配置的一些设置项
 */
export const settings: Settings = reactive({
  preview: true, // containerId: string; // 或许可以删除它，通过分析代码
  babel: {
    runtime: 'automatic'
  },
  windicss: false
});

export const setSettings = (configs: Settings | undefined) => {
  if (!configs) return;

  Object.assign(settings, {
    ...configs,
    preview: configs.preview === false ? false : true
  });
};
