const modulePublic = {
  padding: '10,10,10,10',              // 左、上、右、下边距
  backgroundImg: '',                   // 背景图url,背景色和背景图都存在的情况下优先取背景图
  backgroundColor: '#FFFFFF',          // 背景色
  dividerHeight: 10,
  dividerColor: '#F5F5F5'
}

function dealPublicAttr(node, moduleData) {
  if (!node) {
    return
  }
  var paddingList = moduleData.padding.split(',');
  node.style.paddingLeft = paddingList[0] + 'px';
  node.style.paddingTop = paddingList[1] + 'px';
  node.style.paddingRight = paddingList[2] + 'px';
  node.style.paddingBottom = paddingList[3] + 'px';
  node.style.borderBottom = moduleData.dividerHeight + 'px solid ' + moduleData.dividerColor;
  node.style.background = `${moduleData.backgroundColor} url(${moduleData.backgroundImg}) no-repeat center top`;
  if (moduleData.proportion) {
    var height = (node.offsetWidth / moduleData.proportion) + parseInt(paddingList[1], 0) + parseInt(paddingList[3], 0) + moduleData.dividerHeight + 'px';
  }
  return {
    height: height,
    paddingBottom: parseInt(paddingList[3], 0)
  }
}
  
let publicConfig = {
  modulePublic: modulePublic,
  dealPublicAttr: dealPublicAttr
}

export default publicConfig;
