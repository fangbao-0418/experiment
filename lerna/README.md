# lerna

# install
```
npm install --global lerna
or
yarn global add lerna
```

# usage
lerna add
添加一个包的版本为各个包的依赖
```
lerna add <package>[@version] [--dev] [--exact]
```

lerna clean
删除各个包下的node_modules

lerna import
导入指定git仓库的包作为lerna管理的包
```
lerna import <path-to-external-repository>
```