014 - 双向数据绑定 - 输入框绑定（v-modal）
===

> Create by **jsliang** on **2020-04-23 15:30:57**  
> Recently revised in **2020-04-23 16:56:14**

## <a name="chapter-one" id="chapter-one"></a>一 目录

**不折腾的前端，和咸鱼有什么区别**

| 目录 |
| --- | 
| [一 目录](#chapter-one) | 
| <a name="catalog-chapter-two" id="catalog-chapter-two"></a>[二 前言](#chapter-two) |

## <a name="chapter-two" id="chapter-two"></a>二 前言

> [返回目录](#chapter-one)

核心：

> index.html

```html
<input type="text" v-modal="myName">
```

> index.js

```js
// 绑定 v-modal
const attrs = node.attributes;
[...attrs].forEach((attr) => {
  const attrName = attr.name;
  const attrValue = attr.value;
  if (attrName === 'v-modal') {
    node.value = this._data[attrValue];
    node.addEventListener('input', (e) => {
      const inputValue = e.target.value;
      this._data[attrValue] = inputValue;
    });
  }
});
```

通过查找节点，然后看是否有 `v-modal`，对该节点的 `input` 操作进行监听，然后进行数据绑定更改。

---

**不折腾的前端，和咸鱼有什么区别！**

> <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="知识共享许可协议" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">jsliang 的文档库</span> 由 <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/LiangJunrong/document-library" property="cc:attributionName" rel="cc:attributionURL">梁峻荣</a> 采用 <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">知识共享 署名-非商业性使用-相同方式共享 4.0 国际 许可协议</a>进行许可。<br />基于<a xmlns:dct="http://purl.org/dc/terms/" href="https://github.com/LiangJunrong/document-library" rel="dct:source">https://github.com/LiangJunrong/document-library</a>上的作品创作。<br />本许可协议授权之外的使用权限可以从 <a xmlns:cc="http://creativecommons.org/ns#" href="https://creativecommons.org/licenses/by-nc-sa/2.5/cn/" rel="cc:morePermissions">https://creativecommons.org/licenses/by-nc-sa/2.5/cn/</a> 处获得。