import { getQueryData } from '@/api/query/comQuery';
import { getDicts } from '@/api/system/dict/data';
import useDictStore from '@/store/modules/dict';

import { getSysUserList } from './ruoyi';
/**
 * 获取字典数据
 */
export function useDict(...args) {
  const res = ref({});
  return (() => {
    args.forEach((dictType, index) => {
      res.value[dictType] = [];
      const dicts = useDictStore().getDict(dictType);
      if (dicts) {
        res.value[dictType] = dicts;
      } else if (dictType === 'sys_data_user') {
        getSysUserList().then((data) => {
          const list = data.rows;
          list.forEach((element) => {
            res.value[dictType].push({
              value: element.userId,
              label: element.userName,
            });
          });
        });
      } else if (dictType.includes('comQuery_')) {
        const queryType = dictType.replace('comQuery_', '');
        getQueryData(queryType).then((resp) => {
          res.value[dictType] = resp.data.map((p) => ({
            label: p.dictLabel,
            value: p.dictValue,
            elTagType: p.listClass,
            elTagClass: p.cssClass,
          }));
          useDictStore().setDict(dictType, res.value[dictType]);
        });
      } else {
        getDicts(dictType).then((resp) => {
          res.value[dictType] = resp.data.map((p) => ({
            label: p.dictLabel,
            value: p.dictValue,
            elTagType: p.listClass,
            elTagClass: p.cssClass,
          }));
          useDictStore().setDict(dictType, res.value[dictType]);
        });
      }
    });
    return toRefs(res.value);
  })();
}
