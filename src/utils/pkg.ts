// search pkg or utools npm_helper

import { useFetch, useLocalStorage } from '@vueuse/core';
import type { Ref } from 'vue';

export type PkgSource = 'unpkg' | 'jsdelivr' | 'jsdelivr-fastly' | 'esm';

export type Package = {
  name: string; // 名字
  version?: string; // 版本
  path?: string; // 路径
  url?: string; // 在线 umd
  active?: boolean; // 启用
  description?: string; // 描述
  source?: PkgSource; // 来源
};

export const getESMUrl = ({
  name,
  version = '',
  path = '',
  source
}: Package) => {
  version = version ? `@${version}` : '';
  let server =
    source === 'unpkg'
      ? 'https://unpkg.com/'
      : source === 'esm'
      ? 'https://esm.sh/'
      : 'https://cdn.jsdelivr.net/npm/';
  return server + `${name}${version}${path}`;
};

export const cdn = useLocalStorage<PkgSource>('setting-cdn', 'jsdelivr-fastly');

export const genCdnLink = (
  pkg: string,
  version: string | undefined,
  path: string
) => {
  version = version ? `@${version}` : '';
  switch (cdn.value) {
    case 'jsdelivr':
      return `https://cdn.jsdelivr.net/npm/${pkg}${version}${path}`;
    case 'jsdelivr-fastly':
      return `https://fastly.jsdelivr.net/npm/${pkg}${version}${path}`;
    case 'unpkg':
      return `https://unpkg.com/${pkg}${version}${path}`;
  }
};

/**
 * fetch pkg from unpkg?
 */
export function pkgFetch(packages: Package[]): Package[] {
  // packages  {
  //     name: '@vueuse/core',
  //     source: 'unpkg',
  //     description: 'Collection of essential Vue Composition Utilities',
  //     url: 'https://unpkg.com/@vueuse/core@9.0.0/index.mjs',
  //     version: '9.0.0'
  //   }
  const deps = [];

  for (const dep of packages) {
    deps.push({
      ...dep,
      source: dep.source || 'unpkg',
      description: dep.name,
      url: dep.url || getESMUrl(dep)
    });
  }

  return deps;
}

/**
 * 获取某库版本列表
 * https://github.com/element-plus/element-plus-playground/blob/main/src/utils/dependency.ts
 */
export const getVersions = (pkg: string) => {
  const url = `https://data.jsdelivr.com/v1/package/npm/${pkg}`;

  return useFetch(url, {
    initialData: [],
    afterFetch: (ctx) => ((ctx.data = ctx.data.versions), ctx),
    refetch: true
  }).json<string[]>().data as Ref<string[]>;
};
