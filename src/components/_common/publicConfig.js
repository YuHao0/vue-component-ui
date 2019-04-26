const modulePublic = {
  padding: '10,10,10,10',              // 左、上、右、下边距
  backgroundImg: '',                   // 背景图url,背景色和背景图都存在的情况下优先取背景图
  backgroundColor: '#FFFFFF',          // 背景色
  dividerHeight: 10,
  dividerColor: '#F5F5F5'
}
const unit = {
  radio: window.fontSize,
  name: 'rem'
};
function dealPublicAttr(node, moduleData) {
  if (!node) {
    return
  }
  var paddingList = moduleData.padding.split(',');
  node.style.paddingLeft = paddingList[0] / unit.radio + unit.name;
  node.style.paddingTop = paddingList[1] / unit.radio + unit.name;
  node.style.paddingRight = paddingList[2] / unit.radio + unit.name;
  node.style.paddingBottom = paddingList[3] / unit.radio + unit.name;
  // node.style.borderBottom = moduleData.dividerHeight / unit.radio + unit.name + ' solid ' + moduleData.dividerColor;
  node.style.marginBottom = moduleData.dividerHeight / unit.radio + unit.name;
  node.style.background = `${moduleData.backgroundStyle.color} url(${moduleData.backgroundStyle.imageUrl}) no-repeat center top`;
  node.style.backgroundSize = '100% 100%';
  
  if (moduleData.proportion) {
    var height = (node.offsetWidth / moduleData.proportion) + parseInt(paddingList[1], 0) + parseInt(paddingList[3], 0) + moduleData.dividerHeight;
    height = height / unit.radio  + unit.name;
  }
  return {
    height: height || '',
    paddingBottom: parseInt(paddingList[3], 0)
  }
}

function dealHeight(node, option) {
  if (!node) {
    return
  }
  option.padding = option.padding || '0,0,0,0';
  option.dividerHeight = option.dividerHeight || 0;
  var paddingList = option.padding.split(',');
  node.style.paddingLeft = paddingList[0] / unit.radio + unit.name;
  node.style.paddingTop = paddingList[1] / unit.radio + unit.name;
  node.style.paddingRight = paddingList[2] / unit.radio + unit.name;
  node.style.paddingBottom = paddingList[3] / unit.radio + unit.name;
  if (option.proportion) {
    var height = (node.offsetWidth / option.proportion) + parseInt(paddingList[1], 0) + parseInt(paddingList[3], 0) + option.dividerHeight;
    height = height / unit.radio  + unit.name;
    node.style.height = height;
  }
}

let publicConfig = {
  modulePublic: modulePublic,
  dealPublicAttr: dealPublicAttr,
  dealHeight: dealHeight
}

export default publicConfig;
