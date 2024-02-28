<template>
	<view>
		<view class="name">{{ name }}</view>
		<button @click="setName('小红')">设置姓名</button>
	</view>
</template>
<script>
	export default {
		data() {
			return {
        name: '小王'
      }
		},
    methods: {
      setName(name) {
        this.name = name;
      }
    }
	}
</script>

<style>
	.flex-item {
		width: 33.3%;
		height: 200rpx;
		text-align: center;
		line-height: 200rpx;
	}

	.flex-item-V {
		width: 100%;
		height: 150rpx;
		text-align: center;
		line-height: 150rpx;
	}

	.text {
		margin: 15rpx 10rpx;
		padding: 0 20rpx;
		background-color: #ebebeb;
		height: 70rpx;
		line-height: 70rpx;
		text-align: center;
		color: #777;
		font-size: 26rpx;
	}

	.desc {
		/* text-indent: 40rpx; */
	}
	.flex-pc {
		display: flex;
		justify-content: center;
	}

  .uni-bg-red{
    background: rgb(247, 98, 96);
  }
</style>
