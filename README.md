# Pseudo Random Distribution
伪随机算法PRD的测试用例

## 原理
[博客](https://blog.oonne.com/site/blog?id=41)

## 用法
``` javascript
import {C2P, P2C} from '../modules/index'
``` 

### 根据C值求数学期望
C2P(0.003802)

### 根据概率求C值
P2C(0.05)

## 单元测试
测试方法：  
  安装node.js  
  撰写测试用例、预期结果  
  运行npm run test  

测试用例：  
  /test/table.js  //p-c映射表  


## 其他脚本
生成1-30%的C值表：  
``` 
  npn run generatedTable
``` 

随机生成1000次攻击：  
``` 
  npn run generatedAttack
``` 

