
describe('pages/data/data.vue', () => {
	let page
  const pageUrl = '/pages/data/data'

	beforeAll(async () => {
		page = await program.reLaunch(pageUrl)
		await page.waitFor(1000)
	})

  it('获取data', async () => {
		let name = await page.data('name')
		expect(name).toBe('小王')
	})

  it('设置data', async () => {
    await page.setData({
      name: '小丽'
    })
		let name = await page.data('name')
		expect(name).toBe('小丽')
	})

  it('方法调用', async () => {
    await page.callMethod('setName', '小白')
		let name = await page.data('name')
		expect(name).toBe('小白')
	})

})