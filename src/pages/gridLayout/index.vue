<template>
    <cz-girdLayout :requestData="girdData.data"></cz-girdLayout>
</template>

<script>
export default {
    data() {
        return {
            girdData: {
                type: 2,
                data: {
                  imageList: [
                    {imageUrl: 'http://img.zcool.cn/community/01fd2558370cffa8012060c8e1287c.gif'},
                    {imageUrl: 'http://img.zcool.cn/community/01fd2558370cffa8012060c8e1287c.gif'},
                    {imageUrl: 'http://img.zcool.cn/community/01fd2558370cffa8012060c8e1287c.gif'},
                    {imageUrl: 'http://img.zcool.cn/community/01fd2558370cffa8012060c8e1287c.gif'},
                    {imageUrl: 'http://img.zcool.cn/community/01fd2558370cffa8012060c8e1287c.gif'},
                    {imageUrl: 'http://img.zcool.cn/community/01fd2558370cffa8012060c8e1287c.gif'},
                    {imageUrl: 'http://img.zcool.cn/community/01fd2558370cffa8012060c8e1287c.gif'},
                    {imageUrl: 'http://img.zcool.cn/community/01fd2558370cffa8012060c8e1287c.gif'}
                  ],
                  proportion: 1.50,
                  column: 4,
                  rowSpacing: 10,
                  columnSpacing: 15,
                  padding: '10,0,10,10',
                  backgroundColor: '#FFFFFF',
                  dividerHeight: '10',
                  dividerColor: '#eee'
              }
            }
        }
    },
    methods: {
        
    }
}
</script>
<style></style>