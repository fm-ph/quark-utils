import { uuid } from '../../src/common'

describe('common.uuid()', () => {
  it('Expect uuid to match regex format xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx', () => {
    expect(uuid()).toMatch(/([a-f\d]{8}(-[a-f\d]{4}){3}-[a-f\d]{12}?)/i)
  })
})
